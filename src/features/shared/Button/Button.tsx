'use client';

import { Link, Button as MuiButton, Typography } from '@mui/material';
import ButtonProps from './Button.types';
import useStyles from './Button.useStyles';

const Button = ({
  label,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  shape = 'default',
  onClick,
  sx: customSx,
  href,
  children,
}: ButtonProps) => {
  const styles = useStyles({ variant, color, size, shape });

  if (href) {
    return (
      <Link
        href={href}
        sx={{
          ...styles.root,
          ...styles.width,
          ...customSx,
          textDecoration: 'none',
        }}
      >
        <Typography sx={styles.typography}>{label}</Typography>
      </Link>
    );
  }

  return (
    <MuiButton
      sx={{ ...styles.root, ...styles.width, ...customSx }}
      onClick={onClick}
    >
      <Typography sx={styles.typography}>{label}</Typography>
      {children}
    </MuiButton>
  );
};

export default Button;
