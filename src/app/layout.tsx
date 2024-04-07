import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.scss";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "To-Do List",
  description: "To-Do List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
