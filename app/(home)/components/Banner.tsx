import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { Cloud, renderSimpleIcon } from 'react-icon-cloud'
import { siVisa, siMastercard, siNetflix, siFacebook, siPaypal, siGoogle, siShopify, siStripe, siTiktok, siAmazon, siAlibabacloud, siPlaystation, siGoogleplay } from 'simple-icons'

const icons = [ siVisa, siMastercard, siNetflix, siFacebook, siPaypal, siGoogle, siShopify, siStripe, siTiktok, siAmazon, siAlibabacloud, siPlaystation, siGoogleplay].map((icon) => {

  return renderSimpleIcon({
    icon,
    size: 60,
    aProps: {
      onClick: (e: any) => e.preventDefault()
    }
  })
})

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
    >
      <Cloud>
    {icons}
    <a
      href="https://emojipedia.org/globe-showing-americas/"
      target="_blank"
      rel="noopener"
    >
      <Image
        height={60}
        width={60}
        alt="A globe"
        src=""
      />
    </a>
  </Cloud>
    </motion.div>
  )
}