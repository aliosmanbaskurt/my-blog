import type { Metadata } from "next";
import "./globals.css";
import MyProfilePic from "./components/Profile";
import NavBar from "./components/NavBar";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
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
      <body className="mx-auto justify-center dark:bg-slate-700">
        <Theme accentColor="violet" grayColor="sand" radius="large">
          <NavBar />

          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
