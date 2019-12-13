import styled from 'styled-components'
import styles from 'styles/values'

const StyledButton = styled.button<{secondary: boolean, disabled: boolean}>`
  border: 1px solid ${styles.color.shade.WHITE};
  background-color: ${styles.color.shade.TRANSPARENT};
  color: ${styles.color.shade.WHITE};
  transition: ${styles.transition.PRIMARY};
  padding: ${styles.unit.BASE*3}px ${styles.unit.DOUBLE*4}px;
  margin: ${styles.unit.DOUBLE}px 0;
  cursor: ${props => !props.disabled && 'pointer'};
  font-size: ${styles.typographyScale.TYPE16};
  font-weight: ${styles.fontWeight.REGULAR};
  letter-spacing: ${styles.letterSpacing.PRIMARY};
  opacity: ${props => props.disabled && 0.7};
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    background-color: ${props => props.secondary ? styles.color.brand.SECONDARY : styles.color.brand.PRIMARY}; ;
    transform: skew(45deg,0);
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: -35px;
    z-index: -1;
    transition: ${styles.transition.PRIMARY};
  }
  &:hover {
    ${props => !props.disabled && `
      border: 1px solid ${props.secondary ? styles.color.brand.SECONDARY : styles.color.brand.PRIMARY};
    `}
    &:before {
      width: calc(100% + 55px);
    }
  }
  &:focus {
    outline: 0;
  }
`

export {StyledButton}