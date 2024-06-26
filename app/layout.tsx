import type { Metadata } from "next";
import { Inter as FontSans, Courier_Prime } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"] , variable:'--font-sans' });
const courier = Courier_Prime({subsets: ["latin"] , weight:["400", "700"], variable:"--courier"})

export const metadata: Metadata = {
  title: "Create Next App ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans antialiased')}>{children}</body>
    </html>
  );
}
