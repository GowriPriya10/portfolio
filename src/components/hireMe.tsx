import Link from "next/link";

export default function HireMe() {
    return (
        <div className="fixed bottom-4 m-6 lg:m-20 translate-y-2 sm:translate-y-8">
            <div className='grid grid-flow-col place-content-center w-16 h-16 sm:w-20 sm:h-20 bg-black text-xs sm:text-l text-white shadow-md border-solid border-dark rounded-full font-semibold hover:bg-white hover:text-black cursor-pointer'>
                <Link href="mailto:eppa.gowripriya@gmail.com">Hire Me</Link>
            </div>
        </div>
    );
}
