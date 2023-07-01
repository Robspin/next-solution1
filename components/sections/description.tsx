"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Lightning = ({ ...props }) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
)

const Sliders = ({ ...props }) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>

)

export default function Description() {
    return (
        <section className="w-full">
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 1.4, delay: 0.2 }}
                viewport={{ once: true, amount: 0.6 }}
                className="max-md:flex max-md:flex-col md:grid md:grid-cols-2 w-full gap-20 md:p-8">
                <div className="rounded h-[60vh] w-full relative overflow-hidden">
                    <Image src="/assets/description-1.jpg" alt="description" className="object-cover" fill={true} />
                </div>
                <div className="w-full h-full max-md:mt-8">
                    <div className="w-full h-full flex flex-col justify-center">
                        <div className="mb-4 text-tint-secondary dark:text-tint flex font-medium"><Lightning className="w-6 h-6 mr-2" /> FRESH</div>
                        <h3 className="text-3xl font-extrabold tracking-tight mb-4">We use the latest technologies</h3>
                        <p>We are not afraid to put new technologies to the test. Our passion is researching new ways to provide faster, robust and powerful solutions.</p>
                    </div>
                </div>
            </motion.div>
            <div className="w-full h-[20vh]" />
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 1.4, delay: 0.2 }}
                viewport={{ once: true, amount: 0.4 }}
                className="max-md:flex max-md:flex-col-reverse md:grid md:grid-cols-2 w-full gap-8 md:p-8">
                <div className="w-full h-full max-md:mt-8">
                    <div className="w-full h-full flex flex-col justify-center">
                        <div className="mb-4 text-tint-secondary dark:text-tint flex font-medium"><Sliders className="w-6 h-6 mr-2"/> CUSTOMIZED AND COLLABORATIVE</div>
                        <h3 className="text-3xl font-extrabold tracking-tight mb-4">One size doesn't fit all</h3>
                        <p>Our team at Solution 1 is adept at understanding your needs and tailoring solutions specifically for your use-case.
                        </p>
                    </div>
                </div>
                <div className="rounded h-[60vh] w-full relative overflow-hidden">
                    <Image src="/assets/description-2.jpg" alt="description" className="object-cover" fill={true} />
                </div>
            </motion.div>
        </section>
    )
}