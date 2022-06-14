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

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

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
        {...props}
      />
    </FormControl>
  )
}

export { Input }