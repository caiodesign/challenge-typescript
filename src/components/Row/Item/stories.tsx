import { Story, Meta } from '@storybook/react/types-6-0'
import Component from '.'
import { Container } from '../Container'

export default {
  title: 'Row/Item',
  component: Component,
  args: {
    name: 'bathroom',
    value: 2
  }
} as Meta

export const Item: Story = (args) => (
  <Container>
    <Component {...args} />
    <Component {...args} />
    <Component {...args} />
  </Container>
)
