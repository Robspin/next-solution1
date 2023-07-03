'use client'
import { ReactNode } from "react"
import { atom, PrimitiveAtom, useAtom } from "jotai"

export const themeAtom = atom('dark')
export default function({ children }: { children: ReactNode }){
    const [theme] = useAtom(themeAtom)

    return (
        <div className={`${theme}`}>
            <div className="dark:bg-gray-950 dark:text-white transition-colors">
                {children}
            </div>
        </div>
    )
}