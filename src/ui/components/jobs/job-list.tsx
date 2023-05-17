import { SimpleGrid } from '@chakra-ui/react';
import { type JobSummary } from '@/data';
import { JobCard } from './job-card';

type JobListProps = { list: JobSummary[] };

export const JobList = ({ list }: JobListProps) => (
  <SimpleGrid
    minChildWidth={{
      base: 'min(20rem, 100%)',
      tablet: 'clamp(21.1875rem, calc(0.74vw + 20.83rem), 21.875rem)',
    }}
    rowGap="clamp(1.5rem, calc(4.07vw + 0.55rem), 2.5rem)"
    columnGap="clamp(0.625rem, calc(2.97vw - 0.8rem), 1.875rem)"
  >
    {list.map((job) => (
      <JobCard key={job.id} {...job} />
    ))}
  </SimpleGrid>
);
