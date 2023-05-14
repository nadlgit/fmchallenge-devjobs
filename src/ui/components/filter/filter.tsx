import { useRef } from 'react';
import { Box, Button, Checkbox, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IconCheck } from './icon-check';
import { IconLocation } from './icon-location';
import { IconSearch } from './icon-search';

type FilterProps = {
  onFilter: (filters: { title: string; location: string; fullTime: boolean }) => void;
};

export const Filter = ({ onFilter }: FilterProps) => {
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
    <Box>
      <InputGroup>
        <Input ref={titleRef} placeholder="Filter by title…" />
        <InputLeftElement>
          <IconSearch />
        </InputLeftElement>
      </InputGroup>

      <InputGroup>
        <Input ref={locationRef} placeholder="Filter by location…" />
        <InputLeftElement>
          <IconLocation />
        </InputLeftElement>
      </InputGroup>

      <Checkbox ref={fullTimeRef}>Full Time Only</Checkbox>

      <Button onClick={handleSubmit}>Search</Button>
    </Box>
  );
};
