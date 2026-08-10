import "./globals.css";
import { Google_Sans_Flex } from "next/font/google";

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
  variable: "--font-google-sans-flex",
  axes: ["GRAD", "ROND", "opsz", "slnt", "wdth"],
});

export const metadata = {
  title: "Johnry Atienza — Frontend Developer",
  description: "The portfolio of Johnry Atienza, a frontend developer crafting thoughtful digital experiences.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={googleSansFlex.variable}>
      <body>{children}</body>
    </html>
  );
}
