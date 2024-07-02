import React, { ReactNode } from "react";
import Footer from "./components/Footer";
import "./globals.css";

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <title>Nextjs App</title>
      <meta name="description" content="Your description here" />
      <link rel="stylesheet" href="/styles.css" />
      <link rel="stylesheet" href="../app/globals.css" />
    </head>
    <body>
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
