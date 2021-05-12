import React from 'react'
import * as S from './styles'
import Row from 'components/Row'

import { toBRL } from 'utils/currency'

export type CardProps = {
  images: string[]
  address: {
    city: string
    neighborhood: string
  }
  pricingInfos: {
    price: string
    businessType: string
    monthlyCondoFee?: string
    rentalTotalPrice?: string
  }
  bathrooms: number
  bedrooms: number
}

export const Card = ({
  address,
  pricingInfos,
  images,
  bathrooms,
  bedrooms
}: CardProps) => {
  const { rentalTotalPrice, price } = pricingInfos
  const { city, neighborhood } = address

  const image = (images.length && images[0]) || ''

  function isRental() {
    return pricingInfos.businessType === 'RENTAL'
  }

  return (
    <S.Card business={pricingInfos.businessType}>
      <S.Image image={image} data-testid="card-image" />
      <S.Wrapper>
        <S.Header>
          <S.Title
            color="blue"
            overflowHidden
          >{`${city} - ${neighborhood}`}</S.Title>
          <S.Title color="green" data-testid="card-price">
            {toBRL(rentalTotalPrice || price)}
            {isRental() && <S.Type>/month</S.Type>}
          </S.Title>
        </S.Header>
        <S.Description>
          <Row.Container>
            <Row.Item name="bathrooms">{bathrooms}</Row.Item>
            <Row.Item name="bedrooms">{bedrooms}</Row.Item>
          </Row.Container>
        </S.Description>
      </S.Wrapper>
    </S.Card>
  )
}

Card.defaultProps = {
  image: 'https://via.placeholder.com/310x180?text=Unavailable',
  title: 'apartment'
}

export default Card
