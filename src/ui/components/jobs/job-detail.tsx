import { type JobInfo } from '@/data';
import { Box, Button, Flex, HStack, Image, ListItem, OrderedList, Text } from '@chakra-ui/react';

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
    <div>
      <div>
        <Flex
          // pos="absolute"
          // top={0}
          // transform="translateY(-50%)"
          justify="center"
          align="center"
          boxSize="3.125rem"
          borderRadius="0.9375rem"
          bgColor={logoBackground}
        >
          <Image src={logo} alt={`${company} logo`} />
        </Flex>
        <Text
        // fontSize="1rem" lineHeight="1.25rem"
        >
          {company}
        </Text>
        <Text
        // fontSize="1rem" lineHeight="1.25rem"
        >
          {website}
        </Text>
        <Button as="a" href={website} variant="button2">
          Company Site
        </Button>
      </div>
      <div>
        <HStack
          divider={<Box as="span" boxSize="4px" bgColor="darkgrey" borderRadius="full" />}
          spacing="1rem"
          fontSize="1rem"
          lineHeight="1.25rem"
        >
          <span>{postedAt}</span>
          <span>{contract}</span>
        </HStack>
        <Text
          as="h1"
          // fontSize="1.25rem"
          // lineHeight="1.5rem"
          fontWeight="bold"
          color="text.contrast"
        >
          {position}
        </Text>
        <Text
          // fontSize="0.875rem"
          // lineHeight="1.125rem"
          fontWeight="bold"
          color="violet"
        >
          {location}
        </Text>
        <Button as="a" href={apply} variant="button1">
          Apply Now
        </Button>
        <Text
        // fontSize="1rem" lineHeight="1.25rem"
        >
          {description}
        </Text>
        <Text
          as="h2"
          // fontSize="1.25rem"
          // lineHeight="1.5rem"
          fontWeight="bold"
          color="text.contrast"
        >
          Requirements
        </Text>
        <Text
        // fontSize="1rem" lineHeight="1.25rem"
        >
          {requirements.content}
        </Text>
        <OrderedList>
          {requirements.items.map((item, idx) => (
            <ListItem key={`req${idx}`}>{item}</ListItem>
          ))}
        </OrderedList>
        <Text
          as="h2"
          // fontSize="1.25rem"
          // lineHeight="1.5rem"
          fontWeight="bold"
          color="text.contrast"
        >
          What You Will Do
        </Text>
        <Text
        // fontSize="1rem" lineHeight="1.25rem"
        >
          {role.content}
        </Text>
        <OrderedList>
          {role.items.map((item, idx) => (
            <ListItem key={`req${idx}`}>{item}</ListItem>
          ))}
        </OrderedList>
      </div>
      <div>
        <Button as="a" href={apply} variant="button1">
          Apply Now
        </Button>
      </div>
    </div>
  );
};
