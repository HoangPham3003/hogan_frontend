'use client'
import Logo from "../../components/Logo";
import { ProfileCard } from "../../components/cards/profiles";
import { Container } from '@/components/ui/container'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function Home() {
    const { data, error, isLoading } = useSWR(
        'https://hogan-backend.onrender.com/',
        fetcher
    )

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            <Container as="div" className="pt-1 lg:pt-4">
                <div className="py-1 md:pb-8 grid grid-cols-3">
                    <div className="pl-4 pt-1 block">
                        <Logo />
                        <p className="text-center">{data.message}</p>
                    </div>
                    <div>
                    </div>
                    <div className="pl-4 pt-1 block">
                        <ProfileCard />
                    </div>
                </div>
            </Container>
        </>
    );
}
