import React, {forwardRef} from 'react';

const Input = forwardRef(({id, label, ...props}, ref) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref}/>
        </p>
    );
});

export default Input;