import useStyles from '@/pages/Splash/components/Title/useStyles';
import { Typography } from '@mui/material';

const Title = () => {
	const styles = useStyles();
	return (
		<Typography variant='h1' sx={styles.root}>
			טוגו
		</Typography>
	);
};

export default Title;
