import React from 'react'
import * as S from './styles'

import { toBRL } from 'utils/currency'

export type CardProps = {
  title?: string
  image?: string
  price?: string
  rent?: boolean
  children?: React.ReactNode
}

export const Card = ({ title, price, image, rent, children }: CardProps) => {
  return (
    <S.Card>
      <S.Image image={image} data-testid="card-image" />
      <S.Wrapper>
        <S.Header>
          <S.Title color="blue">{title}</S.Title>
          <S.Title color="green" data-testid="card-price">
            {toBRL(price || 0)}
            {Boolean(rent) && <S.Type>/month</S.Type>}
          </S.Title>
        </S.Header>
        <S.Description>{children}</S.Description>
      </S.Wrapper>
    </S.Card>
  )
}

Card.defaultProps = {
  image: 'https://via.placeholder.com/310x180?text=Unavailable',
  title: 'apartment'
}

export default Card
