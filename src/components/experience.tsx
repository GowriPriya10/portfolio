'use client'

import { motion, useScroll } from "framer-motion"
import { useRef } from "react";
import { workDetails, eduDetails } from "@/lib/constants";
import parse from "html-react-parser";

type workDetailsProps = {
    role: string;
    company: string;
    timeline: string;
    place: string;
    desc: {
        project: string;
        summary: Array<string>
    }
}

type eduDetailsProps = {
    major: string;
    institution: string;
    timeline: string;
    place: string;
    desc: string;
}

export default function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div id="experience" className="m-2 p-2 relative">
            <p className='flex justify-center w-full m-2 p-4 text-2xl md:text-3xl font-semibold text-indigo-950'>Experience and Education</p>
            <div ref={ref} className="sm:w-[75%] mx-auto relative m-2 p-4">
                <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-0 w-[3px] h-full bg-black origin-top" />
                    <ul className="sm:w-full flex flex-col items-start justify-between ml-4">
                        {workDetails.map((detail : workDetailsProps, id: number) => {
                            return <WorkContent key={id} id={id} details={detail}/>
                        })}
                        {eduDetails.map((detail : eduDetailsProps, id: number) => {
                            return <EducationContent key={id} id={id} details={detail} />
                        })}
                    </ul>
            </div>
        </div>
    )
}

const Icon = ({ reference }: any) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"],
            layoutEffect: false
        }
    )
    return (
        <figure className="absolute left-0 stroke-black">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-indigo-600 stroke-1 fill-none" />
                <motion.circle
                    cx="75"
                    cy="50"
                    r="20"
                    className="stroke-[5px] fill-white"
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
                <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-indigo-600" />
            </svg>
        </figure>
    )
}

const WorkContent = ({details, id} : any) => {
    const ref = useRef(null);

    return (
        <li key={id} ref={ref} className="my-8 first:mt-0 w-[100%] ml-8 sm:ml-auto sm:w-[60%] mx-auto flex flex-col">
            <Icon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <p className="capitalize font-bold text-2xl"> {details.role} <span className="text-indigo-600">@{details.company}</span></p>
                <span className="capitalize text-sm font-medium text-slate-400 leading-4">
                    {details.timeline} | {details.place}
                </span>
                <div className="font-medium w-full">
                    <p className="leading-8 text-lg text-slate-800">Project: <span className="leading-8 text-base text-slate-800">{details.desc.project}</span></p>
                    <ul className="list-disc">
                        {details.desc.summary.map((point: any, id: number) => {
                            return <li key={id} className="m-2">{parse(point)}</li>
                        })}
                    </ul>
                </div>
            </motion.div>
        </li>
    )
}

const EducationContent = ({details, id} : any) => {
    const ref = useRef(null);

    return (
        <li key={id} ref={ref} className="my-8 first:mt-0 w-[100%] ml-8 sm:ml-auto sm:w-[60%] mx-auto flex flex-col">
            <Icon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <p className="capitalize font-bold text-2xl"> {details.major} <span className="text-indigo-600">@{details.institution}</span></p>
                <span className="capitalize text-sm font-medium text-slate-400 leading-4">
                    {details.timeline} | {details.place}
                </span>
                <div className="font-medium w-full">
                    {details.desc}
                </div>
            </motion.div>
        </li>
    )
}
