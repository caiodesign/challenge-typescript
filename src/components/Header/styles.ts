import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.6rem 5rem;
  background-color: ${({ blackTheme, theme }) =>
    blackTheme ? theme.color.default : 'transparent'};
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`

export const Logo = styled.img`
  max-width: 120px;
  cursor: pointer;
`
