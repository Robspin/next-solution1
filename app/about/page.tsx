"use client"
import { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import PageContainer from "@/components/layout/page-container"

const Avatar = ({ url, alt }: { url: string, alt: string}) => {
    return (
        <div className="relative overflow-hidden rounded w-40 h-40 mb-6">
            <Image src={url} alt={alt} fill={true} className="object-cover grayscale-[50%]" />
        </div>
    )
}

const Profile = ({ children, name, titles }: { children: ReactNode, name: string, titles: string[] }) => (
    <div className="w-full p-4 md:p-8 border dark:border-gray-600 rounded">
        <div className="flex">
            <Avatar url={`/assets/${name.split(' ')[0].toLowerCase()}.png`} alt={name} />
            <div className="mb-2 text-xl md:text-2xl">
                <h3 className="ml-6 italic">
                    {name}
                </h3>
                {titles.map((title, i) => (
                    <h4 className="text-base mt-1 ml-8 text-gray-500 italic" key={i}>
                        {title}
                    </h4>
                ))}
            </div>
        </div>
        {children}
    </div>
)

export default function About() {
    return (
        <PageContainer>
            <motion.section className="w-full flex flex-col justify-center md:p-4 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 1.4, delay: 0.2 }}>
                <div className="md:max-w-lg mt-32 mb-16">
                    <h3 className="text-2xl font-medium mb-6">About</h3>
                    <p>
                        Solution 1 was created after two developers realised they were a great team.
                        After working at a company for 2 years they decided to open up shop and share their skills with the world.
                    </p>
                </div>
                <br/>
                <div className="grid md:grid-cols-2 gap-12 mb-8">
                    <Profile name="Joeri Abbo" titles={['DevOps', 'Backend Developer']}>
                        <p>
                            Meet Joeri, with an work ethic that comes close to that of Elon Musk, he is always working,
                            tinkering and finding out new ways to optimize software. Experienced in Backend & DevOps he knows the
                            service or architecture you need for your situation.
                        </p>
                    </Profile>
                    <Profile name="Robin Steeman" titles={['Frontend Developer', 'UX/UI Designer']}>
                        <p>
                            Meet Robin, an car mechanic turned frontend developer. His calm personality is polar opposite of
                            Joeri. Quite the javascript fanboy, he likes play around with 3d libraries. Robin will take the time
                            to think of the best UI/UX solution and then make it an reality.
                        </p>
                    </Profile>
                </div>
            </motion.section>
        </PageContainer>
    )
}