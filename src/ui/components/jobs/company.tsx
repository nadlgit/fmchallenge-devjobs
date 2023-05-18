import { Text } from '@chakra-ui/react';

type CompanyProps = { company: string; isHeader?: boolean };

export const Company = ({ company, isHeader }: CompanyProps) =>
  isHeader ? (
    <Text
      fontSize={{ base: '1.25rem', tablet: '1.5rem' }}
      lineHeight={{ base: '1.5rem', tablet: '1.875rem' }}
      fontWeight="bold"
      color="text.contrast"
    >
      {company}
    </Text>
  ) : (
    <Text fontSize="1rem" lineHeight="1.25rem" color="darkgrey">
      {company}
    </Text>
  );
