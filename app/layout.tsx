import "./globals.css";

export const metadata = {
  title: "Johnry Atienza — Frontend Developer",
  description: "The portfolio of Johnry Atienza, a frontend developer crafting thoughtful digital experiences.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
