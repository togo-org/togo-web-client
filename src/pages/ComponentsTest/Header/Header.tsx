import useStyles from '@/pages/ComponentsTest/Header/Header.useStyles';
import { Typography } from '@mui/material';

const Header = () => {
	const styles = useStyles();
	return (
		<Typography variant='h1' sx={styles.root}>
			Components Test
		</Typography>
	);
};

export default Header;
