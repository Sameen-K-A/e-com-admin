import type { Metadata } from "next";
import { Outfit } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecom Admin",
  description: "Manage your dropshipping business with ease using Ecom Admin. Add products, track orders, manage inventory, and grow your online store—all from one powerful Next.js platform.",
  keywords: ["dropshipping", "ecommerce platform", "Ecom Admin", "online store management", "product management", "order tracking", "inventory management", "nextjs ecommerce", "sell online"],
};

const font = Outfit({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}