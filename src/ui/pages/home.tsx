import { Button, Card, Stack } from '@chakra-ui/react';
import { useJobList } from '@/data';
import { Filter, JobList } from '@/ui/components';

type HomeProps = { fetchLimit?: number };

export const Home = ({ fetchLimit = 12 }: HomeProps) => {
  const { jobList, hasMore, getMore, setFilter } = useJobList(fetchLimit);
  const marginTop = {
    base: 'max(4.5rem, calc(3.308vw + 3.725rem))',
    tablet: 'min(7.4375rem, calc(5.06vw + 2.884rem))',
  };
  const marginBottom = 'clamp(3.875rem, calc(6.25vw + 0.875rem), 6.5rem)';
  return (
    <>
      <Filter onFilter={setFilter} />

      {jobList.length > 0 ? (
        <Stack
          mt={marginTop}
          mb={marginBottom}
          spacing="clamp(2rem, calc(6.1vw + 0.57rem), 3.5rem)"
        >
          <JobList list={jobList} />
          {hasMore && (
            <Button alignSelf="center" variant="button1" w="8.75rem" onClick={getMore}>
              Load More
            </Button>
          )}
        </Stack>
      ) : (
        <Card mt={marginTop} mb={marginBottom}>
          No match found.
        </Card>
      )}
    </>
  );
};
