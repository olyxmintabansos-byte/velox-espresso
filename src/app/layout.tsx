import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dual-Boiler Lever Espresso Machine",
  description: "Italian-engineered dual-boiler with PID temperature control and traditional lever actuation. Handbrew precision meets in...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-light text-dark">{children}</body>
    </html>
  );
}
