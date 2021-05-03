import { Story, Meta } from '@storybook/react/types-6-0'
import Component from '.'

export default {
  title: 'Row/Item',
  component: Component,
  args: {
    name: 'bathroom',
    value: 2
  }
} as Meta

export const Item: Story = (args) => <Component {...args} />
