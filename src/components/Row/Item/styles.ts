import styled, { css } from 'styled-components'

export const Item = styled.div`
  display: inline-flex;
  margin-right: 1rem;

  * {
    &:not(:first-child) {
      margin-left: 0.4rem;
    }
  }
`

export const Text = styled.p`
  ${({ theme, color = 'blue' }) => css`
    color: ${theme.color[color]};
    font-weight: ${theme.weight.medium};
  `}
`
