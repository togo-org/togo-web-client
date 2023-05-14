import { useTheme } from '@mui/material';

const useStyles = () => {
	const theme = useTheme();
	return {
		root: {
			position: 'relative',
			background: 'transparent',
			color: theme.palette.primary.main,
			textAlign: 'center',
			fontSize: '5rem',
			fontWeight: 'bold',
			fontFamily: 'sans-serif',
			letterSpacing: '0.5rem',
			padding: '1rem',
			zIndex: 1,
			gap: '10px',
		},
	};
};

export default useStyles;
