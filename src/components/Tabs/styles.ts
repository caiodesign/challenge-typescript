import styled from 'styled-components'

type Tab = {
  active: boolean
}

export const List = styled.ul`
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  user-select: none;
  text-transform: capitalize;
  min-height: 2rem;
  color: ${({ theme }) => theme.color.default};
  font-weight: ${({ theme }) => theme.weight.bold};
`

export const Tab = styled.li<Tab>`
  cursor: pointer;
  padding-bottom: 2px;
  opacity: 0.7;
  opacity: ${({ active }) => active && 1};

  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
`

export const Divisor = styled.span`
  margin: 0 1rem;
  font-weight: ${({ theme }) => theme.weight.light};
`
