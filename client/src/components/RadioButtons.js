import React from 'react'

const RadioButtons = ({ priority, changeHandlerPriority }) => {
    return (
        <div className = 'task-priority inline'> 
            <div class = 'priority-block'>
                <input name="priority" id='pr-5' type="radio" value="5" checked={priority === '5'} onChange={changeHandlerPriority} ></input>
                <label for="pr-5" class="label-priority" title="Критический"></label>
                <input name="priority" id='pr-4' type="radio" value="4" checked={priority === '4'} onChange={changeHandlerPriority} ></input>
                <label for="pr-4" class="label-priority" title="Высокий"></label>
                <input name="priority" id='pr-3' type="radio" value="3" checked={priority === '3'} onChange={changeHandlerPriority} ></input>
                <label for="pr-3" class="label-priority" title="Средний"></label>
                <input name="priority" id='pr-2' type="radio" value="2" checked={priority === '2'} onChange={changeHandlerPriority} ></input>
                <label for="pr-2" class="label-priority" title="Нормальный"></label>
                <input name="priority" id='pr-1' type="radio" value="1" checked={priority === '1'} onChange={changeHandlerPriority} ></input>
                <label for="pr-1" class="label-priority" title="Низкий"></label>
            </div>
        </div>
    )
}

export default RadioButtons