import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

export const Input = ({ name, label, ...rest }: InputProps) => (
  <FormControl>
    <FormLabel htmlFor="password">{label}</FormLabel>
    <ChakraInput
      name={name}
      focusBorderColor="pink.500"
      bg="gray.900"
      variant="filled"
      _hover={{
        bg: "gray.700",
      }}
      size="lg"
      {...rest}
    />
  </FormControl>
);
