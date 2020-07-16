import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import AccountPage from './pages/AccountPage'

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/account' exact>
                    <AccountPage />
                </Route>
                <Route path='/dashboard' exact>
                    <DashboardPage />
                </Route>
                <Redirect to="/dashboard" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}