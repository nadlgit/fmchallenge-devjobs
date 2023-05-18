import { Box, Button, Flex, Hide, Show, Text } from '@chakra-ui/react';
import { CompanyLogo } from './company-logo';

type CompanyProps =
  | { company: string; logo?: undefined; logoBackground?: undefined; website?: undefined }
  | { company: string; logo: string; logoBackground: string; website: string };

export const Company = ({ company, logo, logoBackground, website }: CompanyProps) => {
  if (logo !== undefined && logoBackground !== undefined && website !== undefined) {
    return (
      <Flex direction={{ base: 'column', tablet: 'row' }} bgColor="bg.base">
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

        <Box>
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
        </Box>

        <Button as="a" href={website} variant="button2" w="9.25rem">
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
