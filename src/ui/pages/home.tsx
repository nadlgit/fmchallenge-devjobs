import { useBreakpointValue } from '@chakra-ui/react';
import { Filter, type FilterAction, FilterMobile } from '@/ui/components';

export const Home = () => {
  const handleFilter: FilterAction = (filters) => console.log(filters);
  const filterElement = useBreakpointValue({
    base: <FilterMobile onFilter={handleFilter} />,
    tablet: <Filter onFilter={handleFilter} />,
    desktop: <Filter onFilter={handleFilter} titleLarge fullTimeLarge />,
  });
  return <>{filterElement}</>;
};
