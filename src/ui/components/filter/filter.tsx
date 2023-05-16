import { useBreakpointValue } from '@chakra-ui/react';
import { type FilterAction } from './filter-action';
import { FilterLarge } from './filter-large';
import { FilterMobile } from './filter-mobile';

type FilterProps = { onFilter: FilterAction };

export const Filter = ({ onFilter }: FilterProps) =>
  useBreakpointValue({
    base: <FilterMobile onFilter={onFilter} />,
    tablet: <FilterLarge onFilter={onFilter} />,
    desktop: <FilterLarge onFilter={onFilter} isDesktop />,
  }) ?? <></>;
