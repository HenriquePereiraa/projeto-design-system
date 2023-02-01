import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@hp-ignite-ui/react/'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
