import { Filter } from '@/ui/components';

export const Home = () => {
  return (
    <>
      <Filter onFilter={(filters) => console.log(filters)} />
    </>
  );
};
