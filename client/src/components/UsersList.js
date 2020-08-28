import React from 'react'

export const UsersList = ({ users, selectedUser, changeSelectedUser }) => {
    if (selectedUser) {
        return (
            <div className = 'task-performer inline'>
                <select className = 'task-performer-list' value={selectedUser} onChange={changeSelectedUser}>
                    <option key={'all'} value={0}>Все задачи</option>
                    {
                        users && users.map(el => {
                            return <option key={el} value={el}>{el}</option>
                        })
                    }
                </select>
            </div>
        )
    }

    return (
        <div></div>
    )
}