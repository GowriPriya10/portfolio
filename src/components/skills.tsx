import Image from "next/image";
import { SkillSectionConfig } from '@/lib/constants';
import { ReactNode } from "react";

export default function Skills() {
    return (
        <div id="skills" className="m-2 p-2">
            <p className='flex justify-center w-full m-2 p-4 text-2xl md:text-3xl font-semibold text-indigo-950'>Skills</p>
            <div className="flex gap-5 sm:gap-12 m-2 p-4 flex-wrap">
                {SkillSectionConfig.map((skillSection, id): ReactNode => {
                    return (
                        <div key={id}>
                            <p className="text-xl p-3 m-2 font-semibold">{skillSection.section}</p>
                            <div className="flex flex-wrap gap-12 overflow-hidden m-2 p-2">
                                {skillSection.skills.map((skill, id): ReactNode => {
                                    return (
                                        <div key={id} className="flex flex-col items-center gap-2">
                                            <Image
                                                src={skill.src}
                                                alt={`${skill.name} icon`}
                                                width={80}
                                                height={80}
                                                title={skill.title}
                                                className="hover:scale-110"
                                            />
                                            <span className="text-sm text-slate-500 font-semibold">{skill.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
