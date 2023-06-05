import useStyles from '@/pages/ResultsPage/components/Header/components/Title/Title.useStyles';
import { Typography } from '@mui/material';

interface TitleProps {
  label: string;
}

const Title = ({ label }: TitleProps) => {
  const styles = useStyles();
  return <Typography sx={styles.root}>{label}</Typography>;
};

export default Title;
