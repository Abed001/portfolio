import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'my website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

<body>
  {/*<div style={{ height: '100px' }} className='flex justify-start items-end'>
    <div className='ml-auto lg:ml-0'>
      <Link href="/" className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'>
        Abed
      </Link>
    </div>
  </div>*/}
  <main className={inter.className}>{children}</main>
</body>
    </html>
  )
}
