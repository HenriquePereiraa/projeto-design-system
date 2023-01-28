import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonPros } from '@hp-ignite-ui/react'

export default {
  title: 'Forms/Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonPros>

export const Primary: StoryObj<ButtonPros> = {}

export const Secondary: StoryObj<ButtonPros> = {
  args: {
    size: 'big',
  },
}
