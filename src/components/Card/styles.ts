import styled, { css } from 'styled-components'

export type Card = {
  business?: string
}

export type TitleProps = {
  color: string
  overflowHidden?: boolean
}

export type ImageProps = {
  image: string
}

export const Card = styled.div<Card>`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.default};
  cursor: pointer;
  margin: 1rem;
  position: relative;

  @media (min-width: 638px) {
    max-width: 28rem;
  }

  &::before {
    color: ${({ theme }) => theme.color.white};
    content: '${({ business }) => `${business}`}';
    position: absolute;
    top: 14px;
    left: -20px;
    width: 80px;
    padding: 2px;
    background-color: ${({ theme, business }) =>
      business === 'SALE' ? theme.color.green : theme.color.blue};
    overflow: hidden;
    transform: rotateY(0deg) rotate(-45deg);
    text-align: center;
  }
`

export const Image = styled.div<ImageProps>`
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
  ${({ theme, color, overflowHidden }) => css`
    color: ${theme.color[color]};
    font-weight: ${theme.weight.medium};
    white-space: ${overflowHidden ? 'nowrap' : 'initial'};
    overflow: ${overflowHidden ? 'hidden' : 'initial'};
    text-overflow: ${overflowHidden ? 'ellipsis' : 'initial'}; ;
  `}
`

export const Type = styled.span`
  ${({ theme }) => css`
    color: ${theme.color.gray};
    font-weight: ${theme.weight.light};
    white-space: initial;
    overflow: initial;
    text-overflow: initial;
  `}
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Description = styled.div`
  margin-top: 1.6rem;
`
