import { Button } from "@chakra-ui/react";

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
};

export const PaginationItem = ({ number, isCurrent }: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        _disabled={{ bgColor: "pink.500", cursosr: "default" }}
      >
        {number}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
};
