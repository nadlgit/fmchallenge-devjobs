import { createIcon } from '@chakra-ui/react';

type IconCheckboxProps = { isIndeterminate?: boolean; isChecked?: boolean };

export const IconCheckbox = ({ isChecked }: IconCheckboxProps) =>
  isChecked ? <IconCheck /> : null;

const IconCheck = createIcon({
  displayName: 'IconCheck',
  viewBox: '0 0 15 12',
  path: (
    <path
      d="M1 6.57l3.572 3.572L13.714 1"
      stroke="#FFF"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  ),
});
