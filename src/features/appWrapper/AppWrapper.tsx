'use client';

import lightTheme from '@/theme/palettes/light';
import { ThemeProvider } from '@mui/material';
import { RecoilRoot } from 'recoil';

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </RecoilRoot>
  );
};

export default AppWrapper;
