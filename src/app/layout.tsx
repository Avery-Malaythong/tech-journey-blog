import './globals.css'
import type {Metadata} from 'next'
import {Rajdhani} from 'next/font/google'
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Rajdhani({ weight: '400', subsets: ['latin']})
const title = '...';
const description = 'This the Tech Journey template site';
const SocialLinks = {
  twitter: '#twitter',
  github: '#github',
  instagram: '#insta',
  email: 'mailto:your-email@gmail.com'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full'}>
      <body className={`${font.className} flex flex-col min-h-screen`}>
      <NavBarContainer title={title}>
        <main className={'flex-1 max-w-6xl py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
