'use client'

import { useEffect, useState } from "react"

type props = {
    strings: Array<string>,
    delay?: number,
    loop?: boolean,
    pause?: number
}

export default function TypeWriter({strings, delay = 100, loop = false, pause = 0}: props) {

    const [currentStringId, setCurrentStringId] = useState(0);
    const [currText, setCurrText] = useState('');
    const [index, setIndex] = useState(0);
    const [reversing, setReversing] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

        if(reversing) {
            if(index > 0) {
                timer = setTimeout(() => {
                    setCurrText((prev) => prev.slice(0, -1));
                    setIndex((prev) => prev-1);
                }, delay);
            }else {
                setReversing(false);
                setCurrentStringId((prev) => (prev + 1)%strings.length);
            }
        }else {
            if(index < strings[currentStringId].length) {
                timer = setTimeout(() => {
                    setCurrText((prev) => prev+strings[currentStringId][index]);
                    setIndex((prev) => prev+1);
                }, delay);
            }else {
                if(pause) {
                    setTimeout(() => {
                        if(loop){
                            setReversing(true);
                        }
                    }, pause);
                }
            }
        }

        return () => clearTimeout(timer);
    }, [index, currText, reversing, currentStringId]);

    return (
        <span className="text-xl lg:text-3xl font-semibold bg-gradient-to-br from-purple-700/100 to-blue-700/100 text-transparent bg-clip-text">
            {currText}
            <span className="text-black animate-ping font-light">|</span>
        </span>
    )
}
