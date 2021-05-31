import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
import Todo from '@components/Todo/Todo';
import ToDoList from '@containers/ToDoList/ToDoList';

afterEach(() => {
    cleanup();
})

test('Todo List is redred', () => {
    const tasks = [
        {
            id:1,
            title : 'task1',
            completed : false
        }
    ]
    render(<ToDoList tasksList={tasks} />);
});