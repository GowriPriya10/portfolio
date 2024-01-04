import Link from "next/link";
import { useEffect, useState } from "react";

type props = {
    links: string[];
}

export default function NavBar({ links }: props) {

    const [activeLink, setActiveLink] = useState('home');
    
    useEffect(() => {
        const handleScroll = () => {
            let current: any = '';

            links.forEach((link) => {
                const section = document.querySelector(`#${link.toLowerCase()}`) as HTMLElement;
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 60) {
                    current = section.id; 
                }
            })
            console.log(current);

            current ? setActiveLink(current) : setActiveLink('home');
        };

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div id="navbar-with-collapse" className="hidden basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                {links.map((link: string, id: number) => {
                    return <Link href={`#${link.toLowerCase()}`} key={id} className={`font-medium text-lg text-gray-600 cool-link ${activeLink === link.toLowerCase() ? 'border-b-2 border-indigo-500' : ''}`}>
                        {link}
                    </Link>
                })}
            </div>
        </div>
    )
}
