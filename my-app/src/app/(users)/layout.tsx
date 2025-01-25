'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import './styles.css'

const navLinks = [
    {name:'Profile', href:'/profile'},
    {name:'Config', href:'/config'},
    {name:'Info', href:'/info'},
]

export default function UsersLayout({children}: {children: React.ReactNode}){
    const pathName = usePathname()
    return(
        <div>
            {navLinks.map((link) => {

                const isActive = pathName.startsWith(link.href)

                return(
                    <Link
                        className={`${isActive ? 'text-red-900' : 'text-blue-900'}`}
                        key={link.href} 
                        href={link.href}> {link.name}
                    </Link>
                )

            })}
            {children}
        </div>
    )
}