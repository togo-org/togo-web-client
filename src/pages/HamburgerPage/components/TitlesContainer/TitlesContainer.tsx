import useStyles from '@/pages/HamburgerPage/components/TitlesContainer/TitlesContainer.useStyles';
import { Box } from '@mui/material';
import React from 'react';

interface TitlesContainerProps {
    children: React.ReactNode;
}

const TitlesContainer = ({ children }: TitlesContainerProps) => {
    const styles = useStyles();
    return <Box sx={styles.root}>{children}</Box>
}

export default TitlesContainer;