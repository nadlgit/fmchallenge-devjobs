import { type JobAPI, type JobInfo } from './job-types';
import data from './data.json';

const jobs: JobInfo[] = data.map((job) => ({
  ...job,
  logo: job.logo.replace('./assets/logos/', '/logos/'),
}));

export const sampleJobs: JobAPI = {
  getJob: (jobId: JobInfo['id']) => jobs.find(({ id }) => id === jobId),

  getJobList: ({ filter, offset = 0, limit }) => {
    const filteredJobs = jobs
      .filter(
        ({
          position,
          company,
          description,
          requirements: { content: reqContent },
          role: { content: roleContent },
        }) =>
          !filter?.title ||
          position.toLowerCase().includes(filter.title.toLowerCase()) ||
          company.toLowerCase().includes(filter.title.toLowerCase()) ||
          description.toLowerCase().includes(filter.title.toLowerCase()) ||
          reqContent.toLowerCase().includes(filter.title.toLowerCase()) ||
          roleContent.toLowerCase().includes(filter.title.toLowerCase())
      )
      .filter(
        ({ location }) =>
          !filter?.location || location.toLowerCase().includes(filter.location.toLowerCase())
      )
      .filter(({ contract }) => !filter?.isFullTime || contract === 'Full Time');
    const sliceEnd = limit && limit > 0 ? offset + limit : undefined;

    const data = filteredJobs.slice(offset, sliceEnd);
    const nextOffset = sliceEnd && sliceEnd < filteredJobs.length ? sliceEnd : undefined;
    return { data, nextOffset };
  },
};
