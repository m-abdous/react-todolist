import React, { Fragment, useState } from 'react';
import MainLayout from '@layouts/MainLayout/MainLayout';
import TodoForm from '@containers/TodoForm/TodoForm';
import ToDoList from '@containers/ToDoList/ToDoList';
import { addTodo, completeTodo, removeTodo } from '@helpers/Todo';

const Home = () => {
    let initialTasksList = [];
    const [ tasks, setTasksList ] = useState(initialTasksList);

    const addNewTask = (value) => {
        setTasksList(addTodo({id:tasks.length+1, title:value, completed:false}, tasks));
    };

    const validateTask = (task) => {
        setTasksList(completeTodo(tasks, task.id));
    };

    const removeTask = (task) => {
        setTasksList(removeTodo(tasks, task.id));
    };

    return (
        <Fragment>
            <MainLayout>
                <div className="container">
                    <TodoForm AddTask={addNewTask}/>
                     { tasks &&  ( <ToDoList tasksList={tasks}  validateTask={validateTask} removeTask={removeTask} /> ) }
                </div>
            </MainLayout>
        </Fragment>
    );
}
export default Home;