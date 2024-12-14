'use client'
import useSWR from 'swr'
import Image from "next/image";

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function Home() {
  const { data, error, isLoading } = useSWR(
    'https://hogan-backend.onrender.com/',
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {data.message}
    </div>
  );
}
