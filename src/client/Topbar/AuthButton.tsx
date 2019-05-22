import React from 'react'
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login'

import { auth } from '../common/API'

const onSuccess = (onLogin: (user: string) => void) => (
  response: GoogleLoginResponse | GoogleLoginResponseOffline,
) => {
  if (!('code' in response)) {
    const token = response.getAuthResponse().id_token
    auth(token).then(({ data: { id } }) => onLogin(id))
  }
}

if (!process.env.CLIENT_ID) {
  throw new Error('No CLIENT_ID defined')
}

const clientId = process.env.CLIENT_ID

interface AuthButtonProps {
  loggedIn: boolean
  onLogin: (user: string) => void
  onLogout: () => void
  onFailure: (error: Error) => void
}

const AuthButton: React.SFC<AuthButtonProps> = ({
  loggedIn,
  onFailure,
  onLogin,
  onLogout,
}) => {
  return loggedIn ? (
    <GoogleLogout clientId={clientId} onLogoutSuccess={onLogout} />
  ) : (
    <GoogleLogin
      clientId={clientId}
      onSuccess={onSuccess(onLogin)}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default AuthButton
