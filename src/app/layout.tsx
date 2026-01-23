import type { Metadata } from 'next';
import { Inter, Outfit, EB_Garamond } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';
import SmoothScroll from '@/components/ui/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const ebGaramond = EB_Garamond({ subsets: ['latin'], variable: '--font-eb-garamond' });

export const metadata: Metadata = {
  title: 'ai and things',
  description: 'Crafting Intelligence & Aesthetics.',
};

import { ThemeProvider } from '@/components/theme-provider';

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${ebGaramond.variable} antialiased font-sans`}>
        <ThemeProvider
            attribute="class"
            forcedTheme="light"
            disableTransitionOnChange
          >
            <SmoothScroll>
                <Layout>
                {children}
                </Layout>
            </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
