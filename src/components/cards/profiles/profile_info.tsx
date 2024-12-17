import { SITE_METADATA } from '@/data/site_metadata'
import { Mail, MapPin, BookOpenText, University } from 'lucide-react'
import '@/styles/profiles/profile_info.scss'


export function ProfileCardInfo() {
    return (
        <div className="hidden py-4 md:block md:px-5">
            <h3 className="text-xl font-bold text-white">Hogan Pham</h3>
            <h5 className="py-2 text-gray-400">Machine Learning Enthusiast</h5>

            <div className="mb-2 mt-4 space-y-4">


                <div className="flex items-center text-gray-200">
                    <BookOpenText color='#03FFF7' strokeWidth={1.5} size={20} />
                    <p className="flex items-center px-2">
                        Master student
                    </p>
                </div>

                <div className="flex items-center text-gray-200 ">
                    <University color='#03FFF7' strokeWidth={1.5} size={20} />
                    <p className="flex items-center px-2">
                        <a
                            target="_blank"
                            href="https://www.uef.fi/en"
                            rel="noreferrer"
                            className="info-link"
                        >
                            University of Eastern Finland
                        </a>
                    </p>
                </div>

                <div className="flex items-center text-gray-200 ">
                    <MapPin color='#03FFF7' strokeWidth={1.5} size={20} />
                    <p className="flex items-center px-2">
                        {SITE_METADATA.address}
                    </p>
                </div>


                <div className="flex items-center text-gray-200 ">
                    <Mail color='#03FFF7' strokeWidth={1.5} size={20} />
                    <p className="flex items-center px-2">
                        <a className="info-link" href={`mailto:${SITE_METADATA.email}`}>
                            {SITE_METADATA.email}
                        </a>
                    </p>
                </div>

            </div>
        </div >
    )
}