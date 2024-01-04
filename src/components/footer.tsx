import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full relative" id="contact">
            <img
                    src="/footer.svg"
                    alt="Footer"
                    className="w-full"
                    loading="lazy"
                    height="auto"
                    role="presentation"
                />
            <div className="absolute w-full h-full flex justify-center items-center top-0">   
                <p className='pt-8 sm:pt-20 md:pt-36 lg:pt-44'>Built with <span className="text-2xl" style={{color: '#b63e96'}}>♡</span> by Gowri</p>
            </div>
            <div className="absolute top-0 m-6 lg:m-20 translate-y-2 sm:translate-y-8">
                <div className='flex items-center w-12 h-12 sm:w-20 sm:h-20 bg-black text-xs sm:text-xl text-white shadow-md border-solid border-dark rounded-full font-semibold hover:bg-white hover:text-black'>
                    <Link href="mailto:eppa.gowripriya@gmail.com">Hire Me</Link>
                </div>
            </div>
        </footer>
    );
}
