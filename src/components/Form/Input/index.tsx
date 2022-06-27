import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  error?: FieldError;
  label?: string;
  type?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...props },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label ?? (
        <FormLabel htmlFor={name} id={name}>
          {label}
        </FormLabel>
      )}

      <ChakraInput
        id={name}
        name={name}
        size="lg"
        variant="filled"
        background="gray.900"
        focusBorderColor="pink.500"
        _hover={{
          bg: "gray.900",
        }}
        ref={ref}
        {...props}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
