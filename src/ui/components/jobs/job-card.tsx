import { Card } from '@chakra-ui/react';
import { type JobSummary } from '@/data';
import { Auxiliary } from './auxiliary';
import { Company } from './company';
import { CompanyLogo } from './company-logo';
import { Location } from './location';
import { Position } from './position';

type JobCardProps = JobSummary;

export const JobCard = ({
  id,
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}: JobCardProps) => (
  <Card
    as="article"
    pos="relative"
    minH="14.25rem"
    mt="1.5625rem"
    pt="3.0625rem"
    px="2rem"
    pb="2rem"
    gap="0.875rem"
  >
    <CompanyLogo
      logo={logo}
      logoBackground={logoBackground}
      company={company}
      placement="top-corner"
    />
    <Auxiliary postedAt={postedAt} contract={contract} />
    <Position position={position} as="h1" href={id.toString()} />
    <Company company={company} />
    <Location location={location} flexGrow={1} display="flex" alignItems="end" />
  </Card>
);
