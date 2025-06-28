import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    increaseQuantity: (state , action) => {
      state.items.find((item) => item.id === action.payload).quantity++;
    },
    decreaseQuantity: (state , action) => {
      state.items.find((item) => item.id === action.payload).quantity--;
    }
  }
});

export const { addToCart, removeFromCart, clearCart , increaseQuantity , decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
