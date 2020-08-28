import React, { useState } from 'react'
import Axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import '../css/AuthPage.css'

const AuthPage = () => {
    const { login } = useContext(AuthContext)

    const [authForm, setAuthForm] = useState({ login: '', password: '' })

    const changeHandler = event => {
        setAuthForm({ ...authForm, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        const { data } = await Axios.post('/api/auth/register', authForm)
        console.log('зарегистрирован ', data)
    }

    const loginHandler = async () => {
        try {
            await login(authForm)
        }
        catch (err) {
            console.log('Ошибка авторизации', err)
        }
    }

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            loginHandler()
        }
    }

    return (
        <div className='auth-page'>
         <div className='auth-page-layout'>
            <div className='auth-form'>
                <div className='auth-title'>Вход в <span className='text-colored'>Agile</span></div>
                <div className='auth-input'>
                    <input
                        id="login"
                        name="login"
                        value={authForm.login}
                        onChange={changeHandler}
                        placeholder={'Логин'}
                    />
                </div>
                <div className='auth-input'>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={authForm.password}
                        onChange={changeHandler}
                        placeholder={'Пароль'}
                        onKeyUp={pressEnter}
                    />
                </div>
                <div className='auth-input'>
                 <div className='auth-button clickable-button'> <button
                        onClick={loginHandler}
                    >Агиле!</button></div>  
                    <div className='auth-button clear-button'><button
                        onClick={registerHandler}
                    ><span className='text-colored'>Регистрация</span></button>
                </div>              
                </div>
                </div>
                <div className='auth-page-footer-text'><span class="text-colored">"Шараж-Монтаж" © 2020 </span><span> / Никакие права не защищены, буква "c" в кружке ничего не значит, это обман</span></div>
            </div>
        </div>

    )
}

export default AuthPage