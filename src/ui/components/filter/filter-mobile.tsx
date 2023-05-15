import { useState, useRef } from 'react';
import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { IconCheckbox } from './icon-checkbox';
import { IconFilter } from './icon-filter';
import { IconLocation } from './icon-location';
import { IconSearch } from './icon-search';

type FilterMobileProps = {
  onFilter: (filters: { title: string; location: string; fullTime: boolean }) => void;
};

export const FilterMobile = ({ onFilter }: FilterMobileProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const fullTimeRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [fullTimeFilter, setFullTimeFilter] = useState(false);
  const handleSubmit = () => {
    const title = titleRef.current?.value ?? '';
    let location = locationFilter;
    let fullTime = fullTimeFilter;
    if (isModalOpen) {
      location = locationRef.current?.value ?? '';
      fullTime = !!fullTimeRef.current?.checked;
      setLocationFilter(location);
      setFullTimeFilter(fullTime);
      setIsModalOpen(false);
    }
    onFilter({ title, location, fullTime });
  };

  const titleInputHeight = '5rem';
  const locationInputHeight = '4.5rem';
  const modalPadding = '1.5rem';
  return (
    <>
      <InputGroup position="absolute" top={0} transform="translateY(-50%)">
        <Input ref={titleRef} placeholder="Filter by title…" h={titleInputHeight} pr="8.25rem" />
        <InputRightElement h={titleInputHeight} w="max" gap="0.875rem" mr="1rem" ml="0.875rem">
          <IconButton
            aria-label="Other filters"
            icon={<IconFilter />}
            onClick={() => setIsModalOpen(true)}
            variant="ghost"
            color="darkgrey"
            _dark={{ color: 'white' }}
          />
          <IconButton
            aria-label="Search"
            icon={<IconSearch h="1.25rem" w="1.25rem" />}
            onClick={handleSubmit}
            variant="button1"
            h="3rem"
            w="3rem"
          />
        </InputRightElement>
      </InputGroup>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isCentered>
        <ModalOverlay />
        <ModalContent mx="1.5rem" bgColor="bg.base">
          <InputGroup>
            <Input
              ref={locationRef}
              defaultValue={locationFilter}
              placeholder="Filter by location…"
              h={locationInputHeight}
              pl="3.5625rem"
              pr={modalPadding}
            />
            <InputLeftElement h={locationInputHeight} w="max" ml={modalPadding}>
              <IconLocation />
            </InputLeftElement>
          </InputGroup>

          <Divider bgColor="darkgreyalpha" />

          <Checkbox
            ref={fullTimeRef}
            defaultChecked={fullTimeFilter}
            icon={<IconCheckbox />}
            spacing="1rem"
            mx={modalPadding}
            mt={modalPadding}
          >
            Full Time Only
          </Checkbox>

          <Button onClick={handleSubmit} variant="button1" h="3rem" m={modalPadding}>
            Search
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};
