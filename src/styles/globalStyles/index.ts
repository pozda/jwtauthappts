import {createGlobalStyle} from 'styled-components'
import splashImage from 'assets/images/splashImage.jpg'
import styles from 'styles/values'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap&subset=latin-ext');
  body {
    font-family: ${styles.font.PRIMARY};
    margin: 0;
    color: ${styles.color.shade.DARK};
    background: ${styles.color.gradient.PRIMARY}, url(${splashImage});
    background-size: cover;
    background-position: center;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles