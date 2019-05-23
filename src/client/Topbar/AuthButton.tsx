import { Button } from '@material-ui/core'
import React from 'react'
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'

import { Dispatch, State } from '../store'
import { login, LOGIN_FAILED, logout } from '../store/user/actions'

const onSuccess = (dispatch: Dispatch) => (
  response: GoogleLoginResponse | GoogleLoginResponseOffline,
) => {
  if (!('code' in response)) {
    const token = response.getAuthResponse().id_token
    dispatch(login(token))
  }
}

if (!process.env.CLIENT_ID) {
  throw new Error('No CLIENT_ID defined')
}

const clientId = process.env.CLIENT_ID

const AuthButton: React.SFC = () => {
  const dispatch = useDispatch<Dispatch>()
  const isLoggedIn = useSelector<State, boolean>(state => state.user !== null)

  return isLoggedIn ? (
    <GoogleLogout
      render={props => (
        <Button {...props} color="inherit">
          Logout
        </Button>
      )}
      clientId={clientId}
      onLogoutSuccess={() => dispatch(logout())}
    />
  ) : (
    <GoogleLogin
      render={props => (
        <Button {...props} color="inherit">
          Login
        </Button>
      )}
      clientId={clientId}
      onSuccess={onSuccess(dispatch)}
      onFailure={(error: Error) =>
        dispatch({
          payload: error,
          type: LOGIN_FAILED,
        })
      }
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default AuthButton
