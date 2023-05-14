import { useState, useRef } from 'react';
import {
  Button,
  Checkbox,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { IconCheck } from './icon-check';
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
  return (
    <>
      <InputGroup>
        <Input ref={titleRef} placeholder="Filter by title…" />
        <InputRightElement w="fit-content">
          <IconButton
            aria-label="Other filters"
            icon={<IconFilter />}
            onClick={() => setIsModalOpen(true)}
          />
          <IconButton aria-label="Search" icon={<IconSearch />} onClick={handleSubmit} />
        </InputRightElement>
      </InputGroup>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <InputGroup>
            <Input
              ref={locationRef}
              defaultValue={locationFilter}
              placeholder="Filter by location…"
            />
            <InputLeftElement>
              <IconLocation />
            </InputLeftElement>
          </InputGroup>

          <Checkbox ref={fullTimeRef} defaultChecked={fullTimeFilter}>
            Full Time Only
          </Checkbox>

          <Button onClick={handleSubmit}>Search</Button>
        </ModalContent>
      </Modal>
    </>
  );
};
