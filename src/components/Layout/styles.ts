import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.media.mobile}) {
    padding: 5rem;
  }
`

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
