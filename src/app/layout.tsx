import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import Navbar from "@/components/Navbar";
import "@/app/globals.css";

export const metadata = {
  title: "Fraud Detection Dashboard",
  description: "Monitor fraudulent apps and URLs in real-time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <Navbar />
          <main className="p-6">{children}</main>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
