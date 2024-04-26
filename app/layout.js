// STYLES
import { Inter } from "next/font/google";
import "./globals.css";

// COMPONENTS
import { Navbar } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Tutorial",
  description: "Build awesome stuf with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
