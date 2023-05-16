import { useState, useRef } from 'react';
import { Box, Button, Divider, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { type FilterAction } from './filter-action';
import { FullTime } from './fulltime';
import { Location } from './location';
import { Title } from './title';

type FilterMobileProps = { onFilter: FilterAction };

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

  const spaceInline = 'calc((100% - 28rem) / 2)';
  return (
    <Box position="absolute" top={0} transform="translateY(-50%)" w="full">
      <Title
        mobile={{ showOtherFilters: () => setIsModalOpen(true), submit: handleSubmit }}
        h="5rem"
        px={spaceInline}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isCentered>
        <ModalOverlay />
        <ModalContent mx={`max(1.5rem, ${spaceInline})`} bgColor="bg.base">
          <Location ref={locationRef} defaultValue={locationFilter} h="4.5rem" mx="1.5rem" />
          <Divider bgColor="darkgreyalpha" />
          <FullTime
            ref={fullTimeRef}
            isLarge
            defaultChecked={fullTimeFilter}
            mx="1.5rem"
            mt="1.5rem"
          />
          <Button onClick={handleSubmit} variant="button1" h="3rem" m="1.5rem">
            Search
          </Button>
        </ModalContent>
      </Modal>
    </Box>
  );
};
