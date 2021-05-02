import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.4rem;
  }
  h1 {
    font-size: 2.4rem;
  }
`

export default GlobalStyles
