import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '@/features/cart/CartSlice'
import productReducer from '@/features/products/ProductSlice'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    products: productReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch