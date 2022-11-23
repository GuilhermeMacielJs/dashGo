import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  return (
    <Flex
      as="header"
      h="20"
      w="100%"
      maxW={1480}
      align="center"
      mt="4"
      mx="auto"
      px="6"
    >
      <Logo />
      <SearchBox />
      <Flex align="center" mx="auto">
        <NotificationNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
