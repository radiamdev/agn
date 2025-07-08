'use client'

import { headerLinkData } from '@/data.global'
import Container from '../common/Container'
import Link from 'next/link'
import Button from '../common/Button'
import Menu from '../display/Menu'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Image } from '@mantine/core'

function Header() {
  const [isClicked, setIsClicked] = useState(false)
  const pathname = usePathname()

  // This is a condition to render this components

  if (
    pathname === '/privacy-policy' ||
    pathname === '/cookie-policy' ||
    pathname === '/terms-of-use' ||
    pathname === '/ecommerce'
  ) return

  return (
    <div className="w-screen  bg-primary fixed top-0 left-0 z-50">
      <Container
        tag="header"
        className="flex items-center justify-between relative  py-3"
      >
        <div>
          <Image
            src="/image/logo.webp"
            alt="logo"
            className="!w-[90px] !h-auto md:!w-[150px] relative z-10 "
          />
        </div>
        <ul
          className={`flex items-center justify-center gap-5 lg:gap-3 text-white absolute lg:static top-0  h-screen lg:h-fit w-screen lg:w-fit bg-primary flex-col lg:flex-row  ${isClicked ? 'right-0' : '-right-full'
            } transition-all duration-300  md:text-2xl lg:text-base `}
        >
          {headerLinkData.map((link, index) => (
            <li key={index} className="inline-block mx-4">
              <Link
                href={link.url}
                onClick={() => setIsClicked(false)}
                className={`hover:text-secondary transition-colors duration-300 ${pathname === link.url
                  ? 'text-secondary'
                  : 'text-white'
                  } `}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <Link href={'/contact'}>
            {' '}
            <Button
              label="contactez nous"
              variant="ghost-primary"
            />
          </Link>
        </ul>
        <Menu
          isClicked={isClicked}
          onClick={() => setIsClicked(!isClicked)}
        />
      </Container>
    </div>
  )
}

export default Header
