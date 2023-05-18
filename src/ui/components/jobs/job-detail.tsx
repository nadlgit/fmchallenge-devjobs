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
}: JobDetailProps) => {
  return (
    <Stack>
      <Company company={company} logo={logo} logoBackground={logoBackground} website={website} />

      <Box bgColor="bg.base">
        <Flex direction={{ base: 'column', tablet: 'row' }}>
          <Box>
            <Auxiliary postedAt={postedAt} contract={contract} />
            <Position position={position} as="h1" isResponsive />
            <Location location={location} />
          </Box>
          <Apply apply={apply} />
        </Flex>

        <Text>{description}</Text>

        <DetailSection title="Requirements" data={requirements} />

        <DetailSection title="What You Will Do" data={role} />
      </Box>

      <Apply apply={apply} position={position} company={company} />
    </Stack>
  );
};
