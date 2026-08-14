import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ΡΙΖΟΣ",
  description:
    "Μπουγατσοπωλείο ΡΙΖΟΣ στη Λεωφ. Κρυονερίου 17, Άγιος Στέφανος, με μπουγάτσα, πίτες, καφέ και 24ωρη λειτουργία.",
  openGraph: {
    title: "ΡΙΖΟΣ",
    description:
      "Ζεστή μπουγάτσα, πίτες και καφές όλο το 24ωρο στη Λεωφ. Κρυονερίου 17.",
  },
  icons: {
    icon: "/rizos-favicon.svg",
    shortcut: "/rizos-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
