import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type props = {
    visible: boolean;
    links: string[];
    setNavVisible: Dispatch<SetStateAction<boolean>>;
}

export default function CollapsedNav({ visible, links, setNavVisible } : props) {

    return (
        visible && 
        <div className="menu fixed left-0 w-full h-full overflow-hidden flex items-center justify-center bg-white opacity-75">
            <div className="flex-none overflow-hidden flex items-center justify-center">
                <div className="text-center overflow-y-auto flex flex-col gap-3 justify-center items-center max-h-screen block">
                    {links.map((link: string, id: number) => {
                        return <Link href={`#${link.toLowerCase()}`} onClick={() => {setNavVisible(false)}} key={id} className="font-bold text-2xl duration-300 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            {link}
                        </Link>;
                    })}
                </div>
            </div>
        </div>
    )
}
