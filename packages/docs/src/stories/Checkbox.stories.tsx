import { Box, Checkbox, CheckboxProps, Text } from '@hp-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <Box
            as="label"
            css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
          >
            {Story()}
            <Text size="sm">Accept terms of use</Text>
          </Box>
        </>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
