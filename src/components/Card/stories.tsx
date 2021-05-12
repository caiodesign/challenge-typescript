import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    images: [
      'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/images/pic7.jpg'
    ],
    address: {
      city: 'sp',
      neighborhood: 'Vila Olímpia'
    },
    pricingInfos: {
      price: '100',
      businessType: 'SALE',
      monthlyCondoFee: '200',
      rentalTotalPrice: ''
    },
    bathrooms: 1,
    bedrooms: 2
  }
} as Meta

export const Basic: Story<CardProps> = (args) => <Card {...args} />
