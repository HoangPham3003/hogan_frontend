import { SITE_METADATA } from '@/data/site_metadata'

const Activity: React.FC = () => {
    return (
        <section id='activity' className="mt-36 px-8 md:px-24">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    ACTIVITY
                </h2>
                <div className="w-1/2 h-[2px] bg-[#03FFF7] mx-auto mb-10"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center p-8 rounded-lg shadow-lg">
                {/* Left Part - Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src={SITE_METADATA.siteVeoCert}
                        alt="Certificate"
                        className="w-full h-auto max-w-sm object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Right Part - Story Text */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
                    <h2 className="text-2xl font-bold mb-6 text-[#03FFF7]">My Volunteer Journey</h2>
                    <p className="text-gray-500 leading-relaxed mb-5">
                        Volunteering has been a passion of mine since high school. My journey began in <span className='text-[#03FFF7]'>2015 </span>
                        when I joined the Bare Foot Friends (BFF) volunteer group. Together with my fellow
                        members, we shared many meaningful experiences, from organizing fundraising sales to
                        visiting orphanages and centers for disabled children. Although our gifts were modest,
                        the joy and warmth we exchanged made every visit deeply rewarding.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-5">
                        In <span className='text-[#03FFF7]'>2017 </span>, I took my first trip to a nursing home, where elderly residents with serious
                        illnesses relied on social care services. The experience left a lasting impression on
                        me and strengthened my desire to contribute more.
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-5">
                        In <span className='text-[#03FFF7]'>2019 </span>, I joined Volunteer for Education Organization (VEO), a well-established organization dedicated
                        to providing educational support for children in remote areas lacking proper learning conditions.
                        Through this program, I enhanced my skills by preparing lesson plans and educational materials, ensuring that the children gained essential knowledge about the modern world.
                    </p>

                    <p className="text-gray-500 leading-relaxed">
                        Although my busy study and work schedule now limits my ability to participate in volunteer trips, I continue contributing by donating blood every year. I believe that if everyone takes part in volunteering, we can build a happier, more compassionate world together.
                    </p>

                </div>
            </div>
        </section >
    );
};

export default Activity;
