export type JobInfo = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
};

export type JobSummary = Pick<
  JobInfo,
  'id' | 'company' | 'logo' | 'logoBackground' | 'position' | 'postedAt' | 'contract' | 'location'
>;

export type JobFilter = {
  title?: string;
  location?: string;
  isFullTime?: boolean;
};

export type JobAPI = {
  getJob: (jobId: JobInfo['id']) => JobInfo | undefined;

  getJobList: ({
    filter,
    offset,
    limit,
  }: {
    filter?: JobFilter;
    offset?: number;
    limit?: number;
  }) => {
    data: JobSummary[];
    nextOffset?: number;
  };
};
