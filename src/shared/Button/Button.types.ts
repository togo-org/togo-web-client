import { SxProps } from '@mui/material';

type ButtonVariant = 'text' | 'outlined' | 'contained';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary';
type ButtonShape = 'circle' | 'pill' | 'default';

interface ButtonProps {
  label: string;
  onClick?:
    | (() => void)
    // eslint-disable-next-line no-unused-vars
    | ((event: React.MouseEvent<HTMLButtonElement>) => void);

  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  shape?: ButtonShape;
  sx?: SxProps;
  href?: string;
}

export interface ButtonOptionsInterface {
  variant: ButtonVariant;
  size: ButtonSize;
  color: ButtonColor;
  shape: ButtonShape;
}

export default ButtonProps;
