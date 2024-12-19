import React from "react";


interface BadgeSkill {
    name: string,
    color: string
}

interface TimelineItem {
    title: string;
    subtitle: string;
    date: string;
    project: string;
    description: string[];
    technologies: BadgeSkill[]
}

const Work: React.FC = () => {
    const timelineItems: TimelineItem[] = [
        {
            title: "AI Researcher",
            subtitle: "Information Technology Center, Thuy Loi University",
            date: "Jan 2023 - Dec 2023",
            project: "Content-Based Image Retrieval (CBIR)",
            description: [
                "Collaborated professors and Ph.D. candidates within a research team to explore AI solutions, aiming to public research papers.",
                "Conducted research to identify an effective solution for the Content-Based Image Retrieval (CBIR) problem, leveraging Graph Neural Networks (GNN) and Relevance Feedback techniques.",
            ],
            technologies: [
                {
                    name: "pyg",
                    color: "3c2179"
                },
            ],
        },
        {
            title: "AI Engineer",
            subtitle: "Akabot, FPT Corporation",
            date: "June 2022 - Dec 2022",
            project: "Electrical Invoice Information Extraction",
            description: [
                "Researching knowledge relating to text, object recognition and key information extraction in invoice documents.",
                "Building AI model for text recognition, table-document extraction. Converting model to ONNX, packing into modules in FastAPI for further purpose.",
            ],
            technologies: [
                {
                    name: "pytorch",
                    color: "ee4c2c"
                },
                {
                    name: "huggingface",
                    color: "ffd21e"
                },
                {
                    name: "onnx",
                    color: "005ced"
                },
                {
                    name: "fastapi",
                    color: "009688"
                },
                {
                    name: "mongodb",
                    color: "13aa52"
                },
                {
                    name: "git",
                    color: "f05032"
                },
                {
                    name: "docker",
                    color: "46a2f1"
                },
                {
                    name: "aws",
                    color: "232f3e"
                },
            ],
        },
        {
            title: "Machine Learning Traniner",
            subtitle: "FPT Software, FPT Corporation",
            date: "Jan 2021 - May 2021",
            project: "Python and Machine Learning training course",
            description: [
                "A 5-month period of training session for Python and Machine Learning",
            ],
            technologies: [
                {
                    name: "scikitlearn",
                    color: "f7931e"
                },
                {
                    name: "flask",
                    color: "000000"
                },
                {
                    name: "mysql",
                    color: "4479a1"
                },
            ],
        },
        {
            title: "AI Researcher (Intern)",
            subtitle: "Laboratory x Naver AI Center, Post and Telecommunication Institute of Technology",
            date: "Feb 2021 - May 2022",
            project: "",
            description: [
                "Building AI model solving computer-vision related laboratory projects",
            ],
            technologies: [
                {
                    name: "tensorflow",
                    color: "ff6f00"
                },
                {
                    name: "python",
                    color: "3776ab"
                },
            ],
        },
    ];

    return (
        <section id='work' className="mt-40 px-8 md:px-24">
            <div className="max-w-5xl">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl text-center font-bold text-white mb-4">
                    WORK EXPERIENCE
                </h2>
                <div className="w-1/2 h-[2px] bg-[#03FFF7] mx-auto mb-20"></div>
                {/* Timeline */}
                <div className="relative border-l-4 border-[#facc15] w-2/3 mx-auto">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="mb-10 ml-8">
                            {/* Circle */}
                            <div className="absolute -left-4 w-8 h-8 rounded-full bg-[#facc15] flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-semibold text-[#03FFF7]">
                                    {item.title}
                                </h3>
                                <p className="text-md font-medium text-teal-600">
                                    {item.subtitle}
                                </p>
                                <p className="text-sm text-gray-500 mb-3">{item.date}</p>

                                {item.project != "" &&
                                    <p className="text-sm text-gray-500 mb-3">Project: {item.project}</p>
                                }


                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    {item.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>

                                <p className="flex mt-4">
                                    {item.technologies.map((obj, idx) => (
                                        <img className="mr-2" key={idx} alt={obj['name']} src={`https://img.shields.io/badge/-${obj['name']}-${obj['color']}?style=flat-square&logo=${obj['name']}&logoColor=white`} />
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Work;
