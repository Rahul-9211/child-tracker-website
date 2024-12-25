import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spyzie",
  description: "Monitor everything on others' Android/iPhone devices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
