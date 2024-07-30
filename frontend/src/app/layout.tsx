"use client";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="overlays"></div>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
