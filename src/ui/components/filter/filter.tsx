import { useRef } from 'react';
import { Button, Divider, HStack, StackDivider } from '@chakra-ui/react';
import { type FilterAction } from './filter-action';
import { FullTime } from './fulltime';
import { Location } from './location';
import { Title } from './title';

type FilterProps = {
  onFilter: FilterAction;
  titleLarge?: boolean;
  fullTimeLarge?: boolean;
};

export const Filter = ({ onFilter, titleLarge, fullTimeLarge }: FilterProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const fullTimeRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    const title = titleRef.current?.value ?? '';
    const location = locationRef.current?.value ?? '';
    const fullTime = !!fullTimeRef.current?.checked;
    onFilter({ title, location, fullTime });
  };

  return (
    <HStack
      position="absolute"
      top={0}
      transform="translateY(-50%)"
      h="5rem"
      px="1.5rem"
      gap={0}
      bgColor="bg.base"
      borderRadius="6px"
    >
      <Title isLarge={titleLarge} />
      <CustomDivider />
      <Location ref={locationRef} />
      <CustomDivider />
      <FullTime isLarge={fullTimeLarge} />
      <StackDivider w="1.5rem" />
      <Button onClick={handleSubmit} variant="button1" h="3rem">
        Search
      </Button>
    </HStack>
  );
};

const CustomDivider = () => (
  <Divider orientation="vertical" bgColor="darkgreyalpha" style={{ marginInline: '1.5rem' }} />
);
