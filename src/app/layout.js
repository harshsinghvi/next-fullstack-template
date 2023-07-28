import NextAuthProvider from '@/components/CSRComponents/NextAuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'next-fullstack-template',
  description: 'Template for building Full-stack application using shardcn/ui, next-auth, next js 13',
}

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en" className='dark'>
        <body className={inter.className}>{children}</body>
      </html>
    </NextAuthProvider>
  )
}
