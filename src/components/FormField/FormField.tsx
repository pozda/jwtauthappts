import React from 'react'
import {StyledFormField} from './FormFieldStyles'

type Props = {
    placeholder?: string,
    type?: string,
    onKeyDown?: () => void,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const FormField = (props: Props) => <StyledFormField {...props} />

export default FormField