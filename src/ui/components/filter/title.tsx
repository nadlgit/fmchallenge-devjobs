import { forwardRef } from 'react';
import {
  Box,
  createIcon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  type InputProps,
  type LayoutProps,
  type SpaceProps,
} from '@chakra-ui/react';

type TitleProps = {
  mobile?: { showOtherFilters: () => void; submit: () => void };
  isLarge?: boolean;
} & Pick<InputProps, 'defaultValue'> &
  Pick<LayoutProps, 'h' | 'height'> &
  SpaceProps;

export const Title = forwardRef<HTMLInputElement, TitleProps>(function Title(
  { mobile, isLarge, defaultValue, h, height, ...spaceProps },
  ref
) {
  return (
    <Box {...spaceProps}>
      <InputGroup>
        <Input
          ref={ref}
          variant="app"
          placeholder={isLarge ? 'Filter by title, companies, expertise…' : 'Filter by title…'}
          defaultValue={defaultValue}
          h={h ?? height}
          pr={mobile ? '7.125rem' : undefined}
          pl={mobile ? undefined : '2.5rem'}
        />
        {mobile ? (
          <InputRightElement h={h ?? height} w="max" mr="1rem" gap="0.875rem">
            <IconButton
              aria-label="Other filters"
              icon={<IconFilter />}
              onClick={mobile.showOtherFilters}
              variant="ghost"
              color="darkgrey"
              _dark={{ color: 'white' }}
            />
            <IconButton
              aria-label="Search"
              icon={<IconSearch boxSize="1.25rem" />}
              onClick={mobile.submit}
              variant="button1"
              boxSize="3rem"
            />
          </InputRightElement>
        ) : (
          <InputLeftElement h={h ?? height} w="max">
            <IconSearch boxSize="1.5rem" color="violet" />
          </InputLeftElement>
        )}
      </InputGroup>
    </Box>
  );
});

const IconSearch = createIcon({
  displayName: 'IconSearch',
  viewBox: '0 0 24 24',
  path: (
    <path
      d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
      fill="currentColor"
      fillRule="nonzero"
    />
  ),
});

const IconFilter = createIcon({
  displayName: 'IconFilter',
  viewBox: '0 0 20 20',
  path: (
    <path
      d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
      fill="currentColor"
      fillRule="nonzero"
    />
  ),
});
