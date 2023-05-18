import { ListItem, OrderedList, Text } from '@chakra-ui/react';

type DetailSectionProps = {
  title: string;
  data: { content: string; items: string[] };
};

export const DetailSection = ({ title, data }: DetailSectionProps) => (
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
