import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = Omit<ChakraLinkProps, 'as'>;

export const InnerLink = ({ href, children, ...props }: LinkProps) => (
  <ChakraLink as={RouterLink} to={href} {...props}>
    {children}
  </ChakraLink>
);
