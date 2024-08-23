import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import CookieBanner from "../../components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global - Secure Money Transfers Worldwide",
  description: "Experience fast, secure, and reliable money transfers with Global. Your trusted partner for international transactions.",
  keywords: "money transfer, international money transfer, secure payments, global transactions, financial services",
  author: "Khaled Frayji",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />

       
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/og-image.jpg" /> {/* Replace with your image */}
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="Global" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/twitter-image.jpg" /> {/* Replace with your image */}
        <meta name="twitter:site" content="@yourTwitterHandle" /> {/* Replace with your Twitter handle */}
      </head>
      <body className={inter.className}>
        <>
          <Navbar />
          <CookieBanner />
          <div className="children">{children}</div>
        </>
      </body>
    </html>
  );
}
