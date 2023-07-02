"use client"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
    route: string
}

const variants = {
    rest: {
        width: 0,
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    },
    hover: {
        width: '100%',
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
}
export default function LinkButton({ route }: Props) {
    return (
        <motion.li initial="rest" whileHover="hover" animate="rest">
            <Link aria-label={route} href={`/${route.toLowerCase()}`}>
                {route}
                <motion.div className="border-b-2 border-tint"
                    variants={variants}
                />
            </Link>
        </motion.li>
    )
}