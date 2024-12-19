'use client'
import { TypeAnimation } from 'react-type-animation';
import { SITE_METADATA } from '@/data/site_metadata'


const Hobby: React.FC = () => {
    return (
        <section id='hobby' className="mt-32 px-8 md:px-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Hobby
                </h2>
                <div className="w-1/2 h-[2px] bg-[#03FFF7] mx-auto mb-5"></div>
            </div>

            <div className="w-2/3 mx-auto flex flex-col md:flex-row items-center px-5">

                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "I am a sporty person. I'm a big fan of football.",
                            1000,
                            "My favorite football club is Chelsea. I also like Real Madrid.",
                            1000,
                            "Christiano Ronaldo is my idol!",
                            1000,
                            "I usually play football every Saturday.",
                            1000,
                            "I am a movieholic too. The type I like most is drama movie.",
                            1000,
                            "The movie I always wanted to watch again is Game of Thrones series.",
                            1000,
                            "Korean romantic movies are also my choice in free time",
                            1000,
                            "I have always enjoyed exploring cuisine.",
                            1000,
                            "My favorite food is 'Bánh Mì'",
                            1000,
                            "That's all about me. Thanks for reading!",
                            5000,
                        ]}
                        wrapper="p"
                        speed={50}
                        cursor={false}
                        className="text-gray-200"
                        repeat={Infinity}
                    />
                    <p className='text-gray-400 mt-2'>- Hoang Pham -</p>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src={SITE_METADATA.siteFootballPlayer}
                        alt="FootballPlayer"
                        className="w-full h-auto max-w-sm object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>

        </section >
    );
};

export default Hobby;
