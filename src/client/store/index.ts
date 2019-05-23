import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'

import { UserActions } from './user/actions'
import userReducer, { User } from './user/reducer'

export interface State {
  user: User
}

type Actions = UserActions

const reducer = combineReducers<State, Actions>({
  user: userReducer,
})

const middlewares = applyMiddleware(thunk as ThunkMiddleware<State, Actions>)

const store = createStore(reducer, middlewares)

export type Dispatch = typeof store.dispatch

export default store
