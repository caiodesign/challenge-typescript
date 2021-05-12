import React from 'react'
import * as S from './styles'

export type ItemProps = {
  name?: string
  children?: string | number
}

export const Item = ({ name, children }: ItemProps) => {
  if (!name || !children) return null

  return (
    <S.Item>
      <S.Text color="blue" data-testid="row-item-value">
        {children}
      </S.Text>
      <S.Text color="gray" data-testid="row-item-name">
        {name}
      </S.Text>
    </S.Item>
  )
}

export default Item
