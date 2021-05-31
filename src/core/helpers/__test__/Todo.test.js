import { addTodo, completeTodo, removeTodo } from '@helpers/ToDo';

test('addTodo should add todo', () => {
    const initialTasks = [
        { id: 1, title: 'task 1', completed: false },
        { id: 2, title: 'task 2', completed: false }
    ]
    const newTask = { id: 3, title: 'task 3', completed: false }
    const expectedTasks = [
        { id: 3, title: 'task 3', completed: false },
        { id: 1, title: 'task 1', completed: false },
        { id: 2, title: 'task 2', completed: false }
    ]
    const result = addTodo(newTask, initialTasks);
    expect(result).toEqual(expectedTasks)
});


test('Should complete task', () => { 
    const initialTasks = [{ id: 1, title: 'task1', completed: false }];
    const expectedTasks = [{ id: 1, title: 'task1', completed: true }];
    const result = completeTodo(initialTasks, 1);
    expect(result[0].completed).toBeTruthy();
    expect(result).toEqual(expectedTasks);
});

test('Should remove task from list', () => {
    const initialTasks = [
        { id: 1, title: 'task 1', completed: false },
        { id: 2, title: 'task 2', completed: false },
        { id: 3, title: 'task 3', completed: false }
    ];
    const expectedTasks = [
        { id: 1, title: 'task 1', completed: false },
        { id: 2, title: 'task 2', completed: false }
    ];
    const result = removeTodo(initialTasks, 3);
    expect(result).toEqual(expectedTasks)
});
