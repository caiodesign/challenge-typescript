export const Theme = {
  color: {
    default: '#101439',
    green: '#02c488',
    blue: '#2B327D',
    gray: '#f3f3f5',
    white: '#fff'
  },
  space: {
    container: '5rem'
  }
}

export type Color = {
  default: string
  green: string
  blue: string
  gray: string
  white: string
}

export type Space = {
  container: string
}

export type ThemeType = {
  theme: {
    color: Color
    space: Space
  }
}

export default Theme
