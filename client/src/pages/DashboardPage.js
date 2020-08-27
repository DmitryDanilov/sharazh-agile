import React from 'react'
import { ToolMenu } from '../components/ToolMenu'
import { OptionsMenu } from '../components/OptionsMenu'
import { DashboardProvider } from '../context/DashboardContext'
import '../css/DashboardPage.css'
import { ColumnsArea } from '../components/ColumnsArea'

const DashboardPage = () => {

    return (
        <DashboardProvider>
            <div className='page-top-area'>
                <div className='page-main-title'>
                    <span className="main-title-text">Доска</span>&nbsp; <span className="main-title-text text-colored">задач</span>&nbsp;
                </div>
                <div className='options-menu'>
                    <OptionsMenu />
                </div>
            </div>
            <div className='page-dashboard'>
                <ColumnsArea />
                <ToolMenu />
            </div>
        </DashboardProvider>
    )
}

export default DashboardPage