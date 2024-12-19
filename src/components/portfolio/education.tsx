import React from "react";

interface TimelineItem {
    period: string;
    school: string;
}

const Education: React.FC = () => {
    const timelineItems: TimelineItem[] = [
        { period: "2006 - 2011", school: "Nguyen Trai primary school" },
        { period: "2011 - 2015", school: "Luong The Vinh secondary school" },
        { period: "2015 - 2018", school: "Kim Lien high school" },
        { period: "2018 - 2023", school: "Posts and Telecommunication Institute of Technology" },
        { period: "2024 - Present", school: "University of Eastern Finland" },
    ];

    return (
        <section id="education" className="py-16 px-8 md:px-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    EDUCATION
                </h2>
                <div className="w-1/2 h-[2px] bg-[#03FFF7] mx-auto mb-40"></div>

                {/* Horizontal Timeline */}
                <div className="relative flex items-center">
                    {/* Long Arrow Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#facc15]">
                        <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 border-l-8 border-t-4 border-b-4 border-l-[#facc15] border-transparent"></div>
                    </div>

                    {/* Timeline Items */}
                    {timelineItems.map((item, index) => {
                        const isLastItem = index === timelineItems.length - 1; // Check if this is the last item
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center w-1/3 relative"
                                style={{
                                    transform: `translateY(${index % 2 === 0 ? "-60px" : "80px"})`,
                                }}
                            >
                                {/* Circle Marker */}
                                <div
                                    className={`w-8 h-8 ${isLastItem ? "bg-[#03FFF7]" : "bg-[#042f2e]"
                                        } rounded-full flex items-center justify-center relative z-10`}
                                >
                                    <div
                                        className={`w-4 h-4 ${isLastItem ? "bg-white" : "bg-gray-500"
                                            } rounded-full`}
                                    ></div>
                                </div>

                                {/* Period and School */}
                                <div className="mt-4 text-center">
                                    <p
                                        className={`text-xs font-semibold ${isLastItem ? "text-white" : "text-gray-500"
                                            }`}
                                    >
                                        {item.period}
                                    </p>
                                    <p
                                        className={`text-xs font-semibold ${isLastItem ? "text-[#03FFF7]" : "text-teal-600"
                                            }`}
                                    >
                                        {item.school}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
