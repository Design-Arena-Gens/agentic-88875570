import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tan Son Nhat Fast Track Guide",
  description:
    "Compare reputable fast-track immigration services at Tan Son Nhat (SGN) including pricing, reviews, and service highlights.",
  openGraph: {
    title: "Tan Son Nhat Fast Track Guide",
    description:
      "Independent comparison of fast-track services at Tan Son Nhat Airport with pricing and review data.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
