import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
import InputField from '@components/Form/InputField/InputField';
import Button from '@components/Button/Button';
import TodoForm from '@containers/TodoForm/TodoForm';

afterEach(() => {
    cleanup();
})

test('Todo Form is redred', () => {  
    render(<TodoForm />);
});

test('Todo Form contain form, field task and button', () => {  
    const {queryByTestId} =  render(<TodoForm />);
    expect(queryByTestId("task-field")).toBeTruthy();
    expect(queryByTestId("button")).toBeTruthy();
    expect(queryByTestId("todo-form")).toBeTruthy();
});

describe('Todo Form submit', () => {

    it('Update Field task value', () => {  
        const {queryByTestId} =  render(<InputField />);
        const taskField = queryByTestId('task-field');
        fireEvent.change(taskField, {target: {value : "Task"}});
        expect(taskField.value).toBe("Task")
    
    });
})

describe('Todo Form submit', () => {
    describe("with empty value", () => {
        it('check does not submit form', () => {  
            const addNewTask = jest.fn();
            const {queryByTestId} =  render(<TodoForm AddTask={addNewTask}/>);
            const taskField = queryByTestId('task-field');
            fireEvent.click(queryByTestId('button'));
            expect(addNewTask).not.toHaveBeenCalled();
            expect(taskField).toContainHTML('field-content--error');
        });
        it('check form does submited', () => {  
            const addNewTask = jest.fn();
            const {queryByTestId} =  render(<TodoForm AddTask={addNewTask}/>);
            const todoFormSelector = queryByTestId('todo-form');
            const taskField = queryByTestId('task-field');
            fireEvent.change(taskField, {target: {value : "Task"}});
            fireEvent.click(queryByTestId('button'));
            expect(addNewTask).toHaveBeenCalled();
            expect(taskField.value).toBe("");
            expect(taskField).not.toContainHTML('field-content--error');
        });
    })
})


