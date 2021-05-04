import { Story, Meta } from '@storybook/react/types-6-0'
import Card from '.'

import { Row } from 'components/Row'

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

export const WithInfoRow: Story = (args) => (
  <Card {...args}>
    <Row.Container>
      <Row.Item value="2" name="bath" />
      <Row.Item value="3" name="rooms" />
      <Row.Item value="100m" name="area" />
    </Row.Container>
  </Card>
)
