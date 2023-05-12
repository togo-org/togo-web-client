import ButtonProps from '@/shared/Button/Button.types';
import useStyles from '@/shared/Button/Button.useStyles';
import { Button as MuiButton, Typography } from '@mui/material';

const Button = ({
	label,
	variant = 'contained',
	color = 'primary',
	size = 'medium',
}: ButtonProps) => {
	const styles = useStyles({ variant, color, size });

	return (
		<MuiButton sx={styles.root}>
			<Typography sx={styles.typography}>{label}</Typography>
		</MuiButton>
	);
};

export default Button;
