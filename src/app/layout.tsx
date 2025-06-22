import type { Metadata } from "next";
import { Poppins, Permanent_Marker } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Flip & Find",
  description: "Memory card matching game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${permanentMarker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
