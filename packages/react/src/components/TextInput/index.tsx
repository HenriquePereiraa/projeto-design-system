import { ComponentProps } from 'react'
import { Input, PreFix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  preFix?: string
}

export function TextInput({ preFix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!preFix && <PreFix>{preFix}</PreFix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
