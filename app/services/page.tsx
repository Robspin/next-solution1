"use client"
import { ReactNode } from 'react'
import { motion } from "framer-motion"
import PageContainer from "@/components/layout/page-container"
import Link from 'next/link'


const Service = ({ title, children }: { title: string, children: ReactNode }) => (
    <Link href="/contact" className="w-full p-4 md:p-8 border dark:border-gray-600 rounded hover:-translate-y-1 transition cursor-pointer">
        <h3 className="text-2xl font-semibold tracking-tight mb-4">
            {title}
        </h3>
        <p>
            {children}
        </p>
    </Link>
)

export default function Services() {
    return (
        <PageContainer>
            <motion.section className="w-full max-md:mb-20 min-h-screen flex flex-col md:p-4 overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 1.4, delay: 0.2 }}>
                <div className="md:max-w-lg mt-32 mb-16">
                    <h3 className="text-2xl font-medium mb-6">Services</h3>
                    <p>
                        We offer a wide variety of software solutions.
                        To make it more specific we listed a few general services below.
                    </p>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
                    <Service title="Building your website">
                        Wether it is a webshop, a simple product page or perhaps something different.
                        We have got you covered.
                    </Service>
                    <Service title="Building your app">
                        We have experience in all phases of app development. From conception to launch.
                    </Service>
                    <Service title="Custom backend solutions">
                        We are accustomed with creating custom micro-architecture solutions.
                        Let us know what you need.
                    </Service>
                </div>
            </motion.section>
        </PageContainer>
    )
}