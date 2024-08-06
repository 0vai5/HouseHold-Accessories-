import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universal Mart",
  description: "One stop Mart for your Home and Lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"  
        href="/unimart-transparent 2?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
