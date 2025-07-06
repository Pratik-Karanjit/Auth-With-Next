import Header from "@/components/Header";
import "./globals.css";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper";
export const metadata = {
  title: {
    template: "%s | Auth App",
    default: "Auth Application",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionWrapper>
          <Header />
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}
