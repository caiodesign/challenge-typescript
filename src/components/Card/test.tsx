import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const props = {
  title: 'itaim bibi (alugel)',
  price: '7476',
  rent: true,
  image:
    'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg'
}

const RenderComponent = () =>
  renderWithTheme(<Card {...props}>Card is awesome</Card>)

describe('<Card />', () => {
  it('should render the title', () => {
    RenderComponent()

    expect(
      screen.getByRole('heading', { name: /itaim bibi \(alugel\)/i })
    ).toBeInTheDocument()
  })

  it('should render the price', () => {
    RenderComponent()

    expect(screen.getByTestId('card-price')).toHaveTextContent('R$ 7.476,00')
  })

  it('should render the word "month" case rent', () => {
    RenderComponent()

    expect(screen.getByText(/\/month/i)).toBeInTheDocument()
  })

  it('should render the image background correctly', () => {
    RenderComponent()

    expect(screen.getByTestId('card-image')).toHaveStyle({
      backgroundImage: `url(${props.image})`
    })
  })
})
