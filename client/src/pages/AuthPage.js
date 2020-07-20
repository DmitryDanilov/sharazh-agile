import React, { useState } from 'react'
import Axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../css/AuthPage.css'

const AuthPage = () => {
    const auth = useContext(AuthContext)

    const [authForm, setAuthForm] = useState({ login: '', password: '' })

    const changeHandler = event => {
        setAuthForm({ ...authForm, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        const { data } = await Axios.post('/api/auth/register', { ...authForm })
        console.log('зарегистрирован ', data)
    }

    const loginHandler = async () => {
        const { data } = await Axios.post('/api/auth/login', { ...authForm })
        auth.login(data.user)
    }

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            loginHandler()
        }
    }

    return (
        <div className='auth-page'>
            <div className='auth-form'>
                <div className='auth-title'>Авторизация</div>
                <div className='auth-input'>
                    <input
                        id="login"
                        name="login"
                        value={authForm.login}
                        onChange={changeHandler}
                        placeholder={'Введите логин'}
                    />
                </div>
                <div className='auth-input'>
                    <input
                        id="password"
                        name="password"
                        value={authForm.password}
                        onChange={changeHandler}
                        placeholder={'Введите пароль'}
                        onKeyUp={pressEnter}
                    />
                </div>
                <div className='auth-input'>
                    <button
                        onClick={loginHandler}
                    >Войти</button>
                    <button
                        onClick={registerHandler}
                    >Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default AuthPage