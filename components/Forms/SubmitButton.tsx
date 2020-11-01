import React from 'react';
import {
    useFormikContext,
} from 'formik';

function SubmitButton(props){
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();
    
    return (
        <button type="submit" {...rest} disabled={isSubmitting}>{title}</button>
    )
}

export default SubmitButton;