import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

export const Card = ({ url, title, className }: { url: string, title?: string, className?: string }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        delay: 0.5,
        damping: 20
      }}
      className={clsx(className, 'w-20 h-auto border-[0.5px] backdrop-blur-sm bg-black/10 flex items-center')}
    >
      {/* Image Section */}
      <div className='w-20 h-20 relative flex items-center justify-center p-2'>
        <img src={url} alt={title}  className='w-20  object-contain rounded-full' />
      </div>

      {/* Text Section */}
      <div className=''>
        {title && <h2 className='text-lg font-semibold'>{title}</h2>}
        {/* {description && <p className='text-sm text-gray-500'>{description}</p>} */}
      </div>
    </motion.div>
  )
}
