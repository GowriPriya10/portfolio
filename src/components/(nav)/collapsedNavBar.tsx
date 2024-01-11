import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type props = {
    visible: boolean;
    links: string[];
    setNavVisible: Dispatch<SetStateAction<boolean>>;
    scrollToSection: any;
}

export default function CollapsedNav({ visible, links, setNavVisible, scrollToSection } : props) {

    return (
        visible && 
        <div className="fixed left-0 w-full h-full overflow-hidden flex items-center justify-center bg-white">
            <div className="flex-none overflow-hidden flex items-center justify-center">
                <div className="text-center overflow-y-auto flex flex-col gap-3 justify-center items-center max-h-screen block">
                    {links.map((link: string, id: number) => {
                        return <Link href={`#${link.toLowerCase()}`} onClick={(e) => {scrollToSection(e); setNavVisible(false)}} key={id} className="font-bold text-2xl text-indigo-950">
                            {link}
                        </Link>;
                    })}
                </div>
            </div>
        </div>
    )
}
