import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Header } from "@/components/shared/Header";
import { SpaceToast } from "@/components/shared/SpaceToast";
import { SideBar } from "@/components/shared/SideBar";
import { LoadContext } from "@/components/LoadContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = { title: "Create Next App", description: "Generated by create next app" };

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerSession();
    if (!session) {
        redirect("/");
    }
    return (
        <html lang="pt-br">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-[100vh]`}>
                <Header />
                <SpaceToast />
                <LoadContext />
                <div className="flex">
                    <div className="w-1/10 md:w-1/6 lg:w-1/5">
                        <SideBar />
                    </div>
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
