import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import Providers from "@/components/shared/Providers";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#141414",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zentura.studio"),
  title: {
    default: "Zentura — The Product Studio for High-Stakes Decisions",
    template: "%s | Zentura",
  },
  description:
    "We help founders navigate product strategy, design, and engineering — with a dedicated team and a proven process.",
  keywords: [
    "product design",
    "UI/UX design",
    "product studio",
    "web development",
    "startup",
    "product strategy",
    "Zentura",
  ],
  authors: [{ name: "Zentura" }],
  creator: "Zentura",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zentura.studio",
    siteName: "Zentura",
    title: "Zentura — The Product Studio for High-Stakes Decisions",
    description:
      "We help founders navigate product strategy, design, and engineering — with a dedicated team and a proven process.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentura — The Product Studio for High-Stakes Decisions",
    description:
      "We help founders navigate product strategy, design, and engineering — with a dedicated team and a proven process.",
    creator: "@zentura",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <PageTransitionWrapper>
            <main className='min-h-screen bg-background'>{children}</main>
          </PageTransitionWrapper>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
