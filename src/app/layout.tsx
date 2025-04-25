import type { Metadata } from "next";
import { Quicksand, Work_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Head from "next/head";
import "./globals.css";
import "boxicons/css/boxicons.min.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Passionate Center & Homes",
  description: "A website for Passionate Center & Homes",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Passionate Center & Homes",
    description: "A website for Passionate Center & Homes",
    url: "YOUR_CANONICAL_URL",
    siteName: "Passionate Center & Homes",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Passionate Center & Homes Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passionate Center & Homes",
    description: "A website for Passionate Center & Homes",
    images: ["/og-image.png"],
    site: "@YOUR_TWITTER_HANDLE",
    creator: "@YOUR_TWITTER_HANDLE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "YOUR_CANONICAL_URL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${workSans.variable}`}>
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://passionatecenterandhomes.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Our Programs",
                  "item": "https://passionatecenterandhomes.com/programs"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Residential Support Program",
                  "item": "https://passionatecenterandhomes.com/residential"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Community Support Program",
                  "item": "https://passionatecenterandhomes.com/community"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Get Involved",
                  "item": "https://passionatecenterandhomes.com/getinvolved"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Contact",
                  "item": "https://passionatecenterandhomes.com/contact"
                }
              ]
            }
          `}
        </script>
      </Head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
