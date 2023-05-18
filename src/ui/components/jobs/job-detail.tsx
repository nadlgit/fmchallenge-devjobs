import { type JobInfo } from '@/data';
import { Box, Button, HStack, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
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
      <Box bgColor="bg.base">
        <CompanyLogo logo={logo} logoBackground={logoBackground} company={company} />
        <Box>
          <Text
            fontSize="1.25rem"
            lineHeight="1.5rem"
            // fontSize="1.5rem"
            // lineHeight="1.875rem"
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
      </Box>
      <Box bgColor="bg.base">
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
            fontSize="1.25rem"
            lineHeight="1.5rem"
            // fontSize="1.75rem"
            // lineHeight="2.125rem"
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
        <Text>{description}</Text>
        <Section title="Requirements" data={requirements} />
        <Section title="What You Will Do" data={role} />
      </Box>
      <Box bgColor="bg.base">
        {/* <Text fontSize="1.25rem" lineHeight="1.5rem" fontWeight="bold" color="text.contrast">
          {position}
        </Text>
        <Text fontSize="1rem" lineHeight="1.25rem" color="darkgrey">
          {company}
        </Text> */}
        <Button as="a" href={apply} variant="button1">
          Apply Now
        </Button>
      </Box>
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
