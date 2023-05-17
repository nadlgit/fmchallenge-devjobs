import { Box, Text } from '@chakra-ui/react';
import { type JobSummary } from '@/data';
import { JobCard } from './job-card';

type JobListProps = { list: JobSummary[] };

export const JobList = ({ list }: JobListProps) => (
  <Box mt="100px">
    {list.length > 0 ? (
      <Box>
        {list.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </Box>
    ) : (
      <Text>No job found.</Text>
    )}
  </Box>
);
