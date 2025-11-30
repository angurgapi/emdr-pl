import type { Metadata, Viewport } from "next";
import "./globals.css";
import { cookies } from "next/headers";
import { THEME_COOKIE } from "@/lib/theme";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Spoko | EMDR Online | Stymulacja obustronna",
  description: "Narzędzie do stymulacji obustronnej dla terapii EMDR",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "EMDR",
    "Stymulacja obustronna",
    "BLS",
    "Terapia",
    "Zdrowie psychiczne",
    "Samopomoc",
    "PTSD",
    "Lęk",
    "Depresja",
    "Dobrostan",
    "Trauma",
  ],
};
export const viewport: Viewport = { colorScheme: "dark light" };

async function computeInitialClassFromCookie() {
  const cookie = (await cookies()).get(THEME_COOKIE)?.value as
    | "light"
    | "dark"
    | undefined;
  return cookie || "light";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialHtmlClass = await computeInitialClassFromCookie();
  return (
    <html lang="pl" className={initialHtmlClass} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white antialiased flex flex-col">
        <ThemeProvider />
        <div id="root" className="flex flex-col flex-1 pt-12 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
