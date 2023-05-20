import { useContext } from 'react';
import { JobContext } from './job-context';
import { type JobInfo } from './job-types';

export const useJob = (jobId: JobInfo['id']) => {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJob() must be used with <JobProvider>');
  }
  return context.getJob(jobId);
};
