import { configureStore } from '@reduxjs/toolkit'
import detailsManReducer from './slices/man-details-slice'

export const store = configureStore({
  reducer: {
    detailsMan: detailsManReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch