import { AlertsContainer } from "@/components/alerts";
import { NavigationBar } from "@/components/navbar";
import { AlertsProvider } from "@/context/alerts-state";
import {
  profilePicture,
  seoAuthor,
  seoDescription,
  seoKeywords,
  seoRichResultsJsonLD,
  seoTitle,
  seoUrlLocation
} from "@/lib/constants";
import { GoogleTagManager } from "@next/third-parties/google";
import { GeistMono } from "geist/font/mono";
import {
  GeistPixelCircle,
  GeistPixelGrid,
  GeistPixelLine,
  GeistPixelSquare,
  GeistPixelTriangle,
} from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import {
  Montserrat,
  Roboto,
  Roboto_Flex,
  Roboto_Serif,
  Roboto_Slab,
} from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Fonts: Inter, OpenSans, GoogleSans

const roboto = Roboto({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-robotoslab",
});

const robotoFlex = Roboto_Flex({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-robotoflex",
});

const robotoSerif = Roboto_Serif({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-robotoserif",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

// SEO
export const metadata: Metadata = {
  metadataBase: new URL(seoUrlLocation),
  title: { default: seoTitle, template: `%s | ${seoTitle}` },
  description: `${seoDescription} ${seoKeywords}`,
  keywords: seoKeywords,
  alternates: {
    canonical: seoUrlLocation,
    // languages: {
    //   'en-US': 'https://example.com/en-US',
    //   'de-DE': 'https://example.com/de-DE'
    // }
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: seoUrlLocation,
    siteName: seoTitle,
    images: [
      {
        url: `${seoUrlLocation}${profilePicture}`,
        width: 1000,
        height: 1000,
        alt: seoAuthor,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: "Next.js",
  applicationName: `${seoAuthor} Next.js App`,
  referrer: "origin-when-cross-origin",
  authors: [{ name: seoAuthor, url: seoUrlLocation }],
  creator: seoAuthor,
  publisher: seoAuthor,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} ${robotoSlab.variable} ${robotoFlex.variable} ${robotoSerif.variable} ${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable}`}
      suppressHydrationWarning
    >
      {/* <Head> */}
        {/* Add JSON-LD */}
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{__html: seoRichResultsJsonLD}} /> */}
        {/* <script type="application/ld+json">
          { JSON.stringify(seoRichResultsJsonLD) }
        </script> */}
      {/* </Head> */}
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seoRichResultsJsonLD) }} />
      </head>
      <GoogleTagManager gtmId="G-1KHTNS4NY2" />
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
