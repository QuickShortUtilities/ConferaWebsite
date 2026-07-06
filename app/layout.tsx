import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: {
        default: "Confera — Meet Smarter",
        template: "%s | Confera"
    },
    description: "The professional network that knows who to put in front of you. Scan. Connect. Confera handles the rest.",
    keywords: ["professional networking", "AI networking", "NFC business card", "CRM sync", "event networking", "iOS app"],
    authors: [{ name: "Confera" }],
    creator: "Confera",
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://confera.digital",
        siteName: "Confera",
        title: "Confera — Meet Smarter",
        description: "The professional network that knows who to put in front of you. Scan. Connect. Confera handles the rest.",
        images: [{ url: "/logo-dark.png", width: 1200, height: 630, alt: "Confera" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Confera — Meet Smarter",
        description: "The professional network that knows who to put in front of you.",
        images: ["/logo-dark.png"],
    },
    icons: {
        icon: '/logo-dark.png',
        shortcut: '/logo-dark.png',
        apple: '/logo-dark.png',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
