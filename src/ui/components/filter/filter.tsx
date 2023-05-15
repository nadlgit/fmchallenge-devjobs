import { useRef } from 'react';
import {
  Button,
  Checkbox,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import { IconCheckbox } from './icon-checkbox';
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
    <Stack
      direction="row"
      position="absolute"
      top={0}
      transform="translateY(-50%)"
      h="5rem"
      bgColor="bg.base"
    >
      <InputGroup>
        <Input ref={titleRef} placeholder="Filter by title…" />
        <InputLeftElement>
          <IconSearch color="violet" h="1.5rem" w="1.5rem" />
        </InputLeftElement>
      </InputGroup>

      <Divider orientation="vertical" bgColor="darkgreyalpha" />

      <InputGroup>
        <Input ref={locationRef} placeholder="Filter by location…" />
        <InputLeftElement>
          <IconLocation />
        </InputLeftElement>
      </InputGroup>

      <Divider orientation="vertical" bgColor="darkgreyalpha" />

      <Checkbox ref={fullTimeRef} icon={<IconCheckbox />} spacing="1rem">
        Full Time Only
      </Checkbox>

      <Button onClick={handleSubmit} variant="button1">
        Search
      </Button>
    </Stack>
  );
};
