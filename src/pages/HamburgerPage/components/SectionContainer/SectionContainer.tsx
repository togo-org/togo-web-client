import useStyles from '@/pages/HamburgerPage/components/SectionContainer/SectionContainer.useStyles';
import { Box } from '@mui/material';
import React from 'react';

interface SectionContainerProps {
    children: React.ReactNode;
}

const SectionContainer = ({ children }: SectionContainerProps) => {
    const styles = useStyles();
    return <Box sx={styles.root}>{children}</Box>;
};

export default SectionContainer;
