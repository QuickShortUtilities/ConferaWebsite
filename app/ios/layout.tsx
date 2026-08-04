import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Confera for iOS — Mobile Intelligence',
    description: 'The professional networking app for iPhone. Glass Scanner, NFC Handshake, and AI discovery — built for iPhone.',
};

export default function IOSLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
