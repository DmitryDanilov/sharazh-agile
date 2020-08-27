import React from 'react'

const RadioButtons = ({ priority, changeHandlerPriority }) => {
    return (
        <div>
            <input name="priority" type="radio" value="1" checked={priority === '1'} onChange={changeHandlerPriority} ></input>1
            <input name="priority" type="radio" value="2" checked={priority === '2'} onChange={changeHandlerPriority} ></input>2
            <input name="priority" type="radio" value="3" checked={priority === '3'} onChange={changeHandlerPriority} ></input>3
            <input name="priority" type="radio" value="4" checked={priority === '4'} onChange={changeHandlerPriority} ></input>4
            <input name="priority" type="radio" value="5" checked={priority === '5'} onChange={changeHandlerPriority} ></input>5
        </div>
    )
}

export default RadioButtons