import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'

import Hero from '.'

const RenderComponent = () => renderWithTheme(<Hero>Hero is awesome</Hero>)

describe('<Hero />', () => {
  it('should match with snapshot', () => {
    RenderComponent()

    expect(screen).toMatchSnapshot()
  })
})
