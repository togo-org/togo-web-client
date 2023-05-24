import ButtonProps from '@/shared/Button/Button.types';
import useStyles from '@/shared/Button/Button.useStyles';
import { Link, Button as MuiButton, Typography } from '@mui/material';

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
    </MuiButton>
  );
};

export default Button;
