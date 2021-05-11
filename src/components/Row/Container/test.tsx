import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

const props = {
  children: 'Row.Container is awesome!'
}

const RenderComponent = () => renderWithTheme(<Container {...props} />)

describe('<Row.Container />', () => {
  it('should render the children', () => {
    RenderComponent()

    expect(screen.getByTestId('row-container')).toHaveTextContent(
      props.children
    )
  })

  it('should match with snapshot', () => {
    RenderComponent()

    expect(screen).toMatchSnapshot()
  })
})
