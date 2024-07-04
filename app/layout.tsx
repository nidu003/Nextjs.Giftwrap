import type { Metadata } from "next";
import "../app/globals.css"; // Adjust path if necessary
import Footer from './Components/Footer'; // Adjust path

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
