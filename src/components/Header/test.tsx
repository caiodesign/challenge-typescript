import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Header from '.'

const RenderComponent = () => renderWithTheme(<Header />)

describe('<Header />', () => {
  it('should match with snapshot', () => {
    RenderComponent()

    expect(screen).toMatchSnapshot()
  })
})
