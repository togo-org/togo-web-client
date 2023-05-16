import useStyles from '@/pages/SelectEvent/components/EventTypeCard/components/CardLabel/CardLabel.useStyles';
import { Typography } from '@mui/material';

interface CardLabelProps {
  label: string;
}

const CardLabel = ({ label }: CardLabelProps) => {
  const styles = useStyles();
  return <Typography sx={styles.root}>{label}</Typography>;
};

export default CardLabel;
