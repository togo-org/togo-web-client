import ButtonProps from '@/shared/Button/Button.types';
import useStyles from '@/shared/Button/Button.useStyles';
import { Button as MuiButton, Typography } from '@mui/material';

const Button = ({
  label,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  shape = 'default',
  onClick,
  sx: customSx,
  href,
}: ButtonProps) => {
  const styles = useStyles({ variant, color, size, shape });

  if (href) {
    return (
      <MuiButton
        sx={{ ...styles.root, ...styles.width, ...customSx }}
        onClick={onClick}
        component='a'
        href={href}
      >
        <Typography sx={styles.typography}>{label}</Typography>
      </MuiButton>
    );
  }

  return (
    <MuiButton
      sx={{ ...styles.root, ...styles.width, ...customSx }}
      onClick={onClick}
    >
      <Typography sx={styles.typography}>{label}</Typography>
    </MuiButton>
  );
};

export default Button;
