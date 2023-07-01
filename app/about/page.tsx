"use client"
import { motion } from "framer-motion"
import PageContainer from "@/components/layout/page-container";

export default function About() {
    return (
        <PageContainer>
            <motion.section className="w-full h-screen flex flex-col justify-center relative p-4">
                <h3 className="text-2xl font-medium mb-8">Contact us</h3>
                <p>
                    Solution 1 consists of two developers who realised they worked very well together.
                </p>
                <br/>
                <p>
                    Meet Joeri, with an work ethic that comes close to that of Elon Musk, he is always working,
                    tinkering and finding out new ways to optimize software. Experienced in Backend & DevOps he knows the
                    service or architecture you need for your situation.
                </p>
                <br/>
                <p>
                    Meet Robin, an car mechanic turned frontend developer. His calm personality is polar opposite of
                    Joeri and he can be a voice of reason. A bit of a javascript fanboy and likes to dabble in 3d or svg animations.
                </p>
            </motion.section>
        </PageContainer>
    )
}