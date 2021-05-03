// .storybook/preview.js

import { ThemeProvider } from 'styled-components';

import { Theme } from '../src/styles/theme'

import GlobalStyles from '../src/styles/global'



const withThemeProvider=(Story,context)=>{
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];
