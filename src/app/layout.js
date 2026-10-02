import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/assets/styles/loader.css";
import "../../public/assets/styles/multirangeslider.css";
import "../../public/assets/styles/selectbox.css";
import InitialStyle from "@/components/initialStyle";
import ServiceWorker from "@/components/sw/sw";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopo",
  description: "ShopO | Multivendor E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <InitialStyle />
      <ServiceWorker />
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
