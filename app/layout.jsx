import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'

export const metadata = {
  title: "BizBuddy",
  description: "BizBuddy web application powered by BizSolutions",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
     <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
    </ClerkProvider>
  );
}
