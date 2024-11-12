import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Homework 1 MainLayout",
  description: "Creating the first next app and its functionality",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Menu/>
          {children}
      </body>
      </html>
  );
};
