import React from 'react';
import {
    Formik,
    Form as FormikForm,
    useFormik,
} from 'formik';

function Form(props) {
    return (
        <Formik
            {...props}
        >
            <FormikForm className="needs-validation">
                {props.children}
            </FormikForm>
        </Formik>
    );
}

export default Form;