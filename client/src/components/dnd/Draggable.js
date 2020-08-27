import React from 'react'

export const Draggable = ({ children, id, style }) => {
    const drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id)
        
        console.log('беру', id)
    }

    const noAllowDrop = (e) => {
        console.log('держу в недопустимом месте')
        e.stopPropagation()
    }

    return (
        <div id={id} draggable='true' onDragStart={drag} onDragOver={noAllowDrop} style={style}>
            {children}
        </div>
    )
}