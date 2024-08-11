import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"], style: "normal" });

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
        rel="favicon"  
        href="/unimart-transparent 2?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
