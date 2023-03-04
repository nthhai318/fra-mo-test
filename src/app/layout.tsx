import "./globals.css";

export const metadata = {
  title: "Framer-motion playground",
  description: "Testing framer-motion capabilities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
