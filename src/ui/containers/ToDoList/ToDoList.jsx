import React from 'react';
import Todo from '@components/Todo/Todo';

const ToDoList = ({tasksList, validateTask, removeTask}) => {
    return (
        <div className="tasks-content">
            <div className="tasks-items">
                {
                    tasksList.map(task => (
                        <Todo key={task.id} task={task} validateTask={validateTask} removeTask={removeTask} />
                    ))
                }
            </div>
        </div>
    );
};

export default ToDoList;