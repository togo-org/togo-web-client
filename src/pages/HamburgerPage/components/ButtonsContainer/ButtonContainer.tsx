import useStyles from '@/pages/HamburgerPage/components/ButtonsContainer/ButtonContainer.useStyles';
import { Box } from '@mui/material';
import React from 'react';

interface ButtonsContainerProps {
    children: React.ReactNode;
}

const ButtonsContainer = ({ children }: ButtonsContainerProps) => {
    const styles = useStyles();
    return <Box sx={styles.root}>{children}</Box>;
};

export default ButtonsContainer;
