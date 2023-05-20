import { type ComponentProps } from 'react';
import { Text } from '@chakra-ui/react';
import { InnerLink } from '@/ui/components';

type PositionProps = {
  position: string;
  as?: ComponentProps<typeof Text>['as'];
  href?: ComponentProps<typeof InnerLink>['href'];
  isResponsive?: boolean;
};

export const Position = ({ position, as, href, isResponsive }: PositionProps) => (
  <Text
    as={as}
    fontSize={{ base: '1.25rem', tablet: isResponsive ? '1.75rem' : undefined }}
    lineHeight={{ base: '1.5rem', tablet: isResponsive ? '2.125rem' : undefined }}
    fontWeight="bold"
    color="text.contrast"
  >
    {href ? (
      <InnerLink href={href} _hover={{ color: 'darkgrey', textDecoration: 'none' }}>
        {position}
      </InnerLink>
    ) : (
      <>{position}</>
    )}
  </Text>
);
