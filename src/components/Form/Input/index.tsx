import { forwardRef, ForwardRefRenderFunction } from 'react'

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  type?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...props }
  , ref
) => {
  return (
    <FormControl>
      {label ?? <FormLabel htmlFor={name} id={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        size="lg"
        variant="filled"
        background="gray.900"
        focusBorderColor="pink.500"
        _hover={{
          bg: 'gray.900',
        }}
        ref={ref}
        {...props}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)