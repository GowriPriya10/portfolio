import Link from "next/link";
import Image from "next/image";

import { certificates } from "@/lib/constants";
import { ReactNode } from "react";

type certProps = {
    title: string,
    desc?: string,
    link: string
}

export default function Certifications() {
    return (
        <div id="certifications" className="m-2 p-2">
            <p className='flex w-full m-2 p-4 text-2xl md:text-3xl font-semibold text-indigo-950'>Certifications</p>
            <div className="flex flex-wrap justify-center">
                {certificates.map((cert: certProps, id): ReactNode => {
                    return (
                        <div key={id} className="w-2/3 m-4 p-4 flex flex-wrap sm:flex-row gap-4 justify-center sm:justify-between items-center rounded overflow-hidden border-b-2 shadow-l">
                            <div className="flex p-4 gap-4">
                                <Image src="/certs/certificate.svg" alt="icon" width={50} height={50} />
                                <div className="flex flex-col">
                                    <div className="text-xl">{cert.title}</div>
                                    {cert.desc && <div className="text-sm text-slate-400">{cert.desc}</div>}
                                </div>
                            </div>
                            <div>
                                <Link href={cert.link} target="_blank">View Certification</Link>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
