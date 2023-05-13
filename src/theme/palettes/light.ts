import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#ffffff',
				},
			},
		},
	},
	palette: {
		primary: {
			main: '#856FBD',
			light: '#D0BCFF',
			dark: '#625B71',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#8EB77B',
			light: '#B8DF85',
			dark: '#5A7C60',
			contrastText: '#ffffff',
		},
		error: {
			main: '#d32f2f',
			light: '#ef5350',
			dark: '#c62828',
			contrastText: '#ffffff',
		},
		warning: {
			main: '#ed6c02',
			light: '#ff9800',
			dark: '#e65100',
			contrastText: '#ffffff',
		},
		info: {
			main: '#0288d1',
			light: '#03a9f4',
			dark: '#01579b',
			contrastText: '#ffffff',
		},
		success: {
			main: '#2e7d32',
			light: '#4caf50',
			dark: '#1b5e20',
			contrastText: '#ffffff',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.6)',
			disabled: 'rgba(0, 0, 0, 0.12)',
		},
		divider: 'rgba(0, 0, 0, 0.12)',
		background: {
			paper: '#ffffff',
			default: '#ffffff',
		},
	},
});

export default lightTheme;
