import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Footer from '@/components/ProactiveSecurity/Footer';

export const metadata: Metadata = {
  title: "Child-Tracker",
  description: "Monitor everything on others' Android/iPhone devices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <div className="pt-16 sm:pt-20">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
