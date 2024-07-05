import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "포켓몬 도감",
    description: "포켓몬 리스트와 개별 상세 정보를 보여주는 어플리케이션",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <header className="w-full h-[60px] bg-[#3477ff] text-center content-center">
                    <h2 className="font-bold">나만의 포켓몬 리스트 도감</h2>
                </header>
                {children}
            </body>
        </html>
    );
}
