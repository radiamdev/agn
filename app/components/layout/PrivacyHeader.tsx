'use client'

import { useState } from "react"
import Container from "../common/Container"
import Logo from "../icons/Logo"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Menu from "../display/Menu"
import { privacyHeaderData } from "@/data.global"

function PrivacyHeader() {
  const [isClicked, setIsClicked] = useState(false)
  const pathname = usePathname()

  if (pathname === '/' ||
    pathname === '/service' ||
    pathname === '/about' ||
    pathname === '/telechargement' ||
    pathname === '/question') return

  return (
    <div className="w-screen  bg-primary fixed top-0 left-0 z-50">
      <Container tag="header" className="flex items-center justify-between relative " >
        <div>
          <Logo className="w-[90px] h-auto md:w-[150px] relative z-10 " />
        </div>
        <ul
          className={`flex items-center justify-center gap-5 lg:gap-3 text-white absolute lg:static top-0  h-screen lg:h-fit w-screen lg:w-fit bg-primary flex-col lg:flex-row  ${isClicked ? 'right-0' : '-right-full'} transition-all duration-300  md:text-2xl lg:text-base `}
        >
          {
            privacyHeaderData.map((link, index) => (
              <li key={index} className="inline-block mx-4">
                <Link href={link.url} onClick={(() => setIsClicked(false))} className={`hover:text-secondary transition-colors duration-300 ${pathname === link.url ? 'text-secondary' : 'text-white'} `} >
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
        <Menu isClicked={isClicked} onClick={() => setIsClicked(!isClicked)} />
      </Container>
    </div>
  )
}

export default PrivacyHeader