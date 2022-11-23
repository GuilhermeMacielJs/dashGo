import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Guilherme Costa Maciel</Text>
        <Text color="gray.300" fontSize="small">
          guilherme.maciel@alcans.com.br
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Guilherme Maciel"
        src="https://avatars.githubusercontent.com/u/67983309?s=60&v=4"
      />
    </Flex>
  );
}
