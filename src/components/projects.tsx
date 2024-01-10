import { projects } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"

type projectProps = {
    name: string,
    techStack: string,
    desc?: string,
    github: string,
    demo?: string,
    image: string
}

export default function Projects() {
    return (
        <div id="projects" className="m-2 p-2">
            <p className='flex justify-center w-full m-2 p-4 text-2xl md:text-3xl font-semibold text-indigo-950'>Projects</p>
            <div className="w-full flex flex-col items-center justify-center">
                {
                    projects.map((project: projectProps, id: number) => {
                        return (
                            <div key={id} className="w-[100%] md:w-[75%] grid grid-cols-1 lg:grid-cols-2 md:gap-8 m-2 p-2 md:p-4 mb-8 rounded-[2.5rem] rounded-br-3xl border-black border-solid border-2 shadow-lg">
                                <div className="order-first lg:order-none flex justify-center">
                                    <Image src={project.image} alt="img" width={500} height={500} className="rounded-[1.5rem] hover:scale-105 cursor-pointer" style={{ width: "auto", height: "auto" }} />
                                </div>
                                <div className="m-2 p-2">
                                    <div className="my-2 text-2xl font-bold">
                                        {project.name}
                                    </div>
                                    <div>
                                        <p className="my-2 font-semibold text-slate-600">Tech Stack: <span className="text-base text-slate-700">{project.techStack}</span></p>
                                    </div>
                                    {
                                        project.desc &&
                                        <div className="my-2">
                                            {project.desc}
                                        </div>
                                    }
                                    <div className="mt-8 flex gap-4 justify-end">
                                        <div className="cursor-pointer bg-black border-2 border-solid border-black rounded-full hover:scale-105">
                                            <Link href={project.github}>
                                                <Image src="/socialIcons/github.svg" width={50} height={50} alt="github link" />
                                            </Link>
                                        </div>
                                        {
                                            project.demo &&
                                            <div className="cursor-pointer text-lg flex items-end underline decoration-solid hover:scale-105">
                                                <Link href={project.demo}>View Demo</Link>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}