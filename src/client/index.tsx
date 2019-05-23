import CssBaseline from '@material-ui/core/CssBaseline'
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core/styles'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider, useSelector } from 'react-redux'

import store, { State } from './store'

import Content from './Content'
import ResponsiveDrawer from './ResponsiveDrawer'
import Topbar from './Topbar'

const theme = createMuiTheme()

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
})

const App: React.SFC = () => {
  const classes = useStyles()

  const [drawerOpen, setDrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Topbar toggleDrawer={toggleDrawer} />
        <ResponsiveDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
        <Content />
      </div>
    </MuiThemeProvider>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
