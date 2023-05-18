import { type JobInfo } from '@/data';
import {
  Box,
  Button,
  Flex,
  ListItem,
  OrderedList,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Auxiliary } from './auxiliary';
import { Company } from './company';
import { CompanyLogo } from './company-logo';
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
      <Flex direction={{ base: 'column', tablet: 'row' }} bgColor="bg.base">
        {useBreakpointValue({
          base: (
            <CompanyLogo
              logo={logo}
              logoBackground={logoBackground}
              company={company}
              position="top-center"
            />
          ),
          tablet: (
            <CompanyLogo logo={logo} logoBackground={logoBackground} company={company} isLarge />
          ),
        })}
        <Box>
          <Company company={company} isHeader />
          <Text fontSize="1rem" lineHeight="1.25rem" color="darkgrey">
            {website}
          </Text>
        </Box>
        <Button as="a" href={website} variant="button2" w="9.25rem">
          Company Site
        </Button>
      </Flex>
      <Box bgColor="bg.base">
        <Flex direction={{ base: 'column', tablet: 'row' }}>
          <Box>
            <Auxiliary postedAt={postedAt} contract={contract} />
            <Position position={position} as="h1" isResponsive />
            <Location location={location} />
          </Box>
          <Button as="a" href={apply} variant="button1">
            Apply Now
          </Button>
        </Flex>
        <Text>{description}</Text>
        <Section title="Requirements" data={requirements} />
        <Section title="What You Will Do" data={role} />
      </Box>
      <Flex bgColor="bg.base">
        <Box hideBelow="tablet">
          <Position position={position} />
          <Company company={company} />
        </Box>
        <Button as="a" href={apply} variant="button1">
          Apply Now
        </Button>
      </Flex>
    </Stack>
  );
};

type SectionProps = { title: string; data: { content: string; items: string[] } };
const Section = ({ title, data }: SectionProps) => (
  <>
    <Text as="h2" fontSize="1.25rem" lineHeight="1.5rem" fontWeight="bold" color="text.contrast">
      {title}
    </Text>
    <Text>{data.content}</Text>
    <OrderedList>
      {data.items.map((item, idx) => (
        <ListItem key={`req${idx}`}>{item}</ListItem>
      ))}
    </OrderedList>
  </>
);
