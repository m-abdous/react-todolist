import React from 'react';
import Button from '@components/Button/Button';

const Todo = ({task, validateTask, removeTask}) => {
    return (
        <div data-testid="task" className={"task__item" + (task.completed  ? " task__item--completed" : '')}  id={task.id}>
            <div className="task__item-title">
                {task.completed &&
                    <span className="task__item-icon">
                    <span className="sr-only">task {task.title} is validated</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/>
                    </svg>
                    </span>
                }
                {task.title}
            </div>
            {task.completed}
            <div className="task__item-actions">
                { !task.completed && 
                    <Button title="validateTask" className="task__item-btn task__item-btn--validate button button--icon" type="button" onClickEvnt={()=>{validateTask(task)}}>
                        <span className="sr-only">Validate {task.title}</span>
                        <svg  width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                            <path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/>
                        </svg>
                    </Button> 
                }
                <Button title="removeTask"  data-testid="btnremove" className="task__item-btn task__item-btn--delete  button button--icon"   type="button" onClickEvnt={()=>{removeTask(task)}}>
                    <span className="sr-only">Remove {task.title} from to do list</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default Todo;