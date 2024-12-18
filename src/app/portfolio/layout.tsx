import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio | Hogan Pham",
    description: "My portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
