import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Sukumar Elley — Data, AI & Software",
  description: "Sukumar Elley — Data/AI engineer building analytical systems, production AI platforms, and full-stack products.",
  keywords: ["Sukumar Elley", "Data Analyst", "Data Science", "Machine Learning", "AI", "Python", "Next.js"],
  authors: [{ name: "Sukumar Elley" }],
  openGraph: { title: "Sukumar Elley — Data, AI & Software", description: "Data, AI and software engineering portfolio.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}