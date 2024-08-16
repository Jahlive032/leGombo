import clsx from 'clsx'
import React from 'react'
import{motion} from 'framer-motion'

export const MiniCardHero = ({url, title, description,className}: {url: string, title?: string, description?: string, className?: string}) => {
  return (
    <motion.div
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{
      type: "spring",
      stiffness: 260,
      delay: 0.5,
      damping: 20
    }}
    className={clsx(className,'w-20 h-20 border-[0.5px] backdrop-blur-sm bg-black/10  p-4 flex flex-col items-center justify-center')}>
        <div className='w-full h-full relative p-2'>
            <img src={url} alt={title} className='w-full h-full object-contain rounded-full' />
        </div>
    </motion.div>
  )
}
