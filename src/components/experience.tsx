'use client'

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import Icon from "./icon";

export default function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div id="experience" className="m-2 p-2">
            <p className='flex w-full m-2 p-4 text-2xl md:text-3xl font-semibold text-indigo-950'>Experience and Education</p>
            <div ref={ref} className="w-[75%] mx-auto relative m-8 p-4">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[3px] h-full bg-black origin-top" />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Content />
                    <Content />
                    <Content />
                </ul>
            </div>
        </div>
    )
}

const Content = () => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <Icon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <p className="capitalize font-bold text-2xl">Associate <span className="text-indigo-600">@Cognizant</span></p>
                <span className="capitalize font-medium text-dark\75">
                    time | address
                </span>
                <p className="font-medium w-full">
                    work description
                </p>
            </motion.div>
        </li>
    )
}
