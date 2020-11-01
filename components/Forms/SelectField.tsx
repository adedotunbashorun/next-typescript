import React from 'react';
import {
    Field,
    ErrorMessage,
} from 'formik';

function SelectField(props) {
    const { name, label, multiple, options } = props
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                as="select"
                className="form-control"
                id={name}
                name={name}
                multiple={multiple || false}
            >
                <option value="" >Choose...</option>
                {options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
            </Field>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}
export default SelectField;