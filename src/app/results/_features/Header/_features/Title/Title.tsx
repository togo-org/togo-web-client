import { Typography } from '@mui/material';
import useStyles from './Title.useStyles';

interface TitleProps {
  label: string;
}

const Title = ({ label }: TitleProps) => {
  const styles = useStyles();
  return <Typography sx={styles.root}>{label}</Typography>;
};

export default Title;
