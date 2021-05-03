import { Story, Meta } from '@storybook/react/types-6-0'
import Layout from '.'

export default {
  title: 'Layout',
  component: Layout,
  args: {
    children: 'Layout is awesome!!!'
  }
} as Meta

export const Basic: Story = (args) => <Layout {...args} />
