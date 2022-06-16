import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => (
  <Flex align="center">
    <Box>
      <Text>Kelvi Pascoal</Text>
      <Text color="gray.300" fontSize="small">
        kelvi.pascoal@hotmail.com
      </Text>
    </Box>
    <Avatar
      size="md"
      name="Kelvi Pascoal"
      src={
        "https://avatars.githubusercontent.com/u/61250054?s=400&u=837cc517ea4008a0260e1aeda274119ed974a17f&v=4"
      }
    ></Avatar>
  </Flex>
);
