import { useRef } from 'react';
import { Box, Button, Flex, Show, useDimensions } from '@chakra-ui/react';
import { Company } from './company';
import { Position } from './position';

type ApplyProps = {
  apply: string;
  position?: string;
  company?: string;
};

export const Apply = ({ apply, position, company }: ApplyProps) => {
  const elementRef = useRef(null);
  const dimensions = useDimensions(elementRef, true);
  const spaceInline = dimensions ? dimensions.marginBox.left : undefined;

  if (position && company) {
    return (
      <Flex
        ref={elementRef}
        justify={{ base: 'center', tablet: 'space-between' }}
        align="center"
        style={{
          marginInline: spaceInline ? `-${spaceInline}px` : undefined,
          paddingInline: spaceInline ? `${spaceInline}px` : undefined,
        }}
        py="1.5rem"
        bgColor="bg.base"
        borderRadius="0.375rem"
      >
        <Show above="tablet">
          <Box>
            <Position position={position} />
            <Company company={company} />
          </Box>
        </Show>
        <Button w={{ base: 'full', tablet: '8.75rem' }} as="a" href={apply} variant="button1">
          Apply Now
        </Button>
      </Flex>
    );
  }

  return (
    <Button as="a" href={apply} variant="button1">
      Apply Now
    </Button>
  );
};
