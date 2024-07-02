import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import * as React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Vision",
    description: "Sistema de gerenciamento de placas",
};

export default function RootLayout({children}) {
    return (
        <html lang="pt">
        <body className={inter.className}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
