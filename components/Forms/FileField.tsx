import React, { useState } from 'react';
import {
    Field,
    ErrorMessage,
    useField,
} from 'formik';
import {
    InputGroup,
    InputGroupText,
    InputGroupAddon,
  } from "reactstrap";

function FileField(props) {
    const { name, label,type, ...rest } = props;
    return (
        <>
            <div className="form-group">
                {label && <label htmlFor={name}>{label}</label>}
                <InputGroup className="input-group-alternative">
                    <Field
                        className="form-control"
                        type={type || 'file'}
                        name={name}
                        id={name}
                        {...rest}
                    />
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
            </div>
        </>
    )
}

export default FileField;