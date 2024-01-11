import Link from "next/link";

export default function HireMe() {
    return (
        <Link href="mailto:eppa.gowripriya@gmail.com" target="_blank">
            <div className="fixed bottom-4 m-6 lg:m-20 translate-y-2 sm:translate-y-8 z-10 hover:scale-125">
                <div className='grid grid-flow-col place-content-center w-16 h-16 sm:w-20 sm:h-20 bg-black text-xs sm:text-l text-white shadow-md border-solid border-dark rounded-full font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-[#224962] cursor-pointer'>
                    Hire Me
                </div>
            </div>
        </Link>
    );
}
