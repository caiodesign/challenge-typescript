import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Hero from '.'

const args = {
  Header: () => <p>Hero header</p>,
  children: <h1>Hero children is awesome</h1>
}

const RenderComponent = () => renderWithTheme(<Hero {...args} />)

describe('<Hero />', () => {
  it('should render the children component', () => {
    RenderComponent()

    expect(screen.getByText('Hero children is awesome')).toBeInTheDocument()
  })

  it('should render the navbar component inside Hero', () => {
    RenderComponent()

    expect(screen.getByText('Hero header')).toBeInTheDocument()
  })

  it('should match with snapshot', () => {
    RenderComponent()

    expect(screen).toMatchSnapshot()
  })
})
