import IconPresentation from '@/pages/ComponentsTest/sections/IconsSection/IconPresentation/IconPresentation';
import useStyles from '@/pages/ComponentsTest/sections/IconsSection/IconsSection.useStyles';
import ICONS from '@/utils/constants/ICONS';
import { Box } from '@mui/material';
import React from 'react';

const IconsSection = () => {
	const styles = useStyles();
	return (
		<Box sx={styles.root}>
			{Object.entries(ICONS).map(([key, value]) => (
				<IconPresentation key={key} name={key} icon={value} />
			))}
		</Box>
	);
};

export default IconsSection;
