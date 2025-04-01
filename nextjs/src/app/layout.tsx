import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "List App (NextJS)",
  description: "List App (NextJS)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
