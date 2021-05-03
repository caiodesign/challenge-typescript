import styled, { css } from 'styled-components'

import { CardProps } from '.'

export type TitleProps = {
  color: string
}

export const Card = styled.div`
  width: 100%;
  max-width: 32rem;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.default};
  cursor: pointer;
`

export const Image = styled.div<CardProps>`
  height: 18rem;
  overflow: hidden;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Wrapper = styled.div`
  padding: 1.6rem;
`

export const Title = styled.h4<TitleProps>`
  ${({ theme, color }) => css`
    color: ${theme.color[color]};
    font-weight: ${theme.weight.medium};
  `}
`

export const Type = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.gray};
    font-weight: ${theme.weight.light};
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Description = styled.div`
  margin-top: 1.6rem;
`
