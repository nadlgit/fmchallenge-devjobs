import { type JobInfo } from '@/data';
import {
  Box,
  Button,
  Flex,
  HStack,
  ListItem,
  OrderedList,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { CompanyLogo } from './company-logo';

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
          <Text
            fontSize={{ base: '1.25rem', tablet: '1.5rem' }}
            lineHeight={{ base: '1.5rem', tablet: '1.875rem' }}
            fontWeight="bold"
            color="text.contrast"
          >
            {company}
          </Text>
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
            <Text
              as="h1"
              fontSize={{ base: '1.25rem', tablet: '1.75rem' }}
              lineHeight={{ base: '1.5rem', tablet: '2.125rem' }}
              fontWeight="bold"
              color="text.contrast"
            >
              {position}
            </Text>
            <Text fontSize="0.875rem" lineHeight="1.125rem" fontWeight="bold" color="violet">
              {location}
            </Text>
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
          <Text fontSize="1.25rem" lineHeight="1.5rem" fontWeight="bold" color="text.contrast">
            {position}
          </Text>
          <Text fontSize="1rem" lineHeight="1.25rem" color="darkgrey">
            {company}
          </Text>
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
