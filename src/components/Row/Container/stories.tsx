import { Story, Meta } from '@storybook/react/types-6-0'
import { Container as Component } from '.'

export default {
  title: 'Row/Container',
  component: Component,
  args: {
    children: 'Row is awesome!'
  }
} as Meta

export const Container: Story = (args) => <Component {...args} />
