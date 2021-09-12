import {FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps{
    name : string,
    label?: string
}

export default function Input({name, label, ...rest}: InputProps){
    return(
        <FormControl>
            {!!label && <FormLabel htmlFor={name}> {name} </FormLabel>}
            <ChakraInput
              name={name}
              id={name}
              focusBorderColor="pink.500"
              variant="filled"
              bg="gray.900"
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
              {...rest}
            />
          </FormControl>
    )
}