import useStyles from '@/pages/HamburgerPage/components/TextAndIcon/TextAndIcon.useStyles';
import { Box, Typography } from '@mui/material';
import Icon from '@/shared/Icon';

interface TextAndIconProps {
    text: any;
    icon: any;
}
const TextAndIcon = ({ text, icon }: TextAndIconProps) => {
    const styles = useStyles();
    return (
        <Box sx={styles.root} >
            <Icon src={icon} size='l' alt='icon' />

            <Typography variant='subtitle2' sx={styles.typography}>
                {text}
            </Typography>

        </Box>
    );
};

export default TextAndIcon;
