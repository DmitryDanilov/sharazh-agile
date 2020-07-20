import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import AccountPage from './pages/AccountPage'
import CreateTaskPage from './pages/CreateTaskPage'

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/createTask' exact>
                    <CreateTaskPage />
                </Route>
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