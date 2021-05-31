export const addTodo = (task, tasks) => {
    return [task, ...tasks]
}

export const completeTodo = (tasks, id) => {
    return tasks.map(task => {
        return task.id === Number(id) ? {...task, completed:!task.completed} : {...task};
    });
}

export const removeTodo = (tasks, id) => {
    return  tasks.filter(task => {
        return task.id !== id;
    });
}