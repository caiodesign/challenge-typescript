import styled, { css } from 'styled-components'

type Props = {
  bg?: string
}

export const Container = styled.div<Props>`
  position: relative;
  background-size: cover;
  background-image: ${({ bg }) => `url(${bg})`};
  background-position: center;
  height: 90vh;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
  }

  ${({ theme }) => css`
    @media (min-width: ${theme.media.mobile}) {
      height: 40rem;
    }
  `}
`

export const Layer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  height: inherit;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  height: 100%;
  justify-content: center;
  font-size: 3rem;
`
