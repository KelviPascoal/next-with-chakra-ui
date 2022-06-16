import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SeachBox } from "./SearchBox";

const photo =
  "https://avatars.githubusercontent.com/u/61250054?s=400&u=837cc517ea4008a0260e1aeda274119ed974a17f&v=4";

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      {isWideVersion && <SeachBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion!} />
      </Flex>
    </Flex>
  );
};
