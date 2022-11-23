import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
  return (
    <HStack
      spacing="8"
      py="1"
      pr="8"
      mx="8"
      color="gray.300"
      borderColor="gray.700"
      borderRightWidth={1}
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
}
