import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import { Item } from '.'

const props = {
  name: 'bathroom',
  value: 2
}

const RenderComponent = () => renderWithTheme(<Item {...props} />)

describe('<Main />', () => {
  it('should render the Item name', () => {
    RenderComponent()
    expect(
      expect(screen.getByTestId('row-item-name')).toHaveTextContent(props.name)
    )
  })

  it('should render the Item value', () => {
    RenderComponent()
    expect(screen.getByTestId('row-item-value')).toHaveTextContent(
      `${props.value}`
    )
  })
})
