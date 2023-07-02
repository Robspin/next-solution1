"use client"
import { motion } from "framer-motion"

const UpArrow = ({ ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
    </svg>
)

const variants = {
    rest: {
        y: 0,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeInOut"
        }
    },
    hover: {
        y: -2,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeInOut"
        }
    }
}

export default function BackToTopButton() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <div className="w-full flex justify-center mb-10">
            <motion.button initial="rest" whileHover="hover" animate="rest" onClick={scrollToTop} className=" rounded border border-gray-500 flex justify-center items-center px-4 py-2">
                <motion.div variants={variants}>
                    <UpArrow className="mr-2 w-4 h-4" />
                </motion.div>
                Back to top
            </motion.button>
        </div>
    )
}