import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Napolill - REPROGRAM-BRAIN | Affirmationen & Gehirn-Reprogrammierung",
  description: "Die innovative App für Affirmationen und Gehirn-Reprogrammierung mit wissenschaftlichen Solfeggio-Frequenzen. Löse deine inneren Blockaden und stärke dein Selbstwertgefühl.",
  keywords: "Affirmationen, Gehirn-Reprogrammierung, Solfeggio-Frequenzen, Meditation, Selbstentwicklung, Achtsamkeit",
  authors: [{ name: "Napolill Team" }],
  creator: "Napolill",
  publisher: "Napolill",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://napolill.com",
    title: "Napolill - REPROGRAM-BRAIN",
    description: "Die innovative App für Affirmationen und Gehirn-Reprogrammierung mit wissenschaftlichen Solfeggio-Frequenzen.",
    siteName: "Napolill",
  },
  twitter: {
    card: "summary_large_image",
    title: "Napolill - REPROGRAM-BRAIN",
    description: "Die innovative App für Affirmationen und Gehirn-Reprogrammierung mit wissenschaftlichen Solfeggio-Frequenzen.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#214F5B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
