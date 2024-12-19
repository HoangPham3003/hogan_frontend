'use client'

import PortfolioHeader from "@/components/portfolio/portfolioheader";
import IntroBanner from "@/components/portfolio/introbanner";
import About from "@/components/portfolio/about";
import Education from "@/components/portfolio/education";
import Work from "@/components/portfolio/work";
import Activity from "@/components/portfolio/activity";
import FooterBottom from "@/components/Footer";
import Hobby from "@/components/portfolio/hobby";


export default function PortfolioPage() {
    return (
        <>
            <PortfolioHeader location='Joensuu, Finland' />
            <IntroBanner />
            <About />
            <Education />
            <Work />
            <Activity />
            <Hobby />
            <FooterBottom msg={"That's all about me. Thanks for your reading!"} />
        </>
    );
}
