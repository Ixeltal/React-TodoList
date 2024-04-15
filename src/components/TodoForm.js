import React, {useState} from 'react';

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue('');
    };
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text'className='todo-input' value={value}
            placeholder='Quelle est la tâche à ajouter ?' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Todo</button>
        </form>
    )
}