import * as Yup from 'yup';

const initForm = (formSchema: any) => {
    let _formData = {};
    let _validationSchema = {};

    for(var key of Object.keys(formSchema)){
        _formData[key] = "";

        if(formSchema[key].type === "text"){
            _validationSchema[key] = Yup.string();
        }else if(formSchema[key].type === "email"){
            _validationSchema[key] = Yup.string().email()
            .required()
        }else if(formSchema[key].type === "select"){
            _validationSchema[key] = Yup.string().oneOf(formSchema[key].options.map(o => o.value));
        }else if(formSchema[key].type === "radio" || formSchema[key].type === "checkbox"){
            _validationSchema[key] = Yup.string().oneOf(formSchema[key].options.map(o => o.value));
        }else if(formSchema[key].type === "password"){
            _validationSchema[key] = Yup.string()
            .required().min(6,'Must be atleast 6 characters.');
        } else if(formSchema[key].type === "file"){
            _validationSchema[key] = Yup.string();
        }

        if(formSchema[key].required){
            _validationSchema[key] = _validationSchema[key].required('Required');
        }
    }

    return {_formData, _validationSchema};
}

export default initForm