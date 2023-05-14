import { ButtonOptionsInterface } from '@/shared/Button/Button.types';
import { useTheme } from '@mui/material';

const useStyles = ({ variant, size, color, shape }: ButtonOptionsInterface) => {
	const theme = useTheme();

	const styles = {
		typography: {
			color: theme.palette.primary.contrastText,
		},

		width: {
			width: 'fit-content',
		},

		color: {
			primary: {
				color: theme.palette.primary.contrastText,
				backgroundColor: theme.palette.primary.main,
				borderColor: theme.palette.primary.main,
			},
			secondary: {
				color: theme.palette.secondary.contrastText,
				backgroundColor: theme.palette.secondary.main,
				borderColor: theme.palette.secondary.main,
			},
		},

		variant: {
			text: {
				border: 'none',
				backgroundColor: 'transparent',
			},
			outlined: {
				borderStyle: 'solid',
				borderWidth: '2px',
				backgroundColor: 'transparent',
			},
			contained: {
				border: 'none',
			},
		},

		size: {
			small: {
				padding: '0.5rem 1rem',
				fontSize: '0.875rem',
			},
			medium: {
				padding: '0.75rem 1.5rem',
				fontSize: '1rem',
			},
			large: {
				padding: '1rem 2rem',
				fontSize: '1.125rem',
			},
		},

		shape: {
			circle: {
				borderRadius: '50%',
			},
			pill: {
				borderRadius: '100px',
			},
			default: {
				borderRadius: '4px',
			},
		},
	};

	const getRootStyles = () => {
		const rootStyles = {
			...styles.color[color],
			...styles.variant[variant],
			...styles.size[size],
			...styles.shape[shape],
		};

		return rootStyles;
	};

	return {
		root: getRootStyles(),
		typography: styles.typography,
		width: styles.width,
	};
};

export default useStyles;
