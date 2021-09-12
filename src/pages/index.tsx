import { Flex, Stack, Button } from '@chakra-ui/react'
import Input from '../components/Form/Input'

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
            <Input
              name="email"
              label="email"
              type="email"
            />
            <Input
              name="password"
              label="senha"
              type="password"
            />
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
