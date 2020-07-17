import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { useRoutes } from './routes'
import { NavbarPanel } from './components/NavbarPanel'
import { FooterPanel } from './components/FooterPanel'

function App() {

  const { user, login, logout } = useAuth()

  const isAuthenticated = !!user

  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{
      user, login, logout, isAuthenticated
    }}>
      <BrowserRouter>
        {isAuthenticated && <NavbarPanel />}
        {routes}
      </BrowserRouter>
      <FooterPanel />
    </AuthContext.Provider>
  )
}

export default App;
