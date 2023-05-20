import { type PropsWithChildren } from 'react';
import { JobContext } from './job-context';
import { type JobAPI } from './job-types';

export const JobProvider = ({ jobs, children }: PropsWithChildren<{ jobs: JobAPI }>) => (
  <JobContext.Provider value={jobs}>{children}</JobContext.Provider>
);
