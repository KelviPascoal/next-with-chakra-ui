import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { SideBarState } from "../../providers/zustand";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SeachBox } from "./SearchBox";

const photo =
  "https://avatars.githubusercontent.com/u/61250054?s=400&u=837cc517ea4008a0260e1aeda274119ed974a17f&v=4";

export const Header = () => {
  //@ts-ignore
  const { open } = SideBarState((state) => state);

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navegação"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={open}
          mr="2"
        ></IconButton>
      )}

      <Logo />
      {isWideVersion && <SeachBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion!} />
      </Flex>
    </Flex>
  );
};
