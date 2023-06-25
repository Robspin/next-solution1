import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-screen flex justify-center absolute z-10">
            <div className="w-full flex justify-between items-center max-w-[1280px] px-8">
                <Link href="/" className="py-2">
                    <Image src="/assets/s1.svg" alt="Solution 1 logo" height={20} width={30} />
                </Link>
                <ul className={`flex gap-8`}>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><button>Contact</button></li>
                    <li><ThemeSwitch /></li>
                </ul>
            </div>
        </div>
    )
}