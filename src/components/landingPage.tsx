import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div id="home" className="flex flex-row m-8">
            <div className="sm:w-6/12 m-8 p-8">
                <p>Hello 👋,</p>
                <p>I’m GowriPriya</p>
                <p>And I’m a (Front-End Developer, Full Stack Developer)</p>
                <div className="flex flex-row gap-3 m-2 p-2">
                    <Link href="https://github.com/GowriPriya10" target="_blank">
                        <Image src="github.svg" width={50} height={50} alt="github icon" className="bg-black border-2 border-solid border-black rounded-full cursor-pointer"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/gowripriya-eppa/" target="_blank">
                        <Image src="linkedin.svg" width={50} height={50} alt="linkedin icon" className="bg-black border-2 border-solid border-black rounded-full cursor-pointer"/>
                    </Link>
                    <Link href="mailto:eppa.gowripriya@gmail.com" target="_blank">
                        <Image src="mail.svg" width={50} height={50} alt="mail icon" className="bg-black border-2 border-solid border-black rounded-full cursor-pointer"/>
                    </Link>
                </div>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        <Link href="Gowripriya_Eppa_Resume.pdf" download>Download Resume</Link>
                    </span>
                </button>
            </div>
            <div className="hidden sm:block w-6/12">
                <Image src="/landing_img.jpg" alt="image" width={0} height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }} priority/>
            </div>
        </div>
    )
}