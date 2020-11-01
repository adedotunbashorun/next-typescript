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

function SecretField(props) {
    const { name, label,type,  placeholder, ...rest } = props;
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="form-group">
                {label && <label htmlFor={name}>{label}</label>}
                <InputGroup className="input-group-alternative">
                    <Field
                        className="form-control"
                        type={(show) ? "password" : 'text'}
                        name={name}
                        id={name}
                        placeholder={placeholder || ""} 
                        {...rest}
                    />
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className={(show) ? "fa fa-eye" : 'fa fa-eye-slash'} onClick={() => setShow(!show)}/>
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
            </div>
        </>
    )
}

export default SecretField;