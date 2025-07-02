import Header from "@/components/Header";
import "./globals.css";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
