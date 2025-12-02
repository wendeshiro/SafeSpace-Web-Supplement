import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../public/font/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "SpaceSafe - Web",
  description: "Build a safer space with AI-recommended actions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable}`}>{children}</body>
    </html>
  );
}
