"use client";
import React, { useEffect, useState } from 'react'

const AnnouncementBar = () => {
    return (
        <div className='w-full bg-black py-2'>
            <div className='container mx-auto flex items-center justify-center px-8'>
                <span className='text-center text-sm font-medium tracking-wide text-white'>
                    FREE SHIPPING ON ORDERS OVER $15.00 X FREE RETURNS
                </span>
            </div>
        </div>
    )
}

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [prevScollY, setPrevScollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScollY = window.scrollY;
            const scrolledUp = currentScollY < prevScollY;

            if(scrolledUp){
                setIsOpen(true);
            } else if (currentScollY > 100){
                setIsOpen(false);
            }

            setPrevScollY(currentScollY);
        }

        setPrevScollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

  return (
    <header className='w-full sticky top-0 z-50'>
        <div className='w-full transform transition-transform duration-300 ease-in-out'>
            <AnnouncementBar />
        </div>
    </header>
  )
}

export default Header