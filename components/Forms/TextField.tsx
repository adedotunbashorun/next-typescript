import React from 'react';
import {
    Field,
    ErrorMessage,
    useField,
} from 'formik';

function TextField(props) {
    const { name, label,type,  placeholder, ...rest } = props;
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                className="form-control"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder || ""} 
                {...rest}
            />
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export default TextField;