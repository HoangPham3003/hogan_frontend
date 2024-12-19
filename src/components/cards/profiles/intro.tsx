'use client'

import Link from "next/link";
import { SITE_METADATA } from '@/data/site_metadata'

export function Intro() {
    return (
        <div className="text-white">
            <p className="my-5 text-2xl font-bold">Welcome to my profile!</p>
            <p className="my-5">My name is <b className="text-[#03FFF7]">Hoang Pham</b>, you can call me <b className="text-[#03FFF7]">Hogan</b> that stems from Irish roots and holds the meaning <b className="text-[#03FFF7]">"young warrior"</b>.</p >
            <p className="flex my-5">
                I am from <img className="mx-2" src="https://cdn-icons-png.flaticon.com/512/555/555515.png" width={20} height={18}></img> <b className="text-[#03FFF7]">Hanoi, Vietnam</b>, currently living in <img className="mx-2" src="https://cdn-icons-png.flaticon.com/512/555/555627.png" width={20} height={18}></img> <b className="text-[#03FFF7]">Joensuu, Finland</b>.
            </p>
            <p className="my-5">
                Pursuing Master's degree in Computer Science at <a className="bg-black text-white p-1 text-sm hover:text-[#03FFF7] underline decoration-[#03FFF7]" href="https://www.uef.fi/en">University of Eastern Finland</a> , I am passionate about <b className="text-[#03FFF7]">Artificial Intelligence</b> and excited by its potential to the future.
            </p>
            <p className="my-5">
                Know more about me at:
            </p>
            <div className="flex">
                <Link className="text-center block border border-[#03FFF7] rounded py-2 px-4 bg-gradient-to-r hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-white" href="portfolio">Portfolio</Link>

                <Link className="mx-4 text-center block border border-[#03FFF7] rounded py-2 px-4 hover:bg-gradient-to-l text-white bg-gradient-to-r from-purple-500 to-pink-500" href={SITE_METADATA.siteCV} target="_blank">My CV</Link>
            </div>
        </div >
    )
}