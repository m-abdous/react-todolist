import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
import TodoForm from '@containers/TodoForm/TodoForm';
import ToDoList from '@containers/ToDoList/ToDoList';

afterEach(() => {
    cleanup();
})

test('Todo Form is rendred', () => {  
    render(<TodoForm />);
});

test('Todo Form is rendred', () => {  
    const tasks = [
        {
            id:1,
            title : 'task1',
            completed : false
        },
        {
            id:2,
            title : 'task2',
            completed : false
        }
    ];
    render(<ToDoList tasksList={tasks} />);
});