import { Button, Card, Stack } from '@chakra-ui/react';
import { getJobSummaries } from '@/data';
import { Filter, JobList } from '@/ui/components';

export const Home = () => {
  const fullList = getJobSummaries();
  const displayedList = fullList.slice(0, 12);

  const marginTop = {
    base: 'max(4.5rem, calc(3.308vw + 3.725rem))',
    tablet: 'min(7.4375rem, calc(5.06vw + 2.884rem))',
  };
  const marginBottom = 'clamp(3.875rem, calc(6.25vw + 0.875rem), 6.5rem)';
  return (
    <>
      <Filter onFilter={(filters) => console.log(filters)} />

      {displayedList.length > 0 ? (
        <Stack
          mt={marginTop}
          mb={marginBottom}
          spacing="clamp(2rem, calc(6.1vw + 0.57rem), 3.5rem)"
        >
          <JobList list={displayedList} />
          {displayedList.length < fullList.length && (
            <Button alignSelf="center" variant="button1" h="3rem" w="8.75rem">
              Load More
            </Button>
          )}
        </Stack>
      ) : (
        <Card mt={marginTop} mb={marginBottom} p="1.5rem" bgColor="bg.base" color="text.base">
          No match found.
        </Card>
      )}
    </>
  );
};
