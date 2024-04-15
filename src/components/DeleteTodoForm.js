import React from 'react';

export const DeleteTodoForm = ({deleteTodo, task}) => {
    const handleClick = e => {
        e.preventDefault();

        deleteTodo(task.id);
    };

    return (
        <button className='todo-btn' onClick={handleClick}>Supprimer la tâche</button>
    )
}