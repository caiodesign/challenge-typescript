import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Loader from '.'

const RenderComponent = () => renderWithTheme(<Loader />)

describe('<Loader />', () => {
  it('should match with snapshot', () => {
    RenderComponent()

    expect(screen).toMatchSnapshot()
  })
})
