import React from 'react';
import FileField from './FileField';
import RadioCheckBoxField from './RadioCheckBoxField';
import SecretField from './SecretField';
import SelectField from './SelectField';
import TextField from './TextField';


function getFormElement(elementName, elementSchema) {
    const props = {
        name: elementName,
        label: elementSchema.label,
        options: elementSchema.options
    };

    if (elementSchema.type === "text" || elementSchema.type === "email") {
        return <TextField {...props} />
    }

    if (elementSchema.type === "checkbox" || elementSchema.type === "radio") {
        return <RadioCheckBoxField {...props} />
    }

    if (elementSchema.type === "password") {
        return <SecretField {...props} />
    }

    if (elementSchema.type === "file") {
        return <FileField {...props} />
    }

    if (elementSchema.type === "select") {
        return <SelectField  {...props} />
    }
}
export default getFormElement;