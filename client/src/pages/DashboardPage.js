import React from 'react'
import Axios from 'axios'

const DashboardPage = () => {
    const loadData = async () => {
        const { data } = await Axios.get('/dashboard')
        console.log(data)
    }

    loadData()

    return (
        <div>
            Dashboard
        </div>
    )
}

export default DashboardPage