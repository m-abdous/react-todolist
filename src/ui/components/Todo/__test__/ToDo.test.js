import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
import Todo from '@components/Todo/Todo';

afterEach(() => {
    cleanup();
})

test('check Todo is redred', () => {  
    const toDo = {
        id:1,
        title: "My first task",
        completed : false
    }
    render(<Todo task={toDo} />);
    const toDoElement = screen.getByTestId('task');
    expect(toDoElement).toBeInTheDocument();
    expect(toDoElement).toHaveTextContent('My first task');
    expect(toDoElement).not.toContainHTML('task__item--completed');
});

test('check Todo is completed', () => {  
    const toDo = {
        id:1,
        title: "My first task",
        completed : true
    }
    render(<Todo task={toDo} />);
    const toDoElement = screen.getByTestId('task');
    expect(toDoElement).toBeInTheDocument();
    expect(toDoElement).toHaveTextContent('My first task');
    expect(toDoElement).not.toContainHTML('task__item-btn--validate');
    expect(toDoElement).toContainHTML('task__item--completed');
});
