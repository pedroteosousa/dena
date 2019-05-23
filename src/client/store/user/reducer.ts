import { LOGIN_FULFILLED, LOGOUT, UserActions } from './actions'

export type User = {
  id: string
} | null

export default (state: User = null, action: UserActions): User => {
  switch (action.type) {
    case LOGIN_FULFILLED:
      return action.payload
    case LOGOUT:
      return null
    default:
      return state
  }
}
