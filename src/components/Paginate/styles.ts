import styled, { css } from 'styled-components'

export const StyledPaginateContainer = styled.div`
  ul {
    display: flex;
    margin: 2rem 0;
    justify-content: flex-end;
  }
  .previous,
  .next {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    cursor: pointer;
    font-weight: bold;
  }
  .page-number {
    margin: 0 0.4rem;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${({ theme }) => css`
      background-color: ${theme.color.white};
      color: ${theme.color.default};
      border: 1px solid ${theme.color.default};
    `}
  }
  .selected {
    ${({ theme }) => css`
      background-color: ${theme.color.default};
      color: ${theme.color.white};
      border: 1px solid ${theme.color.default};
    `}
  }
`
