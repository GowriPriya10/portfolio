import Image from "next/image";
import Link from "next/link";
import { SocialLinks, roles } from "@/lib/constants";
import { ReactNode } from "react";
import TypeWriter from "./Typewriter";

type SocialLinkConfig = {
    name: string,
    href: string,
    src: string,
    width: number,
    height: number
}

export default function LandingPage() {
    return (
        <div id="home" className="flex flex-row items-center m-8">
            <div className="flex flex-col sm:w-6/12 m-2 sm:m-8 sm:p-8">
                <div className="text-l sm:text-xl leading-8 sm:p-2">
                    <p>Hello 👋,</p>
                    <p>I’m GowriPriya</p>
                    <p>And I’m a <TypeWriter strings={roles} delay={300} pause={2000} loop={true} /></p>
                </div>
                <div className="flex flex-row items-center gap-3 p-2">
                    {SocialLinks.map((link: SocialLinkConfig, id: number): ReactNode =>
                        <Link href={link.href} target="_blank" key={id}>
                            <Image src={link.src} width={link.width} height={link.height} alt={`${link.name} icon`} className="bg-black border-2 border-solid border-black rounded-full cursor-pointer hover:animate-bounce" />
                        </Link>
                    )}
                    <Link href="Gowripriya_Eppa_Resume.pdf" target="_blank" download>
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                Download Resume
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="hidden sm:block w-6/12">
                <Image src="/landing_img.jpg" alt="image" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} priority />
            </div>
        </div>
    )
}
