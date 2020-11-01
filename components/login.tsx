import React, { useEffect, useState} from "react";
import * as Yup from 'yup';
import DynamicForm from '~/components/Forms/DynamicForm';
import Form from '~/components/Forms/Form';
import form from '~/validations/form';
import loginSchema from '~/schema/login.schema';
import SubmitButton from "./Forms/SubmitButton";

function LoginComponent () {
    const [formData, setFormData] = useState({});
    const [validationSchema, setValidationSchema] = useState({});
    
    const initForm = (formSchema) => {
        const { _formData, _validationSchema } = form(formSchema);

        setFormData(_formData);
        setValidationSchema(Yup.object().shape({ ..._validationSchema }));
    }

    useEffect(() => {   
        initForm(loginSchema);
    }, []);

    const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        console.log(values);
        setSubmitting(false);
    }

    return (
        <>
        <div className="col-lg-10 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
            <img className="rounded mx-auto d-block mb-3 mt-5" src="" alt="Logo" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <Form
                enableReinitialize
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {Object.keys(loginSchema).map( (key, ind) => (
                    <div key={key}>
                        {DynamicForm(key, loginSchema[key])}
                    </div>
                ))}
                <div className="checkbox mb-3 mt-2">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <SubmitButton className="btn btn-lg btn-primary btn-base btn-block mb-5" title="Login" />
            </Form>
            
        </div>
        </>
    );
}

export default LoginComponent;
