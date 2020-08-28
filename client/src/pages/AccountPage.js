import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Axios from 'axios'

const AccountPage = () => {
    const { user } = useContext(AuthContext)
    const [formInfo, setFormInfo] = useState({ name: user.login, password: '', repeatPassword: '', about: user.about })

    console.log(user.login)

    const changeHandler = (e) => {
        setFormInfo({ ...formInfo, [e.target.name]: e.target.value })
    }

    const pressSave = async () => {
        await Axios.post('/api/users/updateUser', { name: formInfo.name, about: formInfo.about }, { withCredentials: true })
    }

    const pressCancel = () => {

    }

    return (
        <div>
            <div>
                Вы вошли в Шараж.Агиле как <span>{user.login}</span>
            </div>
            <div>
                Аккаунт Agile
            </div>
            <div>
                <div>
                    <div>
                        Отображаемое имя
                        <input
                            name="name"
                            placeholder={user.login}
                            value={formInfo.name}
                            onChange={changeHandler}
                            disabled={true}
                        ></input>
                    </div>
                    <div>
                        Пароль
                        <input
                            name="password"
                            placeholder='************'
                            //value={formInfo.password}
                            onChange={changeHandler}
                            disabled={true}
                        ></input>
                    </div>
                    <div>
                        Проверка пароля
                        <input
                            name="repeatPassword"
                            placeholder='************'
                            //value={formInfo.repeatPassword}
                            onChange={changeHandler}
                            disabled={true}
                        ></input>
                    </div>
                    <div>
                        О себе
                        <textarea
                            rows="15"
                            cols="20"
                            name="about"
                            maxLength="1000"
                            placeholder='Введите а'
                            value={formInfo.about}
                            onChange={changeHandler}
                        ></textarea>
                    </div>
                    <div>
                        <button
                            name='save'
                            onClick={pressSave}
                        >Сохранить</button>
                        <button
                            name='cancel'
                            onClick={pressCancel}
                        >Сбросить</button>
                    </div>
                </div>
                <div>
                    <div>картинка</div>
                    <div>
                        {user.login}
                    </div>
                    <div>что-то сделал </div>
                    <div>Создано задач <span>24</span></div>
                    <div>В работе <span>1</span></div>
                    <div>Решено <span>2</span></div>
                    <div>Отправлено в архив <span>1</span></div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage