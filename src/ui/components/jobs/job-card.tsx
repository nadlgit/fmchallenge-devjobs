import { Box, Card, HStack, Text } from '@chakra-ui/react';
import { type JobSummary } from '@/data';
import { InnerLink } from '@/ui/components';
import { CompanyLogo } from './company-logo';

type JobCardProps = JobSummary;

export const JobCard = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}: JobCardProps) => (
  <Card
    as="article"
    pos="relative"
    minH="14.25rem"
    mt="1.5625rem"
    pt="3.0625rem"
    px="2rem"
    pb="2rem"
    gap="0.875rem"
  >
    <CompanyLogo
      logo={logo}
      logoBackground={logoBackground}
      company={company}
      position="top-corner"
    />
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
    <Text as="h1" fontSize="1.25rem" lineHeight="1.5rem" fontWeight="bold" color="text.contrast">
      <InnerLink href={id.toString()} _hover={{ color: 'darkgrey', textDecoration: 'none' }}>
        {position}
      </InnerLink>
    </Text>
    <Text fontSize="1rem" lineHeight="1.25rem" color="darkgrey">
      {company}
    </Text>
    <Text
      flexGrow={1}
      display="flex"
      alignItems="end"
      fontSize="0.875rem"
      lineHeight="1.125rem"
      fontWeight="bold"
      color="violet"
    >
      {location}
    </Text>
  </Card>
);
