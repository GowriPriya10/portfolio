export default function Footer() {
    return (
        <footer className="w-full relative">
            {/* <img
                    src="/footer.svg"
                    alt="Footer"
                    className="w-full"
                    loading="lazy"
                    height="auto"
                    role="presentation"
                /> */}
            <div className="absolute w-full h-full flex justify-center items-center top-0">   
                <p className='pt-8 sm:pt-20 md:pt-36 lg:pt-44'>Built with <span className="text-2xl" style={{color: '#b63e96'}}>♡</span> by Gowri</p>
            </div>
        </footer>
    );
}
