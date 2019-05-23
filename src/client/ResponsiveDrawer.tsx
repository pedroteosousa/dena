import { Drawer, Hidden } from '@material-ui/core'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import React from 'react'

export const DRAWER_WIDTH = 240

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      flexShrink: 0,
      width: DRAWER_WIDTH,
    },
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}))

interface ResponsiveDrawerProps {
  open: boolean
  toggleDrawer: () => void
}

const ResponsiveDrawer: React.SFC<ResponsiveDrawerProps> = ({
  children,
  open,
  toggleDrawer,
}) => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={toggleDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {children}
        </Drawer>
      </Hidden>
    </div>
  )
}

export default ResponsiveDrawer
