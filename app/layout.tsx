import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nhat | Personal Portfolio",
  description: "Nhat is an aspiring software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative  pt-28`}>
        <div className="bg-[#a0c1fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#fbe2e3] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2x1:left-[-5rem]"></div>
            <ActiveSectionContextProvider>
            <Header/>
            {children}
            <Footer/>
            <Toaster position="top-right"/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
