import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Layout from '.'

const RenderComponent = () =>
  renderWithTheme(<Layout>Layout is awesome</Layout>)

describe('<Layout />', () => {
  it('should render the children component', () => {
    RenderComponent()

    expect(screen.getByText(/layout is awesome/i)).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    RenderComponent()

    expect(screen.getByText(/layout is awesome/i).parentElement).toHaveStyle({
      backgroundColor: '#fff'
    })
  })
})
