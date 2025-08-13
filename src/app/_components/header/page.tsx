import Link from 'next/link'
import Image from 'next/image'

interface NavItem {
  id: string
  name: string
  href: string
}

const navList: NavItem[] = [
  {
    id: '1',
    name: '我的应用',
    href: '/application',
  },
  {
    id: '2',
    name: '博客',
    href: '/blog',
  },
  {
    id: '3',
    name: '关于我',
    href: '/about',
  },
]

export default function Header() {
  return (
    <header className="flex justify-around h-[80px] items-center border-b-[1px] border-t-[1px] border-[#8b8b8b33] bg-white">
      <section>
        {/* <Image src={Logo} alt="logo" width={100} height={100} /> */}
        <Link href="/">logo</Link>
      </section>
      {/* 导航 */}
      <nav className="flex  w-[600px] justify-between h-[100%]">
        {navList.map((nav) => {
          return (
            <Link href={nav.href} key={nav.id}>
              <section className="w-[100px] h-[100%] hover:bg-[#1890ff] flex items-center justify-center hover:cursor-pointer">
                {nav.name}
              </section>
            </Link>
          )
        })}
      </nav>

      <section>头像</section>
    </header>
  )
}
