import { Story, Meta } from '@storybook/react/types-6-0'
import Hero, { HeroProps } from '.'
import Header from 'components/Header'

export default {
  title: 'Hero',
  component: Hero,
  args: {
    bg:
      'https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    Header: () => <Header />
  }
} as Meta

export const Basic: Story<HeroProps> = (args) => (
  <Hero {...args}>
    <h1>Hero is awesome!</h1>
  </Hero>
)
