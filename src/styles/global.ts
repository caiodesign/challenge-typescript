import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
  }
  h1 {
    font-size: 2.4rem;
  }
`

export default GlobalStyles
