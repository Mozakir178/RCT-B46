import { useDispatch, useSelector } from "react-redux"
import { submitOrder } from "../app/orderSlice";
import { clearCart } from "../app/cartSlice";

const CheckoutButton = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart.items);
    const user = useSelector(state => state.auth.user)

    const handleCheckout = async () => {
        const order = {
            userId: user.uid,
            items: cartItem,
            total: cartItem.reduce((sum, curr) => sum + curr.price * curr.quantity, 0)
        }

        await dispatch(submitOrder(order));
        dispatch(clearCart())
        // send user to the thank you page

    }

    return (
            <button onClick={handleCheckout}>Checkout</button>
        )
}

export default CheckoutButton ;