import { Story, Meta } from '@storybook/react/types-6-0'
import Tabs, { Props } from '.'

export default {
  title: 'Tabs',
  component: Tabs,
  args: {
    options: [{ id: 'ZAP' }, { id: 'VIVAREAL' }],
    onClick: () => null,
    active: 'ZAP'
  }
} as Meta

export const Basic: Story<Props> = (args) => <Tabs {...args} />
