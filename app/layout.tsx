import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuMarS Procurement",
  description: "Procurement workspace setup for sourcing, approvals, and vendor tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
