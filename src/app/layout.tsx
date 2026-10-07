import "./globals.css";

export const metadata = {
  title: "Crow | Authentic UGC for Brands in Africa",
  description: "The premier platform connecting forward-thinking brands with top-tier User Generated Content creators across the continent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
