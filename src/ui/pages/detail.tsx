import { useParams } from 'react-router-dom';
import { useJob } from '@/data';
import { JobDetail, NotFound } from '@/ui/components';

export const Detail = () => {
  const { jobId } = useParams();
  const job = useJob(Number.parseInt(jobId ?? ''));
  return job ? <JobDetail {...job} /> : <NotFound />;
};
