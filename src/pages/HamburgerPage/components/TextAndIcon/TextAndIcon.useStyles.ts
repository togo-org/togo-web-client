import colors from '@/theme/colors';

const useStyles = () => {
    return {
        root: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            background: 'transparent',
            color: colors.grey.black,
            textAlign: 'center',
            border: '1px solid black',
            gap: '10px'
        },
        icon: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        typography: {
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            whiteSpace: 'pre-line',
        }
    };
};

export default useStyles;
