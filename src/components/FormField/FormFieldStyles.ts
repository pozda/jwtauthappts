import styled from 'styled-components'
import styles from 'styles/values'

const StyledFormField = styled.input`
    border: 0;
    font-size: ${styles.typographyScale.TYPE20};
    padding: ${styles.unit.BASE*3}px ${styles.unit.BASE*6}px;
    color: ${styles.color.shade.DARK};
    margin: ${styles.unit.DOUBLE}px 0;
    &:focus {outline: 0;}
`

export {StyledFormField}