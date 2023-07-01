"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

const ViewportMotionDiv = ({ children }: { children: ReactNode }) => (
    <motion.div className="w-full max-md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 1.4, delay: 0.2 }}
                viewport={{ once: true, amount: 0.6 }}>
        {children}
    </motion.div>
)
export default function Questions() {
    return (
        <section className="w-full grid-rows-4 md:grid grid-cols-2 md:grid-rows-2 gap-24 md:p-8">
            <ViewportMotionDiv>
                <h3 className="text-2xl font-medium mb-4">What solutions do we provide?</h3>
                <p>Our ingenious team develops innovative architectural solutions tailored to your complex challenges. We specialize in designing efficient and dynamic systems for all industries.</p>
            </ViewportMotionDiv>
            <ViewportMotionDiv>
                <h3 className="text-2xl font-medium mb-4">Why should you choose us?</h3>
                <p>We believe that architectural solutions should be exciting and transformative. Our passionate team is dedicated to exceeding expectations, providing you with world-class results.</p>
            </ViewportMotionDiv>
            <ViewportMotionDiv>
                <h3 className="text-2xl font-medium mb-4">Are our services tailored?</h3>
                <p>Absolutely! We work closely with you to understand your unique needs and develop customized strategies to optimize your architectural infrastructure.</p>
            </ViewportMotionDiv>
            <ViewportMotionDiv>
                <h3 className="text-2xl font-medium mb-4">How to start working with us?</h3>
                <p>Simply get in touch with our fantastic team by filling in the contact form below, and we’ll get in get back to you as soon as possible.</p>
            </ViewportMotionDiv>
        </section>
    )
}
