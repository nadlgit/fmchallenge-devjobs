import { type JobInfo } from '@/data';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { Apply } from './apply';
import { Auxiliary } from './auxiliary';
import { DetailSection } from './detail-section';
import { Company } from './company';
import { Location } from './location';
import { Position } from './position';

type JobDetailProps = JobInfo;

export const JobDetail = ({
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
  website,
  apply,
  description,
  requirements,
  role,
}: JobDetailProps) => (
  <Box mt="-2.5rem">
    <Company company={company} logo={logo} logoBackground={logoBackground} website={website} />

    <Box
      mt="clamp(1.5rem, calc(2.04vw + 1.02rem), 2rem)"
      mb="3.5rem"
      px="clamp(1.5rem, calc(6.1vw + 0.07rem), 3rem)"
      py="clamp(2.5rem, calc(2.04vw + 2.02rem), 3rem)"
      bgColor="bg.base"
      borderRadius="0.375rem"
    >
      <Flex
        direction={{ base: 'column', tablet: 'row' }}
        justify="space-between"
        align={{ base: 'unset', tablet: 'center' }}
      >
        <Stack spacing="0.5rem" mb={{ base: '3rem', tablet: 'unset' }}>
          <Auxiliary postedAt={postedAt} contract={contract} />
          <Position position={position} as="h1" isResponsive />
          <Location location={location} />
        </Stack>
        <Apply apply={apply} />
      </Flex>

      <Text my="clamp(2rem, calc(2.04vw + 1.52rem), 2.5rem)">{description}</Text>

      <DetailSection title="Requirements" data={requirements} />

      <DetailSection title="What You Will Do" data={role} isNumbered />
    </Box>

    <Apply apply={apply} position={position} company={company} />
  </Box>
);
