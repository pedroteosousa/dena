import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import AuthButton from './AuthButton'

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
})

interface AuthProps {
  loggedIn: boolean
  onLogin: (user: string) => void
  onLogout: () => void
  onFailure: (error: Error) => void
}

const Topbar: React.SFC<AuthProps> = ({
  loggedIn,
  onFailure,
  onLogin,
  onLogout,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            dena
          </Typography>
          <AuthButton
            loggedIn={loggedIn}
            onFailure={onFailure}
            onLogin={onLogin}
            onLogout={onLogout}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Topbar
