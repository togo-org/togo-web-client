import ButtonProps from '@/shared/Button/Button.types';
import useStyles from '@/shared/Button/Button.useStyles';
import { Button as MuiButton, Typography } from '@mui/material';

const Button = ({ label }: ButtonProps) => {
	const styles = useStyles();
	return (
		<MuiButton sx={styles.root}>
			<Typography sx={styles.typography}>{label}</Typography>
		</MuiButton>
	);
};

export default Button;
