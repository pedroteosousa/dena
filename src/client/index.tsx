import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Topbar from './Topbar'

const theme = createMuiTheme()

const App: React.SFC = () => {
  const [user, setUser] = useState<string | null>(null)

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar
        onLogin={setUser}
        onLogout={() => {
          setUser(null)
        }}
        onFailure={err => {
          console.error(err)
        }}
        loggedIn={user !== null}
      />
      <h1>{user}</h1>
    </MuiThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
