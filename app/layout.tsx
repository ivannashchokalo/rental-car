import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import { Toaster } from "react-hot-toast";
import TanStackProvider from "@/providers/TanStackProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RentalCar",
  description:
    "RentalCar is a modern car rental service for comfortable and affordable trips. Browse available vehicles, explore detailed specifications, and book your perfect car with ease.",
  openGraph: {
    type: "website",
    url: "https://rental-car-4csh.vercel.app",
    title: "RentalCar",
    description:
      "Find the perfect car for your next trip with RentalCar. Explore a wide selection of vehicles, detailed specifications, and a seamless booking experience in one modern platform.",
    images: [
      {
        url: "https://rental-car-4csh.vercel.app/background.webp",
        width: 1200,
        height: 630,
        alt: "RentalCar application preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Toaster position="top-center" />
        <TanStackProvider>
          <Header />
          <main>{children}</main>
        </TanStackProvider>
      </body>
    </html>
  );
}
