import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/shared/theme-provider";
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoSans = Roboto({
  subsets: ["latin"],
  weight: ['300','400','500','700'],
  variable: "--font-roboto"
})

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce app for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" >
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} ${robotoSans.variable} antialiased`}
      >
       <ThemeProvider>
        {children}
       </ThemeProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
