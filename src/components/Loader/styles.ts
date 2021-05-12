import styled from 'styled-components'

export const Overlay = styled.h1`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 3;
  background-color: ${({ theme }) => theme.color.white};
  justify-content: center;
`
