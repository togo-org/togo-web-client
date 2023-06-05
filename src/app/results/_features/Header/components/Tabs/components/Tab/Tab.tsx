import useStyles from '@/pages/ResultsPage/components/Header/components/Tabs/components/Tab/Tab.useStyles';
import { Box, Typography } from '@mui/material';

interface TabProps {
  label: string;
  value: string;
}

const Tab = ({ label, value }: TabProps) => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Typography sx={styles.label}>{label}</Typography>
      <Typography sx={styles.value}>{value}</Typography>
    </Box>
  );
};

export default Tab;
