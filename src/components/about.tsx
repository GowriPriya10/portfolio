import Image from 'next/image';
import { aboutMe } from '@/lib/constants';
import WhyMe from './whyMe';

export default function About() {
    
    return (
        <div id="about" className='m-2 p-2'>
            <p className='flex justify-center w-full md:p-4 text-2xl md:text-3xl font-semibold text-indigo-950'>About Me</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-2 p-4">
                <div className="order-first md:order-none">
                    <Image src="/about.png" alt="image" width={500} height={500} style={{width: "auto", height: "auto"}}/>
                </div>
                <div className="flex flex-col p-2">
                    <div className="mb-6">{aboutMe}</div>
                    <WhyMe />
                </div>
            </div>
        </div>
    )
}
