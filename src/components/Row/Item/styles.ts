import styled, { css } from 'styled-components'

export const Item = styled.div`
  width: 100%;
  max-width: 32rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.default};
  cursor: pointer;
`

export const Text = styled.p`
  ${({ theme, color = 'blue' }) => css`
    color: ${theme.color[color]};
    font-weight: ${theme.weight.medium};
  `}
`
