import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile | Hogan Pham",
    description: "My homepage",
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
