import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gemini AI",
  description: "Generated by create next app",
  icons: "/logo.png", // Add this line for the favicon
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
