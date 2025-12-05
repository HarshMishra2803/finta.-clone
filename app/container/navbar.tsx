import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navbar = () => {

    const link = [{
        href:"/guide",
        title:"guide"
    },
    {
        href:"/pricing",
        title:"pricing"
    },
    {
        href:"/login",
        title:"login"
    }
];
  return (
    <div className="flex items-center justify-between">
        <Link href="/"><Image draggable={false} loading="lazy" src="finta-logo-light.svg" height={65} width={65} alt="finta-logo" /></Link>
        <div className='flex items-center gap-6'>
            {link.map((link,i)=>(
                <Link href={link.href} key={i}

                className='text-black font-medium hover:text-neutral-600 transition duration-200'
                
                >{link.title}</Link>
            ))}

            <button className='bg-[#2579F4] text-white px-6 py-2 rounded-2xl shadow-lg text-shadow-md tracking-wide font-medium '>start free trial</button>
        </div>
    </div>
  )
}

export default navbar
