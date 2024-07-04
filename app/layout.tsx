import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "Nextjs App",
  description: "Nida Sayyed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
