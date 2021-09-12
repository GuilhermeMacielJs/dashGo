import { Flex, Stack, Input, Button, FormLabel, FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW="360"
        flexDir="column"
        bg="gray.800"
        p="8"
        borderRadius="8"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">
              Email
            </FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="pink.500"
              variant="filled"
              bg="gray.900"
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">
              Senha
            </FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="pink.500"
              variant="filled"
              bg="gray.900"
              size="lg"
              _hover={{
                bg: "gray.900"
              }}
            />
          </FormControl>
        </Stack>
        <Button
          type="submit"
          colorScheme="pink"
          mt="6"
          focusBorderColor="pink.500"
          size="lg"

        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
