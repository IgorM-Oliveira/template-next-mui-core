import {Inter} from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/header";
import { ThemeProvider } from 'next-themes'

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Vision",
    description: "Sistema de gerenciamento de placas",
};

export default function RootLayout({children}) {
    return (
        <html lang="pt">
        <body className={inter.className}>
        <Header/>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
