import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Script from "next/script";
import Footer from "./components/Footer";

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
    url: "https://grandbluehabin.co.kr/",
    siteName: "그랑블루 대구경북",
    images: [
      {
        url: "https://grandbluehabin.co.kr/image/hero.jpeg",
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
    images: ["https://grandbluehabin.co.kr/image/hero.jpeg"],
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
        <Script
          id="channel-talk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var w = window;
                if (w.ChannelIO) {
                  return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
                }
                var ch = function() {
                  ch.c(arguments);
                };
                ch.q = [];
                ch.c = function(args) {
                  ch.q.push(args);
                };
                w.ChannelIO = ch;
                function l() {
                  if (w.ChannelIOInitialized) {
                    return;
                  }
                  w.ChannelIOInitialized = true;
                  var s = document.createElement('script');
                  s.type = 'text/javascript';
                  s.async = true;
                  s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                  var x = document.getElementsByTagName('script')[0];
                  if (x.parentNode) {
                    x.parentNode.insertBefore(s, x);
                  }
                }
                if (document.readyState === 'complete') {
                  l();
                } else if (window.attachEvent) {
                  window.attachEvent('onload', l);
                } else {
                  window.addEventListener('DOMContentLoaded', l, false);
                  window.addEventListener('load', l, false);
                }
              })();
              ChannelIO('boot', {
                "pluginKey": "b7c5c0f9-9a9c-4257-a526-70c7e7c02b80"
              });
            `
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
