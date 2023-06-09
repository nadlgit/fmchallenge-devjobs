import { useRef } from 'react';
import { Button, Divider, Flex } from '@chakra-ui/react';
import { type JobFilter } from '@/data';
import { FullTime } from './fulltime';
import { Location } from './location';
import { Title } from './title';

type FilterLargeProps = { onFilter: (filter: JobFilter) => void; isDesktop?: boolean };

export const FilterLarge = ({ onFilter, isDesktop }: FilterLargeProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const fullTimeRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    const title = titleRef.current?.value ?? '';
    const location = locationRef.current?.value ?? '';
    const isFullTime = !!fullTimeRef.current?.checked;
    onFilter({ title, location, isFullTime });
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      position="absolute"
      top={0}
      transform="translateY(-50%)"
      h="5rem"
      w="full"
      bgColor="bg.base"
      borderRadius="6px"
    >
      <Title ref={titleRef} isLarge={isDesktop} mx="1.5rem" />
      <Divider orientation="vertical" bgColor="darkgreyalpha.20" />
      <Location ref={locationRef} mx="1.5rem" />
      <Divider orientation="vertical" bgColor="darkgreyalpha.20" />
      <FullTime ref={fullTimeRef} isLarge={isDesktop} mx="1.5rem" />
      <Button
        onClick={handleSubmit}
        variant="button1"
        w="clamp(5rem, calc(6.55vw + 1.86rem), 7.75rem)"
        mr="1rem"
      >
        Search
      </Button>
    </Flex>
  );
};
