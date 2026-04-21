import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff",
            },
          }}
        />

        <Analytics />

      </body>
    </html>
  );
};
export default RootLayout;
