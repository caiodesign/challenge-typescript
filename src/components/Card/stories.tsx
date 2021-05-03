import { Story, Meta } from '@storybook/react/types-6-0'
import Card from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    children: 'Card is awesome!!!'
  }
} as Meta

export const Basic: Story = (args) => <Card {...args} />
