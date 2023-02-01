import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@hp-ignite-ui/react/'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio possimus dolore nihil eum voluptate suscipit, porro illum velit, harum minima, tempore autem. Dolor doloremque consequuntur quo non repellendus reiciendis aliquid!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
