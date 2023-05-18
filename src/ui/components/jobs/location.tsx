import { Text, type TextProps } from '@chakra-ui/react';

type LocationProps = { location: string } & Omit<
  TextProps,
  'fontSize' | 'lineHeight' | 'fontWeight' | 'color'
>;

export const Location = ({ location, ...props }: LocationProps) => (
  <Text fontSize="0.875rem" lineHeight="1.125rem" fontWeight="bold" color="violet" {...props}>
    {location}
  </Text>
);
