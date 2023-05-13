import PageContainerProps from '@/pages/ComponentsTest/PageContainer/PageContainer.types';
import useStyles from '@/pages/ComponentsTest/PageContainer/PageContainer.useStyles';
import { Box } from '@mui/material';

const PageContainer = ({ children }: PageContainerProps) => {
	const styles = useStyles();
	return (
		<Box component='main' sx={styles.root}>
			{children}
		</Box>
	);
};

export default PageContainer;
