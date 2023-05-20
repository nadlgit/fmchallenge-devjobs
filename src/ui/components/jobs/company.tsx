import { Button, Flex, Hide, Show, Text } from '@chakra-ui/react';
import { CompanyLogo } from './company-logo';

type CompanyProps =
  | { company: string; logo?: undefined; logoBackground?: undefined; website?: undefined }
  | { company: string; logo: string; logoBackground: string; website: string };

export const Company = ({ company, logo, logoBackground, website }: CompanyProps) => {
  if (logo && logoBackground && website) {
    return (
      <Flex
        direction={{ base: 'column', tablet: 'row' }}
        align="center"
        pos="relative"
        mt={{ base: '1.5625rem', tablet: 'unset' }}
        pt={{ base: '3.0625rem', tablet: 'unset' }}
        bgColor="bg.base"
        borderRadius="0.375rem"
        overflow={{ base: 'unset', tablet: 'hidden' }}
      >
        <Hide above="tablet">
          <CompanyLogo
            logo={logo}
            logoBackground={logoBackground}
            company={company}
            placement="top-center"
          />
        </Hide>
        <Show above="tablet">
          <CompanyLogo logo={logo} logoBackground={logoBackground} company={company} isLarge />
        </Show>

        <Flex
          direction="column"
          align={{ base: 'center', tablet: 'unset' }}
          gap={{ base: '0.75rem', tablet: '0.5rem' }}
          flexGrow={1}
          ml={{ base: 'unset', tablet: '2.5rem' }}
        >
          <Text
            fontSize={{ base: '1.25rem', tablet: '1.5rem' }}
            lineHeight={{ base: '1.5rem', tablet: '1.875rem' }}
            fontWeight="bold"
            color="text.contrast"
          >
            {company}
          </Text>
          <Text fontSize="1rem" lineHeight="1.25rem" color="darkgrey">
            {website}
          </Text>
        </Flex>

        <Button
          as="a"
          href={website}
          variant="button2"
          w="9.25rem"
          mr={{ base: 'unset', tablet: '2.5rem' }}
          mt={{ base: '1.5rem', tablet: 'unset' }}
          mb={{ base: '2rem', tablet: 'unset' }}
        >
          Company Site
        </Button>
      </Flex>
    );
  }

  return (
    <Text fontSize="1rem" lineHeight="1.25rem" color="darkgrey">
      {company}
    </Text>
  );
};
