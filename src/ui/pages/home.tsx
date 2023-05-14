import { Hide, Show } from '@chakra-ui/react';
import { Filter, FilterMobile } from '@/ui/components';

export const Home = () => (
  <>
    <Hide above="md">
      <FilterMobile onFilter={(filters) => console.log(filters)} />
    </Hide>
    <Show above="md">
      <Filter onFilter={(filters) => console.log(filters)} />
    </Show>
  </>
);
