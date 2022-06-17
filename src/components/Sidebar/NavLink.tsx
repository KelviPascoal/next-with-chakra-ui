import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType;
  children: string;
  href: string;
};

export const NavLink = ({ children, icon, href, ...props }: NavLinkProps) => (
  <ActiveLink href={href}>
    <ChakraLink display="flex" alignItems="center" {...props}>
      <Icon as={icon} />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  </ActiveLink>
);
