import React from 'react'
import * as S from './styles'

export const Container: React.FC = ({ children }) => {
  return <S.Row data-testid="row-container">{children}</S.Row>
}

export default Container
