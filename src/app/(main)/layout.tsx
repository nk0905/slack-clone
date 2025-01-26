import { FC, ReactNode } from 'react';

import { ColorPrefrencesProvider } from '@/providers/color-preferences';
import { ThemeProvider } from 'next-themes';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* <WebSocketProvider> */}
      <ColorPrefrencesProvider>
        {/* <MainContent>
            <QueryProvider>{children}</QueryProvider>
          </MainContent> */}
      </ColorPrefrencesProvider>
      {/* </WebSocketProvider> */}
    </ThemeProvider>
  );
};

export default MainLayout;
