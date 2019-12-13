import React from 'react'
import {StyledButton} from './ButtonStyles'

type Props = {
  text: string,
  onClick: () => void,
  secondary?: boolean,
  disabled?: boolean
  
};

const Button = ({text, onClick, secondary, disabled}: Props) => (
    <StyledButton secondary={!!secondary} onClick={onClick} disabled={!!disabled}>
        {text}
    </StyledButton>
)

export default Button