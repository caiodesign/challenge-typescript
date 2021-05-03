import { Story, Meta } from '@storybook/react/types-6-0'
import Card from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    image:
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg',
    title: 'Itaim Bibi (Alugel)',
    rent: true,
    price: 7476
  }
} as Meta

export const Basic: Story = (args) => <Card {...args} />
