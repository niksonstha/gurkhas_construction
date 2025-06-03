import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gurkhas Construction",
  description: "Building with precision and trust.",
  icons: {
    icon: "/assets/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
