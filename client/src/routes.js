import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import AccountPage from './pages/AccountPage'
import CreateTaskPage from './pages/CreateTaskPage'
import DetailPage from './pages/DetailPage'

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/createTask'>
                    <CreateTaskPage />
                </Route>
                <Route path='/account'>
                    <AccountPage />
                </Route>
                <Route path='/dashboard'>
                    <DashboardPage />
                </Route>
                <Route path='/detail/:number'>
                    <DetailPage />
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