import { FC, ReactNode } from 'react';

import { ColorPreferencesProvider } from '@/providers/color-preferences';
import { ThemeProvider } from 'next-themes';
import MainContent from '@/components/main-content';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* <WebSocketProvider> */}
      <ColorPreferencesProvider>
        <MainContent>
          {/* <QueryProvider> */}
          {children}
          {/* </QueryProvider> */}
        </MainContent>
      </ColorPreferencesProvider>
      {/* </WebSocketProvider> */}
    </ThemeProvider>
  );
};

export default MainLayout;
