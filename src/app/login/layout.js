import "@/app/globals.css";
import styles from "@/app/page.module.css";
import {ThemeProvider} from "next-themes";

export const metadata = {
    title: "Vision",
    description: "Sistema de gerenciamento de placas",
};

export default function RootLayout({children}) {
    return (
        <html lang="pt" className={styles.page}>
        <body className={styles.page}>
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
