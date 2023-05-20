import { useContext, useEffect, useState } from 'react';
import { JobContext } from './job-context';
import { type JobFilter, type JobSummary } from './job-types';

export const useJobList = (limit?: number) => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobList() must be used with <JobProvider>');
  }

  const [jobList, setJobList] = useState<JobSummary[]>([]);
  const [filter, setFilter] = useState<JobFilter | undefined>(undefined);
  const [nextOffset, setNextOffset] = useState<number | undefined>(undefined);

  useEffect(() => {
    const result = context.getJobList({ filter, limit });
    setJobList(result.data);
    setNextOffset(result.nextOffset);
  }, [context, filter, limit]);

  const getMore = () => {
    const result = context.getJobList({ filter, offset: nextOffset, limit });
    setJobList((list) => [...list, ...result.data]);
    setNextOffset(result.nextOffset);
  };

  return { jobList, hasMore: !!nextOffset, getMore, setFilter };
};
