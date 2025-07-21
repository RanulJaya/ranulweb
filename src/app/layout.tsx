'use client'
// import './globals.css'
import { useEffect, useState } from 'react';
import Image from "next/image";
import style from './user.module.css'


export default function RootLayout(
  
{
  children,
}: {
  children: React.ReactNode
}) {

  const [showVisible, setVisible] = useState(false)

  useEffect(() => {
    const timeOut = setTimeout(() => {
        setVisible(true)
        clearTimeout(timeOut)
      }, 2000);

  })

  return (
    <html lang="en">
      <body>
        {showVisible === false ? <Image className= {style.img}
                  src="./infinite-spinner.svg"
                  alt="Next.js logo"
                  width={680}
                  height={600}
                unoptimized />: 
                 children}
      </body>
    </html>
  )
}

