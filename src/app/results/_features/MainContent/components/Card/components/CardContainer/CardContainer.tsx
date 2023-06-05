import useStyles from '@/pages/ResultsPage/components/MainContent/components/Card/components/CardContainer/CardContainer.useStyles';
import React from 'react';
import { Box } from '@mui/material';

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => {
  const styles = useStyles();
  return <Box sx={styles.root}>{children}</Box>;
};

export default CardContainer;
