import useStyles from '@/pages/SelectEvent/components/TabTitle/TabTitle.useStyles';
import { Typography } from '@mui/material';

interface TabTitleProps {
  label: string;
}

const TabTitle = ({ label }: TabTitleProps) => {
  const styles = useStyles();
  return (
    <Typography variant='h1' sx={styles.root}>
      {label}
    </Typography>
  );
};

export default TabTitle;
