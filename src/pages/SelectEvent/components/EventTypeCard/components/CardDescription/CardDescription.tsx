import useStyles from '@/pages/SelectEvent/components/EventTypeCard/components/CardDescription/CardDescription.useStyles';
import { Typography } from '@mui/material';

interface CardDescriptionProps {
  description: string;
}

const CardDescription = ({ description }: CardDescriptionProps) => {
  const styles = useStyles();
  return (
    <Typography component='p' sx={styles.root}>
      {description}
    </Typography>
  );
};

export default CardDescription;
