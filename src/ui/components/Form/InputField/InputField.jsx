import React from 'react';


const InputField = ({type, maxLength, placeholder, disabled, label, mandatory, setInputValue, value, helper, errorMsg, validate}) => {
    return (
        <div className={"field-content "+ (validate ? 'field-content--error' : '')}>
            {label && <label className="field-content__label">{label} {helper && <span className="field-content__helper">{helper} {mandatory && "(required field)"}</span>}</label> }
            <input 
                data-testid="task-field"
                type={type || 'text'} 
                value={value}
                maxLength    = {maxLength}
                placeholder  = {placeholder}
                onChange     = {setInputValue}
                disabled     = {disabled}
                className={"field-content__input field-content__input--"+type + (validate ? ' field-content--error' : '')}
                aria-invalid={validate && "true"}
             />
             { (errorMsg && validate)  && <span className="field-content__error">{errorMsg}</span>}

        </div>

    )
}

export default InputField;