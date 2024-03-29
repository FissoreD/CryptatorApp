import { configureStore } from '@reduxjs/toolkit'
import toolReducer from '../features/toolSlice'
import colorReducer from '../features/colorSlice'
import numberReducer from '../features/numberSlice'
import letterReducer from '../features/letterSlice'
import windowReducer from '../features/windowSlice'
import solverConfigSlice from '../features/solverConfigSlice'

export const store = configureStore({
  reducer: {
    tool: toolReducer,
    color: colorReducer,
    number: numberReducer,
    letter: letterReducer,
    window: windowReducer,
    solver: solverConfigSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch