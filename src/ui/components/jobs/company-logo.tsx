import { Flex, Image } from '@chakra-ui/react';

type CompanyLogoProps = {
  logo: string;
  logoBackground: string;
  company: string;
  isLarge?: boolean;
  position?: 'top-corner' | 'top-center';
};

export const CompanyLogo = ({
  logo,
  logoBackground,
  company,
  isLarge,
  position,
}: CompanyLogoProps) => {
  const sizeProps = isLarge
    ? { boxSize: '8.75rem' }
    : { boxSize: '3.125rem', borderRadius: '0.9375rem' };
  const posTop = { 'top-corner': 0, 'top-center': 0 };
  const posLeft = { 'top-corner': undefined, 'top-center': '50%' };
  const posTransform = { 'top-corner': 'translateY(-50%)', 'top-center': 'translate(-50%, -50%)' };
  return (
    <Flex
      justify="center"
      align="center"
      bgColor={logoBackground}
      {...sizeProps}
      pos={position ? 'absolute' : undefined}
      top={position ? posTop[position] : undefined}
      left={position ? posLeft[position] : undefined}
      transform={position ? posTransform[position] : undefined}
    >
      <Image src={logo} alt={`${company} logo`} />
    </Flex>
  );
};
