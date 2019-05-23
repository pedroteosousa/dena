import { Button, IconButton, Menu, MenuItem } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import React, { Fragment, useState } from 'react'
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  const menuOpen = Boolean(anchorEl)

  return isLoggedIn ? (
    <Fragment>
      <IconButton
        edge="end"
        aria-owns={menuOpen ? 'material-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={menuOpen}
        onClose={handleMenuClose}
      >
        <GoogleLogout
          render={props => (
            <MenuItem
              onClick={() => {
                if (props) {
                  props.onClick()
                }
                handleMenuClose()
              }}
            >
              Logout
            </MenuItem>
          )}
          clientId={clientId}
          onLogoutSuccess={() => dispatch(logout())}
        />
      </Menu>
    </Fragment>
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
