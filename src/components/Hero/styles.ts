import styled, { css } from 'styled-components'

type Props = {
  bg?: string
}

export const Container = styled.div<Props>`
  position: relative;
  background-size: cover;
  background-image: ${({ bg }) => `url(${bg})`};
  height: 90vh;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    @media (min-width: ${theme.media.mobile}) {
      height: 40rem;
    }
  `}
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  height: 100%;
  justify-content: center;
`
