import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const props = {
  images: [
    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg'
  ],
  address: {
    city: 'sp',
    neighborhood: 'Vila Olímpia'
  },
  pricingInfos: {
    price: '100',
    businessType: 'SALE',
    monthlyCondoFee: '200',
    rentalTotalPrice: ''
  },
  bathrooms: 1,
  bedrooms: 2
}

const RenderComponent = (Props = props) =>
  renderWithTheme(<Card {...Props}>Card is awesome</Card>)

describe('<Card />', () => {
  it('should render the title', () => {
    RenderComponent()

    expect(
      screen.getByRole('heading', {
        name: `${props.address.city} - ${props.address.neighborhood}`
      })
    ).toBeInTheDocument()
  })

  it('should render the price', () => {
    RenderComponent()

    expect(screen.getByTestId('card-price')).toHaveTextContent('R$ 100,00')
  })

  it('should render the word "month" case rent', () => {
    const newProps = props

    newProps.pricingInfos.businessType = 'RENTAL'
    newProps.pricingInfos.rentalTotalPrice = '100'
    RenderComponent(newProps)

    expect(screen.getByText(/\/month/i)).toBeInTheDocument()
  })

  it('should render the image background correctly', () => {
    RenderComponent()

    expect(screen.getByTestId('card-image')).toHaveStyle({
      backgroundImage: `url(${props.images[0]})`
    })
  })
})
