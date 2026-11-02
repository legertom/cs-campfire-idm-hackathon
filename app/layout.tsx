import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campfire 2026 · Clever CS IDM Hackathon",
  description:
    "Three teams. One shared mission. Build a 30-minute Clever IDM learning experience for Customer Support.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
