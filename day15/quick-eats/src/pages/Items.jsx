import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../app/productsSlice";



const Items = () => {

    const {items , loading , error} = useSelector(state => state.products )  ;
    const dispatch = useDispatch();

    //fetchProduct , and dispatch

    //after mount 
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    // cardSlice -> 
    //in the map -> button -> addToCard -> when click over button, your card slice should hand a addToCard thunk
    // Card.jsx -> this should show all the items present in the card 
    // //Card.jsx items should have removeFromCard -> 1 item should get remove
    // Card.jsx -> clearCard -> when clicked over this button, card should become empty
    // Card.jsx -> each item should have 2 buttons , Increase quantity and Decrease quantity -> it should be between 0 - 10
    // all the changes should reflect in the store 
    return(<>
    {loading && <p>Loading....</p>}
    {error && <p>{error}</p>}
    <div style={{display : 'flex' , gap : "20px" , padding : "20px" , flexWrap: "wrap" }}>

        {items.map(item => (
        <div key={item.id} style={{width : "500px", border: "1px solid black" , margin: "20px" , borderRadius: "20px"}}>
            <img src={item.image} width="300px" />
            <h3>{item.title}</h3>
            <p>{item.category}</p>
            <p>{item.price}</p>
        </div>
    ))}

    </div>
    
    
    </>)

}

export default Items;