import Icon from '@/features/shared/Icon';
import { Box, Typography } from '@mui/material';
import useStyles from './TextAndIcon.useStyles';

interface TextAndIconProps {
  text: any;
  icon: any;
}
const TextAndIcon = ({ text, icon }: TextAndIconProps) => {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Icon src={icon} size='l' alt='icon' />

      <Typography variant='subtitle2' sx={styles.typography}>
        {text}
      </Typography>
    </Box>
  );
};

export default TextAndIcon;
