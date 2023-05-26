import useStyles from '@/pages/ComponentsTest/ComponentSection/ComponentSection.useStyles';
import { Box, Typography } from '@mui/material';
import React from 'react';


interface ComponentSectionProps {
	title: string;
	description: string;
	componentsCountainer: React.ReactNode;
}

const ComponentSection = ({
	title,
	description,
	componentsCountainer,
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
			<Box sx={styels.components}>{componentsCountainer}</Box>
		</Box>
	);
};

export default ComponentSection;
