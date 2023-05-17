import { useParams } from 'react-router-dom';
import { getJob } from '@/data';
import { JobDetail } from '@/ui/components';

export const Detail = () => {
  const { jobId } = useParams();
  const job = getJob(Number.parseInt(jobId ?? ''));
  return job ? <JobDetail {...job} /> : <p>inconnu</p>;
};
