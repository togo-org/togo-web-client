import useStyles from '@/pages/HamburgerPage/components/Title/Title.useStyles';
import { Box, Typography } from '@mui/material';
import Icon from '@/shared/Icon';
import ICONS from '@/utils/constants/ICONS';

const Title = () => {
    const styles = useStyles();
    return (
        <Typography variant='h1' sx={styles.root}>
            טוגו
            <Box sx={styles.icon} >
                <Icon src={ICONS.Settings} size='l' alt='close' />
            </Box>
        </Typography>
    );
};

export default Title;
