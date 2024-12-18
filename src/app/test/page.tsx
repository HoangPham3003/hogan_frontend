'use client'

import { useState, useEffect } from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function TestPage() {
    const [msg, setMsg] = useState<string | undefined>("Loading...");
    const { data, error, isLoading } = useSWR(
        'https://hogan-backend.onrender.com/',
        fetcher
    )

    useEffect(() => {
        if (isLoading) {
            setMsg("Loading...");
        } else if (error) {
            setMsg(`Error: ${error.message}`);
        } else if (data) {
            setMsg(data.message);
        }
    }, [isLoading, error, data]);

    return (
        <div className='mt-5 text-2xl text-yellow-400'>
            <p className="text-center">{msg}</p>
        </div>
    );
}