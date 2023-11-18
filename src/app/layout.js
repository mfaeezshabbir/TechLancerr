import Navbar from "@/components/banner/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "TechLancerr",
  description:
    "TechLancerr is first of its kind event in South Punjab which aims to bridge the gap between freelancing and technology, come join us for an informative session with some of Pakistan's top IT minds and professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
