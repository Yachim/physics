import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MathJax from "./MathJax";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Physics",
  description: "Physics notes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <Script id="mathjax" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async={true} />
        <MathJax />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
