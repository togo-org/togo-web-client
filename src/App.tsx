import { themeState, userLocationState } from '@/store';
import { getDesignTokens } from '@/utils/helpers';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function App(props: AppProps) {
  const { Component, pageProps } = props;
  const themeName = useRecoilValue(themeState);
  const setUserLocation = useSetRecoilState(userLocationState);

  if (typeof window !== 'undefined') {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }

  return (
    <ThemeProvider theme={createTheme(getDesignTokens(themeName))}>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: '#0000000',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          component='main'
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
