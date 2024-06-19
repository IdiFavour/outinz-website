import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/theme-provider";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dmsans",
});

const pong = localFont({
  src: "./fonts/Ponjoung-Medium.woff",
  weight: "400",
  variable: "--font-pong",
});

export const metadata: Metadata = {
  title: "Outinz",
  description: "Generate Dynamic forms for your business.",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <link href="https://fonts.cdnfonts.com/css/ponjoung" rel="stylesheet" /> */}
      <body className={`${pong.variable} ${dmsans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="muxnotes-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
