import useStyles from '@/pages/ResultsPage/components/Footer/components/NotFindResultsLabel/NotFindResultsLabel.useStyles';
import { Typography } from '@mui/material';

interface NotFindResultsLabelProps {
  label: string;
}

const NotFindResultsLabel = ({ label }: NotFindResultsLabelProps) => {
  const styles = useStyles();
  return <Typography sx={styles.root}>{label}</Typography>;
};

export default NotFindResultsLabel;
