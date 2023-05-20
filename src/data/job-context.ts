import { createContext } from 'react';
import { type JobAPI } from './job-types';

export const JobContext = createContext<JobAPI | undefined>(undefined);
