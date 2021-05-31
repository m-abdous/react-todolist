import React from 'react';


const Button = ({type, disabled, onClickEvnt, children, className, title}) => {
    
    return (
            <button 
                title= {title}
                data-testid="button"
                type={type || 'button'} 
                onClick     = {onClickEvnt}
                disabled     = {disabled}
                className={className}
             >{children}</button>
    )
}

export default Button;