import React from 'react'
import { Droppable } from '../components/dnd/Droppable'
import { Draggable } from '../components/dnd/Draggable'

const AccountPage = () => {
    const droppableStyle = {
        backgroundColor: 'red',
        width: '250px',
        height: '400px',
        margin: '32px'
    }
    return (
        <div style={{
            display: 'flex'
        }}>
            <Droppable id='dr1' style={droppableStyle}>
                <Draggable id='drag1'>
                    <div style={{ backgroundColor: 'green', height: '30px', width: '80%', margin: '10px' }}>Кап</div>
                </Draggable>
                <Draggable id='drag3'>
                    <div style={{ backgroundColor: 'green', height: '30px', width: '80%', margin: '10px' }}>Ча</div>
                </Draggable>
                <Draggable id='drag4'>
                    <div style={{ backgroundColor: 'green', height: '30px', width: '80%', margin: '10px' }}>Че</div>
                </Draggable>
                <Draggable id='drag2'>
                    <div style={{ backgroundColor: 'green', height: '30px', width: '80%', margin: '10px' }}>Как</div>
                </Draggable>
            </Droppable>
            <Droppable id='dr2' style={droppableStyle}>

            </Droppable>
        </div>
    )
}

export default AccountPage