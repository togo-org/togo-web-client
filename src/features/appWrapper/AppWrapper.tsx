'use client';

import { RecoilRoot } from 'recoil';
import { useTheme, ThemeProvider } from '@mui/material';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const theme = useTheme();
  return <RecoilRoot>
    <ThemeProvider theme={theme}>
    {children}
    </ThemeProvider>
    </RecoilRoot>
};

export default AppWrapper;
