import { AlertsContainer } from "@/components/alerts";
import { NavigationBar } from "@/components/navbar";
import { AlertsProvider } from "@/context/alerts-state";
import { GeistMono } from "geist/font/mono";
import { GeistPixelCircle, GeistPixelGrid, GeistPixelLine, GeistPixelSquare, GeistPixelTriangle } from 'geist/font/pixel';
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Montserrat, Roboto, Roboto_Flex, Roboto_Serif, Roboto_Slab } from 'next/font/google';
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

{/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght,XOPQ,XTRA,YOPQ,YTDE,YTFI,YTLC,YTUC@8..144,100..1000,96,468,79,-203,738,514,712&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap" rel="stylesheet"></link> */}

// Fonts: Inter

const roboto = Roboto({
  weight: ['100','200','300','400'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

const robotoSlab = Roboto_Slab({
  weight: ['100','200','300','400'],
  subsets: ['latin'],
  variable: '--font-robotoslab'
});

const robotoFlex = Roboto_Flex({
  weight: ['100','200','300','400'],
  subsets: ['latin'],
  variable: '--font-robotoflex'
});

const robotoSerif = Roboto_Serif({
  weight: ['100','200','300','400'],
  subsets: ['latin'],
  variable: '--font-robotoserif'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800',],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "Deploy your static Next.js site to GitHub Pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable} ${robotoSlab.variable} ${robotoFlex.variable} ${robotoSerif.variable} ${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable}`} suppressHydrationWarning>
      <AlertsProvider>
        <body className="flex flex-col h-screen bg-base-200">
          <ThemeProvider>
            <AlertsContainer />
            {/* Header */}
            <header className="bg-base-100 shadow-sm shrink-0">
              <NavigationBar />
            </header>
            <main className="flex-1 overflow-y-auto m-1">
              <div className="flex justify-center p-4">{children}</div>
            </main>
            {/* Footer */}
            <footer className="footer sm:footer-horizontal footer-center bg-base-100 shadow-sm text-center p-1 text-sm shrink-0">
              <div className="flex items-center w-full">
                <span className="flex-1 text-center">
                  © {new Date().getFullYear()}
                </span>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </AlertsProvider>
    </html>
  );
}
