import type { Metadata } from 'next';
import { Instrument_Sans, Alexandria } from 'next/font/google';
import './globals.css'; // Global styles
import Layout from '@/components/layout/Layout';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
// NoiseOverlay removed for cleaner "Cosmic Glass" look

const instrument = Instrument_Sans({ 
  subsets: ['latin'], 
  variable: '--font-instrument',
  display: 'swap',
});

const alexandria = Alexandria({
    subsets: ['arabic'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-alexandria',
    display: 'swap',
});

export const metadata: Metadata = {
  title: 'ai and things',
  description: 'Everything is possible.',
};

import { ThemeProvider } from '@/components/theme-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${instrument.variable} ${alexandria.variable} antialiased font-sans text-white bg-zinc-950 selection:bg-violet-500/30 selection:text-violet-200`}>
        <ThemeProvider
            attribute="class"
            forcedTheme="dark" 
            disableTransitionOnChange
          >
            <SmoothScroll>
                 {/* Custom Cursor can remain if it fits the vibe, checking implementation later */}
                <CustomCursor /> 
                <Layout>
                {children}
                </Layout>
            </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
