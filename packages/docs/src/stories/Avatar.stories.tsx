import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@hp-ignite-ui/react/'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/henriquepereiraa.png',
    alt: 'Henrique Pereira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
