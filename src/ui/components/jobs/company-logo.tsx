import { Flex, Image } from '@chakra-ui/react';

type CompanyLogoProps = {
  logo: string;
  logoBackground: string;
  company: string;
  isLarge?: boolean;
  placement?: 'top-corner' | 'top-center';
};

export const CompanyLogo = ({
  logo,
  logoBackground,
  company,
  isLarge,
  placement,
}: CompanyLogoProps) => {
  const sizeProps = isLarge
    ? { boxSize: '8.75rem', p: '1.875rem' }
    : { boxSize: '3.125rem', p: '0.3125rem', borderRadius: '0.9375rem' };
  const posTop = { 'top-corner': 0, 'top-center': 0 };
  const posLeft = { 'top-corner': undefined, 'top-center': '50%' };
  const posTransform = { 'top-corner': 'translateY(-50%)', 'top-center': 'translate(-50%, -50%)' };
  return (
    <Flex
      justify="center"
      align="center"
      bgColor={logoBackground}
      {...sizeProps}
      pos={placement ? 'absolute' : undefined}
      top={placement ? posTop[placement] : undefined}
      left={placement ? posLeft[placement] : undefined}
      transform={placement ? posTransform[placement] : undefined}
    >
      <Image src={logo} alt={`${company} logo`} w="full" />
    </Flex>
  );
};
