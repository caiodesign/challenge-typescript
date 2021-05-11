import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Title from '.'

const RenderComponent = () => renderWithTheme(<Title>Title is awesome</Title>)

describe('<Title />', () => {
  it('should render the children text', () => {
    RenderComponent()

    expect(screen.getByText('Title is awesome')).toBeInTheDocument()
  })

  it('should match with snapshot', () => {
    RenderComponent()

    expect(screen).toMatchSnapshot()
  })
})
