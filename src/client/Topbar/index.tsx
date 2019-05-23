import {
  AppBar,
  IconButton,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/styles'
import React from 'react'

import AuthButton from './AuthButton'

import { DRAWER_WIDTH } from '../ResponsiveDrawer'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    marginLeft: DRAWER_WIDTH,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}))

interface TopbarProps {
  toggleDrawer: () => void
}

const Topbar: React.SFC<TopbarProps> = ({ toggleDrawer }) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={toggleDrawer}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          dena
        </Typography>
        <AuthButton />
      </Toolbar>
    </AppBar>
  )
}

export default Topbar
