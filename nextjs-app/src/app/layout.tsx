import { AlertsContainer } from "@/components/alerts";
import { NavigationBar } from "@/components/navbar";
import { AlertsProvider } from "@/context/alerts-state";
import { UserAgentProvider } from "@/context/user-agent-detector";
import {
  defaultLightTheme,
  seoAuthor,
  seoAuthorAtHandle,
  seoAuthorUrl,
  seoKeywords,
  seoMetaDescriptionDefault,
  seoProfilePictureOpenGraph,
  seoProfilePictureTwitterCard,
  seoRichResultsJsonLD,
  seoTitle,
  seoUrlLocation,
  theProtagonistsAtHandle,
  theProtagonistsIdentifier,
  theProtagonistsName,
} from "@/lib/constants";
import { themeNames } from "@/lib/daisyui-theme-names";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
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
  // metadataBase: new URL(seoUrlLocation), metadatabase is not needed since we unfold location urls manually where they are needed
  title: { default: seoTitle, template: `%s | ${seoTitle}` }, // template only affects pages below the current path, not the current path (page.tsx)
  description: `${seoMetaDescriptionDefault}`,
  keywords: seoKeywords,
  alternates: {
    canonical: seoUrlLocation, // default needs to be overwritten for each page
    // languages: {
    //   'en-US': 'https://example.com/en-US',
    //   'de-DE': 'https://example.com/de-DE'
    // }
  },
  openGraph: {
    title: seoTitle,
    description: seoMetaDescriptionDefault, // default description
    url: seoUrlLocation, // default needs to be overwritten for each page
    siteName: `${theProtagonistsName} (${theProtagonistsAtHandle})`,
    images: [
      {
        url: `${seoUrlLocation}${seoProfilePictureOpenGraph}`,
        width: 320,
        height: 320,
        alt: theProtagonistsName,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoMetaDescriptionDefault,
    site: theProtagonistsAtHandle, // default needs to be overwritten for each page
    siteId: theProtagonistsIdentifier, // default needs to be overwritten for each page
    creator: seoAuthorAtHandle,
    creatorId: theProtagonistsIdentifier,
    images: [`${seoUrlLocation}${seoProfilePictureTwitterCard}`], // Must be an absolute URL
  },
  generator: "Next.js",
  applicationName: `${seoAuthor} Next.js App`,
  referrer: "origin-when-cross-origin",
  authors: [{ name: seoAuthor, url: seoAuthorUrl }],
  creator: seoAuthor,
  publisher: seoAuthor,
  formatDetection: {
    telephone: false,
    date: true,
    address: true,
    email: false,
    url: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

{
  /* Somehow Next.js' next/Head, <Head>...</Head>, doesn't seem to work */
}
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoRichResultsJsonLD),
          }}
        />
      </head>
      <GoogleTagManager gtmId="G-1KHTNS4NY2" />
      <AlertsProvider>
        <UserAgentProvider>
          <body className="flex flex-col h-dvh overflow-hidden bg-base-200 text-base-content">
            <ThemeProvider
              themes={themeNames}
              defaultTheme={defaultLightTheme}
              enableSystem={false}
              // value={themeMapping}
              // defaultTheme="system"
              // enableSystem={true}
            >
              <AlertsContainer />
              <header className="bg-base-100 shadow-sm shrink-0 z-10 text-base-content">
                <NavigationBar />
              </header>
              <main className="flex-1 overflow-y-auto m-1 relative text-base-content">
                <div className="flex justify-center p-4">{children}</div>
              </main>
              <footer className="footer sm:footer-horizontal footer-center bg-base-100 shadow-sm text-center p-1 text-sm shrink-0 z-10 text-base-content">
                <div className="flex items-center w-full">
                  <span className="flex-1 text-center">
                    © {new Date().getFullYear()}
                  </span>
                </div>
              </footer>
            </ThemeProvider>
          </body>
        </UserAgentProvider>
      </AlertsProvider>
    </html>
  );
}
