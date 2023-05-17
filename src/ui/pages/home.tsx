import { getJobSummaries } from '@/data';
import { Filter, JobList } from '@/ui/components';

export const Home = () => {
  return (
    <>
      <Filter onFilter={(filters) => console.log(filters)} />
      <JobList list={getJobSummaries()} />
    </>
  );
};
