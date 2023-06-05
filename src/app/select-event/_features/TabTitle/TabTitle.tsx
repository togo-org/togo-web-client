import { Typography } from '@mui/material';
import useStyles from './TabTitle.useStyles';

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
