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
      <body className='-z-20 overflow-x-hidden bg-background'>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
