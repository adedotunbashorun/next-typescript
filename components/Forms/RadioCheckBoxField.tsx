import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

function RadioCheckBoxField(props) {
    const { name, label, type, rest, options } = props
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            {options.map((optn, index) => {
                    return (
                        <div className="form-check" key={index}>
                            <Field className="form-check-input" type={type || 'checkbox'} name={name} id={name} value={optn.value} 
                                {...rest} />
                            <label className="form-check-label" htmlFor={name}>{optn.label}</label>
                        </div>
                    )
                }
            )}
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}
export default RadioCheckBoxField;