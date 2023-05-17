import data from './data.json';

export type JobInfo = (typeof data)[number];

export type JobSummary = Pick<
  JobInfo,
  'id' | 'company' | 'logo' | 'logoBackground' | 'position' | 'postedAt' | 'contract' | 'location'
>;

const jobs: JobInfo[] = data.map((job) => ({
  ...job,
  logo: job.logo.replace('./assets/logos/', '/logos/'),
}));

export const getJobSummaries = () =>
  jobs.map(({ id, company, logo, logoBackground, position, postedAt, contract, location }) => ({
    id,
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
  }));

export const getJob = (jobId: JobInfo['id']) => jobs.find(({ id }) => id === jobId);
