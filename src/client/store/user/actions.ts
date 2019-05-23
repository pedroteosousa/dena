import { Dispatch } from '..'

import { auth } from '../../common/API'
import { User } from './reducer'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

interface LoginPendingAction {
  type: typeof LOGIN_PENDING
}

interface LoginFulfilledAction {
  payload: User
  type: typeof LOGIN_FULFILLED
}

interface LoginFailedAction {
  payload: Error
  type: typeof LOGIN_FAILED
}

interface LogoutAction {
  type: typeof LOGOUT
}

export const login = (token: string) => (dispatch: Dispatch) => {
  dispatch({
    type: LOGIN_PENDING,
  })
  auth(token).then(({ data: userData }) => {
    dispatch({
      payload: userData,
      type: LOGIN_FULFILLED,
    })
  })
}

export const logout = () => (dispatch: Dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}

export type UserActions =
  | LoginPendingAction
  | LoginFulfilledAction
  | LoginFailedAction
  | LogoutAction
