import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RentalCar",
  description:
    "Modern car rental service for comfortable and affordable trips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
