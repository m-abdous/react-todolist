import React, { useState } from 'react';
import InputField from '@components/Form/InputField/InputField';
import Button from '@components/Button/Button';

const TodoForm = ({AddTask}) => {

    const [value, setFieldValue] = useState('');
    const [validation, setValidation] = useState(false);

    const setInputValue = (e) => {
        setFieldValue(e.target.value);
        setValidation(e.target.value === "");
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        if(value) {
            AddTask(value);
            setFieldValue('');
        } else {
            setValidation(true);
        }
    };

    return (
        <div className="todo-form"   data-testid="todo-form">
            <form onSubmit={HandleSubmit}>
                <h1 id="todoFormId"> To do list application</h1>
                <div className="todo-form__content" aria-labelledby="todoFormId">
                    <InputField 
                        mandatory={true} 
                        maxLength="100" 
                        value={value} 
                        label="Task name" 
                        validate={validation}
                        errorMsg='This field is required' 
                        helper='Write your to do list' 
                        type="text" 
                        placeholder="Add unit test to my to do list project..." 
                        setInputValue={setInputValue} />

                    <Button 
                        type="submit" 
                        onClickEvnt={HandleSubmit}
                        className="todo-form__content-cta button button--primary">
                            <span>Add task!</span>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;