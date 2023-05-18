import { Box, HStack } from '@chakra-ui/react';

type AuxiliaryProps = { postedAt: string; contract: string };

export const Auxiliary = ({ postedAt, contract }: AuxiliaryProps) => (
  <HStack
    divider={<Box as="span" boxSize="4px" bgColor="darkgrey" borderRadius="full" />}
    spacing="1rem"
    fontSize="1rem"
    lineHeight="1.25rem"
    color="darkgrey"
  >
    <span>{postedAt}</span>
    <span>{contract}</span>
  </HStack>
);
