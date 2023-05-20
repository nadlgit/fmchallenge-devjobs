import { type ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { type JobAPI, JobProvider } from '@/data';
import { Home } from './home';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const customRender = (ui: ReactElement, jobs: JobAPI) =>
  render(ui, {
    wrapper: ({ children }) => (
      <JobProvider jobs={jobs}>
        <ChakraProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </ChakraProvider>
      </JobProvider>
    ),
  });

describe('<Home>', () => {
  it('initially gets job list', () => {
    const jobs: JobAPI = {
      getJobList: vi.fn(() => ({ data: [] })),
      getJob: vi.fn(),
    };
    customRender(<Home />, jobs);
    expect(jobs.getJobList).toHaveBeenCalled();
  });

  it('provides given limit', () => {
    const jobs: JobAPI = {
      getJobList: vi.fn(() => ({ data: [] })),
      getJob: vi.fn(),
    };
    customRender(<Home fetchLimit={2} />, jobs);
    expect(jobs.getJobList).toHaveBeenCalledWith({ limit: 2 });
  });

  it('do not render load more button given less jobs than limit', () => {
    const jobs: JobAPI = {
      getJobList: vi.fn(() => ({
        data: Array.from(new Array(2), (_, idx) => ({
          id: idx + 1,
          company: 'Company',
          logo: 'https://cdn/logo',
          logoBackground: 'yellow',
          position: `Job position ${idx + 1}`,
          postedAt: 'yesterday',
          contract: 'Full Time',
          location: 'Country',
          website: 'https://website.com',
          apply: 'https://website.com/apply',
          description: 'Job description',
          requirements: {
            content: 'Requirements',
            items: [],
          },
          role: {
            content: 'Role',
            items: [],
          },
        })),
        nextOffset: undefined,
      })),
      getJob: vi.fn(),
    };
    customRender(<Home />, jobs);
    expect(screen.queryByRole('button', { name: /load more/i })).not.toBeInTheDocument();
  });

  it('renders load more button given more jobs than limit', () => {
    const jobs: JobAPI = {
      getJobList: vi.fn(() => ({
        data: Array.from(new Array(2), (_, idx) => ({
          id: idx + 1,
          company: 'Company',
          logo: 'https://cdn/logo',
          logoBackground: 'yellow',
          position: `Job position ${idx + 1}`,
          postedAt: 'yesterday',
          contract: 'Full Time',
          location: 'Country',
          website: 'https://website.com',
          apply: 'https://website.com/apply',
          description: 'Job description',
          requirements: {
            content: 'Requirements',
            items: [],
          },
          role: {
            content: 'Role',
            items: [],
          },
        })),
        nextOffset: 2,
      })),
      getJob: vi.fn(),
    };
    customRender(<Home />, jobs);
    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
  });
});
