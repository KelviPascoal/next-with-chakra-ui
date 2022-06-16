import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

type NavLinkProps = ChakraLinkProps & {
  icon: ElementType;
  children: string;
};

export const NavLink = ({ children, icon, ...props }: NavLinkProps) => (
  <Link display="flex" alignItems="center" {...props}>
    <Icon as={icon} />
    <Text ml="4" fontWeight="medium">
      {children}
    </Text>
  </Link>
);
