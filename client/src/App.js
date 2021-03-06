import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import { useRoutes } from './routes'
import { NavbarPanel } from './components/NavbarPanel'

function App() {
  const { user } = useContext(AuthContext)

  const isAuthenticated = !!user

  const routes = useRoutes(isAuthenticated)

  return (
    <BrowserRouter>
      {isAuthenticated && <NavbarPanel />}
      {routes}
    </BrowserRouter>
  )
}

export default App;
