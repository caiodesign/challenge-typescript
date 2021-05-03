import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Card from '.'

const RenderComponent = () => renderWithTheme(<Card>Card is awesome</Card>)

describe('<Main />', () => {
  it('should render the children component', () => {
    RenderComponent()

    expect(screen.getByText(/Card is awesome/i)).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    RenderComponent()

    expect(screen.getByText(/Card is awesome/i).parentElement).toHaveStyle({
      backgroundColor: '#fff'
    })
  })
})
