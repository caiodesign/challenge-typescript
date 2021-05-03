import React from 'react'
import * as S from './styles'

export type ItemProps = {
  name?: string
  value?: string | number
}

export const Item = ({ name, value }: ItemProps) => {
  if (!name || !value) return null

  return (
    <S.Item>
      <S.Text color="blue" data-testid="row-item-name">
        {name}
      </S.Text>
      <S.Text color="gray" data-testid="row-item-value">
        {value}
      </S.Text>
    </S.Item>
  )
}

export default Item
