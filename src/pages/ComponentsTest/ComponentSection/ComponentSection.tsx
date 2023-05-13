import ComponentSectionProps from '@/pages/ComponentsTest/ComponentSection/ComponentSection.types';
import useStyles from '@/pages/ComponentsTest/ComponentSection/ComponentSection.useStyles';
import { Box, Typography } from '@mui/material';

const ComponentSection = ({
	title,
	description,
	component,
}: ComponentSectionProps) => {
	const styels = useStyles();
	return (
		<Box component='section' sx={styels.root}>
			<Typography variant='h2' sx={styels.title}>
				{title}
			</Typography>
			<Typography variant='body1' sx={styels.description}>
				{description}
			</Typography>
			<Box sx={styels.components}>{component}</Box>
		</Box>
	);
};

export default ComponentSection;
