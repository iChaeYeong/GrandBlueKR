import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "그랑블루 대구경북",
  description: "그랑블루 대구경북 프리다이빙 전문 강습",
  icons: {
    icon: '/grandblue.svg',
  },
  openGraph: {
    title: "그랑블루 대구경북",
    description: "그랑블루 대구경북 프리다이빙 전문 강습",
    url: "http://lcyserver.duckdns.org:8080",
    siteName: "그랑블루 대구경북",
    images: [
      {
        url: "http://lcyserver.duckdns.org:8080/default-og-image.png",
        width: 1200,
        height: 630,
        alt: "그랑블루 대구경북 대표 이미지",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "그랑블루 대구경북",
    description: "그랑블루 대구경북 프리다이빙 전문 강습",
    images: ["http://lcyserver.duckdns.org:8080/default-og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
