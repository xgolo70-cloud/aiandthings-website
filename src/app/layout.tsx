import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css'; // Global styles
import Layout from '@/components/layout/Layout';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
const instrument = Instrument_Sans({ 
  subsets: ['latin'], 
  variable: '--font-instrument',
  display: 'swap',
});

// NoiseOverlay removed for cleaner "Cosmic Glass" look

const lyonArabicDisplay = localFont({
  src: [
    { path: '../../public/fonts/COMM - Lyon Arabic Display Light.otf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/COMM - Lyon Arabic Display Regular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/COMM - Lyon Arabic Display Medium.otf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/COMM - Lyon Arabic Display Bold.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/COMM - Lyon Arabic Display Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-lyon-display',
  display: 'swap',
});

const lyonArabicText = localFont({
  src: [
    { path: '../../public/fonts/COMM - Lyon Arabic Text Regular.otf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/COMM - Lyon Arabic Text Semibold.otf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/COMM - Lyon Arabic Text Bold.otf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/COMM - Lyon Arabic Text Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-lyon-text',
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
      <body className={`${instrument.variable} ${lyonArabicDisplay.variable} ${lyonArabicText.variable} antialiased font-sans text-white bg-zinc-950 selection:bg-violet-500/30 selection:text-violet-200`}>
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
