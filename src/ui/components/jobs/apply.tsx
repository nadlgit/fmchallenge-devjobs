import { Box, Button, Flex, Show } from '@chakra-ui/react';
import { Company } from './company';
import { Position } from './position';

type ApplyProps = {
  apply: string;
  position?: string;
  company?: string;
};

export const Apply = ({ apply, position, company }: ApplyProps) => {
  const button = (
    <Button as="a" href={apply} variant="button1">
      Apply Now
    </Button>
  );
  if (position && company) {
    return (
      <Flex bgColor="bg.base">
        <Show above="tablet">
          <Box>
            <Position position={position} />
            <Company company={company} />
          </Box>
        </Show>
        {button}
      </Flex>
    );
  }
  return button;
};
