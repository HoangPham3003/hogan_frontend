import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 px-8 md:px-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    ABOUT ME
                </h2>
                <div className="w-1/2 h-[2px] bg-[#03FFF7] mx-auto mb-8"></div>

                <div className="w-3/4 mx-auto text-gray-500 text-md">
                    <p className=" leading-relaxed mb-6">
                        My name is Hoang Pham, but you can call me Hogan in English. The name "Hogan" has Irish
                        origins and carries the meaning "young warrior."
                        I&apos;m from Hanoi, Vietnam and currently pursuing Master&apos;s degree
                        in Computer Science at University of Eastern Finland (UEF), Joensuu campus in Finland.
                    </p>

                    <p className="leading-relaxed mb-6">
                        Throughout my education and career, I have paid strongly attention to
                        Artificial Intelligence. In my early years in this field, I was passionate about
                        Computer Vision, and spent about 3 years working in both research and
                        production environments. Currently, with the desire to continuously improve,
                        I am enhancing my expertise by focusing on Large Language Models and their
                        real-world applications.
                    </p>

                    <p className=" leading-relaxed">
                        My drive to deploy real-world AI models has deepened my knowledge of software development,
                        especially web applications. Working in a corporate environment has further strengthened
                        my technical skills, teamwork, and problem-solving abilities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
