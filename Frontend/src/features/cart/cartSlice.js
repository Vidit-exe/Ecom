import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const existingItem = state.cartItems.find(i => i._id === item._id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({ ...item, quantity: 1 })
      }

      state.totalQuantity += 1
      state.totalPrice += item.price
    },
    removeFromCart(state, action) {
      const itemId = action.payload
      const item = state.cartItems.find(i => i._id === itemId)

      if (item) {
        state.totalQuantity -= item.quantity
        state.totalPrice -= item.price * item.quantity
        state.cartItems = state.cartItems.filter(i => i._id !== itemId)
      }
    },
    clearCart(state) {
      state.cartItems = []
      state.totalQuantity = 0
      state.totalPrice = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
