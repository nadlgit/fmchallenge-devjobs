import { useBreakpointValue } from '@chakra-ui/react';
import { type JobFilter } from '@/data';
import { FilterLarge } from './filter-large';
import { FilterMobile } from './filter-mobile';

type FilterProps = { onFilter: (filter: JobFilter) => void };

export const Filter = ({ onFilter }: FilterProps) =>
  useBreakpointValue({
    base: <FilterMobile onFilter={onFilter} />,
    tablet: <FilterLarge onFilter={onFilter} />,
    desktop: <FilterLarge onFilter={onFilter} isDesktop />,
  }) ?? <></>;
