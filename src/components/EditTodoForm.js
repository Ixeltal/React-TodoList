import React, {useState} from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const [value,setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue('');
    };
    return (
        <form className='EditTodo' onSubmit={handleSubmit}>
            <input type='text'className='todo-input' value={value}
            placeholder='Modifier la tâche' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Update la liste</button>
        </form>
    )
}