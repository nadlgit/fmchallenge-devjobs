import { Box, Card, Flex, HStack, Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { type JobSummary } from '@/data';

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
    mt="40px"
    mb="10px"
    pt="30px"
    px="10px"
    pb="10px"
    bgColor="bg.base"
    color="darkgrey"
  >
    <Flex
      pos="absolute"
      top={0}
      transform="translateY(-50%)"
      justify="center"
      align="center"
      boxSize="3.125rem"
      borderRadius="0.9375rem"
      bgColor={logoBackground}
    >
      <Image src={logo} alt={`${company} logo`} />
    </Flex>
    <HStack
      divider={<Box as="span" boxSize="4px" bgColor="darkgrey" borderRadius="full" />}
      spacing="1rem"
      fontSize="1rem"
      lineHeight="1.25rem"
    >
      <span>{postedAt}</span>
      <span>{contract}</span>
    </HStack>
    <Text as="h1" fontSize="1.25rem" lineHeight="1.5rem" fontWeight="bold" color="text.contrast">
      <ChakraLink
        as={RouterLink}
        to={id.toString()}
        _hover={{ color: 'darkgrey', textDecoration: 'none' }}
      >
        {position}
      </ChakraLink>
    </Text>
    <Text fontSize="1rem" lineHeight="1.25rem">
      {company}
    </Text>
    <Text fontSize="0.875rem" lineHeight="1.125rem" fontWeight="bold" color="violet">
      {location}
    </Text>
  </Card>
);
