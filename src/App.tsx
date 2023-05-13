import { themeState } from '@/store';
import { getDesignTokens } from '@/utils/helpers';
import { Box, CssBaseline, useTheme } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { useRecoilValue } from 'recoil';

function App(props: AppProps) {
	const { Component, pageProps } = props;
	const themeName = useRecoilValue(themeState);
	const theme = useTheme();

	return (
		<ThemeProvider theme={createTheme(getDesignTokens(themeName))}>
			<CssBaseline />
			<Box
				sx={{
					backgroundColor: theme.palette.background.default,
				}}
			>
				<Box component='main'>
					<Component {...pageProps} />
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
