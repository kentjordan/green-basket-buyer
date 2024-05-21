"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Footer from "@/components/Footer";
import greenbasketlogo from "@/assets/logo.png";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Green Basket</title>
        <link rel='icon' type='image/x-icon' href={greenbasketlogo.src} />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
