import { ProfileCard } from "@/components/cards/profiles";
import { Container } from '@/components/ui/container'
import { Intro } from '@/components/cards/profiles/intro';
import FooterBottom from "@/components/Footer";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import SnowBackground from "@/components/snowflake/snowflake";
import '@/components/snowflake/snowflake.scss'

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <SnowBackground />
            <Navbar />
            <Container as="div" className="pt-1 lg:pt-4">
                <div className="py-6 md:pb-8 xl:grid xl:grid-cols-3">
                    <div className="space-y-4 md:space-y-1 md:pr-8 xl:col-span-2">
                        <div className="px-10">
                            <Logo />
                            <Intro />
                        </div>
                    </div>
                    <div className="pr-10 pt-1 block">
                        <ProfileCard />
                    </div>
                </div>
            </Container >

            <FooterBottom msg={"\"This is not the end, it's just the beginning.\""} />
        </div >
    );
}
