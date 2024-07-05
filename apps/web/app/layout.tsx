import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { MotionWrapper } from "headless-motion";

export const metadata: Metadata = {
  title: "Headless Motion",
  description: "Put motion on your website within minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <MotionWrapper>{children}</MotionWrapper>
      </body>
    </html>
  );
}
