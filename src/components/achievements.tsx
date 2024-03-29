import { AchievementsConfig } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

type achievementProps = {
    title: string,
    src: string
}

export default function Achievements() {
    return (
        <div id="achievements" className="m-2 p-2">
            <p className='flex justify-center w-full m-2 p-4 text-2xl md:text-3xl font-semibold text-indigo-950'>Achievements</p>
            <div className="flex flex-wrap m-2 p-4 justify-center">
                {AchievementsConfig.map((achievement: achievementProps, id: number): ReactNode => {
                    return <div key={id} className="max-w-sm rounded overflow-hidden border-2 shadow-lg bg-white hover:scale-125 m-4 p-4">
                        <Image width={400} height={200} style={{width: "auto", height: "auto"}} className="w-full h-48 object-contain" src={achievement.src} alt="Card Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-l mb-2">{achievement.title}</div>
                            <div className="w-full flex justify-end text-sm underline decoration-solid text-orange-900">
                                <Link href={achievement.src} target="_blank">View Award</Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
