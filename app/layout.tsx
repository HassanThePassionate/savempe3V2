import type { Metadata } from "next";
import "./globals.css";
import { Cabin } from "next/font/google";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${cabin.className} antialiased`}>{children}</body>
    </html>
  );
}
