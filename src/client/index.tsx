import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import AuthButton from './Topbar/AuthButton'

const App: React.SFC = () => {
  const [user, setUser] = useState<string | null>(null)

  return (
    <div>
      <h1>{user}</h1>
      <AuthButton
        onLogin={setUser}
        onLogout={() => {
          setUser(null)
        }}
        onFailure={err => {
          console.error(err)
        }}
        loggedIn={user !== null}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
