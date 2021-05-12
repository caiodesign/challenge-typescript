import { fireEvent, screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Tabs from '.'

const props = {
  options: [{ id: 'ZAP' }, { id: 'VIVAREAL' }],
  active: 'ZAP'
}

const RenderComponent = (onClick: () => void) =>
  renderWithTheme(<Tabs {...props} onClick={onClick} />)

describe('<Tabs />', () => {
  it('should calls onClick when clicked', () => {
    const handleClick = jest.fn()
    RenderComponent(handleClick)

    fireEvent.click(screen.getByText(/ZAP/i))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should match with snapshot', () => {
    RenderComponent(() => null)

    expect(screen).toMatchSnapshot()
  })
})
