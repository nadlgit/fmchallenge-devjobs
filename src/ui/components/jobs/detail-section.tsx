import { List, ListItem, Text } from '@chakra-ui/react';

type DetailSectionProps = {
  title: string;
  data: { content: string; items: string[] };
  isNumbered?: boolean;
};

export const DetailSection = ({ title, data, isNumbered }: DetailSectionProps) => (
  <>
    <Text
      as="h2"
      fontSize="1.25rem"
      lineHeight="1.5rem"
      fontWeight="bold"
      color="text.contrast"
      mt="2.5rem"
    >
      {title}
    </Text>

    <Text my="1.5rem">{data.content}</Text>

    <List as={isNumbered ? 'ol' : 'ul'} spacing="0.5rem">
      {data.items.map((item, idx) => (
        <ListItem
          key={`req${idx}`}
          pl="2.25rem"
          pos="relative"
          _before={{
            pos: 'absolute',
            ml: '-2.25rem',
            content: isNumbered ? `"${idx + 1}"` : '"\u2022"',
            fontSize: isNumbered ? undefined : '1.5em',
            fontWeight: 'bold',
            color: 'violet',
          }}
        >
          {item}
        </ListItem>
      ))}
    </List>
  </>
);
