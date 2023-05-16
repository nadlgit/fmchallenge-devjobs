import { forwardRef } from 'react';
import { Checkbox, type CheckboxProps, type SpaceProps } from '@chakra-ui/react';

type FullTimeProps = { isLarge?: boolean } & Pick<CheckboxProps, 'defaultChecked'> & SpaceProps;

export const FullTime = forwardRef<HTMLInputElement, FullTimeProps>(function FullTime(
  { isLarge, defaultChecked, ...spaceProps },
  ref
) {
  return (
    <Checkbox
      name="fulltime"
      ref={ref}
      variant="app"
      icon={<IconCheckbox />}
      spacing="1rem"
      defaultChecked={defaultChecked}
      {...spaceProps}
    >
      {isLarge ? 'Full Time Only' : 'Full Time'}
    </Checkbox>
  );
});

type IconCheckboxProps = { isIndeterminate?: boolean; isChecked?: boolean };
const IconCheckbox = ({ isChecked }: IconCheckboxProps) =>
  isChecked ? (
    <svg width="15" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 6.57l3.572 3.572L13.714 1"
        stroke="#FFF"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  ) : null;
