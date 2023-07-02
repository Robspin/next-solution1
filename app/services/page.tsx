"use client"
import { motion } from "framer-motion"
import PageContainer from "@/components/layout/page-container"


export default function Services() {
    return (
        <PageContainer>
            <motion.section className="w-full min-h-screen flex flex-col md:p-4 overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 1.4, delay: 0.2 }}>
                <div className="md:max-w-lg mt-32 mb-16">
                    <h3 className="text-2xl font-medium mb-6">Services</h3>
                    <p>
                        We offer a wide variety of IT software solutions.
                        To make it more specific we listed a few general services below.
                    </p>
                </div>
            </motion.section>
        </PageContainer>
    )
}