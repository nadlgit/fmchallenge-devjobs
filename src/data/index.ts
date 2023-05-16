import data from './data.json';

export const jobs = data.map((job) => ({
  ...job,
  logo: job.logo.replace('./assets/logos/', '/logos/'),
}));
