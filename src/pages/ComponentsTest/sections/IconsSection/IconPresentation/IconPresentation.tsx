import IconPresentationProps from '@/pages/ComponentsTest/sections/IconsSection/IconPresentation/IconPresentation.types';
import useStyles from '@/pages/ComponentsTest/sections/IconsSection/IconPresentation/IconPresentation.useStyles';
import Icon from '@/shared/Icon';
import { Box, Typography } from '@mui/material';

const IconPresentation = ({ icon, name }: IconPresentationProps) => {
	const styles = useStyles();
	return (
		<Box sx={styles.root}>
			<Typography variant='body1'>{name}</Typography>
			<Icon src={icon} size='xl' alt={name} />
		</Box>
	);
};

export default IconPresentation;
