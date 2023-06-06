import AppWrapper from '@/features/appWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Togo',
  description: 'Just go out',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' dir='rtl'>
      <body
        style={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          margin: '0',
          padding: '0',
          boxSizing: 'border-box',
        }}
      >
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
