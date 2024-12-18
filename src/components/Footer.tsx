import { SITE_METADATA } from '@/data/site_metadata'


export function FooterBottom() {
    return (
        <footer>
            <div className="mt-16 mx-20 flex flex-col items-center border-t border-t-[#03FFF7] p-10">
                <div className="mb-2 flex space-x-2 text-sm text-gray-600">
                    <div>{SITE_METADATA.author}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                </div>
                <div>
                    <p className='text-gray-600'>"This is not the end, it's just the beginning."</p>
                </div>
            </div>
        </footer>
    )
}