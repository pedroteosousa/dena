import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useSelector } from 'react-redux'

import store, { State } from './store'

import Topbar from './Topbar'

const theme = createMuiTheme()

const App: React.SFC = () => {
  const user = useSelector<State, State['user']>(state => state.user)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <h1>{user && user.id}</h1>
    </MuiThemeProvider>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
