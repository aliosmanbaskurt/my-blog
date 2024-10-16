import type { Metadata } from "next";
import "./globals.css";
import MyProfilePic from "./components/Profile";
import NavBar from "./components/NavBar";
import "@radix-ui/themes/styles.css";

import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Ali Osman Başkurt",
  description: "Robotik Kodlama,Bilişim Teknolojileri,Yazılım,Kodlama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <meta
        name="google-site-verification"
        content="4QvEzBduefIQNc1o1pi5_8kmvVEh3pVu6hdhjHrAfMA"
      />
      <body className="mx-auto justify-center ">
        <NavBar />

        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
