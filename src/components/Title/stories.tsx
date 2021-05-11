import { Story, Meta } from '@storybook/react/types-6-0'
import Title from '.'

export default {
  title: 'Title',
  component: Title,
  args: {
    children: 'Title is awesome'
  }
} as Meta

export const Basic: Story = (args) => <Title {...args} />
