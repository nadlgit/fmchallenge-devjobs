import { Box, Button, Card, SimpleGrid } from '@chakra-ui/react';
import { type JobSummary } from '@/data';
import { JobCard } from './job-card';

type JobListProps = { list: JobSummary[] };

export const JobList = ({ list }: JobListProps) => {
  const displayedItems = list.slice(0, 12);

  const marginTop = {
    base: 'max(4.5rem, calc(3.308vw + 3.725rem))',
    tablet: 'min(7.4375rem, calc(5.06vw + 2.884rem))',
  };
  const marginBottom = 'clamp(3.875rem, calc(6.25vw + 0.875rem), 6.5rem)';
  return displayedItems.length > 0 ? (
    <Box textAlign="center" mt={marginTop} mb={marginBottom}>
      <SimpleGrid
        minChildWidth={{
          base: 'min(20rem, 100%)',
          tablet: 'clamp(21.1875rem, calc(0.74vw + 20.83rem), 21.875rem)',
        }}
        rowGap="clamp(1.5rem, calc(4.07vw + 0.55rem), 2.5rem)"
        columnGap="clamp(0.625rem, calc(2.97vw - 0.8rem), 1.875rem)"
        textAlign="left"
      >
        {displayedItems.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </SimpleGrid>
      {displayedItems.length < list.length && (
        <Button
          variant="button1"
          h="3rem"
          w="8.75rem"
          mt="clamp(2rem, calc(6.1vw + 0.57rem), 3.5rem)"
        >
          Load More
        </Button>
      )}
    </Box>
  ) : (
    <Card mt={marginTop} mb={marginBottom} p="1.5rem" bgColor="bg.base" color="text.base">
      No job found.
    </Card>
  );
};
