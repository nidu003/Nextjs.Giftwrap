// Import necessary modules and types
import type { Metadata } from "next";
import React from "react"; // Ensure React is imported

// Import CSS and components
import "./globals.css";
import Footer from "./components/Footer";

// Define metadata
export const metadata: Metadata = {
  title: "Nextjs App",
  description: "Shubham Hatzade",
};

// Define RootLayout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href="/styles.css" /> {/* Example, adjust as needed */}
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
