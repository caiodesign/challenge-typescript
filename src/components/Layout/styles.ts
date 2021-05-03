import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 5rem;
  background-color: ${({ theme }) => theme.color.white};
`

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`
