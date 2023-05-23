import colors from '@/theme/colors';

const useStyles = () => {
    return {
        root: {
            position: 'relative',
            background: 'transparent',
            color: colors.grey.black,
            textAlign: 'center',
            fontSize: '44px',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
        },
    };
};

export default useStyles;
