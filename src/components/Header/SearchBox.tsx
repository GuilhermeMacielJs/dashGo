import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label"
      position="relative"
      flex="1"
      maxW={400}
      alignSelf="center"
      ml="6"
      py="4"
      px="6"
      bg="gray.800"
      color="gray.200"
      borderRadius="full"
    >
      <Input
        px="4"
        mr="4"
        variant="unstyled"
        placeholder="buscar..."
        _placeholder={{
          color: "gray.400",
        }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
