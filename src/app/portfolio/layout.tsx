import type { Metadata } from "next";
import '@/styles/portfolio/portfolio.scss'

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
        <div className="min-h-screen bg-dotted-grid">
            {children}
        </div>
    );
}
