import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Header } from "@/components/shared/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerSession();
    if (!session) {
        redirect("/");
    }
    return (
        <html lang="pt-br">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-[100vh]`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
