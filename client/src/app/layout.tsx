import type { Metadata } from "next";
import "../index.css";

import StoreProvider from "./Provider/StoreProvider";
import Navbar from "src/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main-layout">
          <StoreProvider>
            <Navbar />
            {children}
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
