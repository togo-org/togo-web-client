import { useTheme } from '@mui/material';

const useStyles = () => {
	const theme = useTheme();
	return {
		root: {
			color: theme.palette.primary.dark,
			fontSize: '2rem',
			fontWeight: 'bold',
			textAlign: 'center',
		},
	};
};

export default useStyles;
