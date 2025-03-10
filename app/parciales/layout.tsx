import Header from '@/components/Header';
import React from 'react'

export default function layout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}
