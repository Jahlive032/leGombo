"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Image from 'next/image';
import { motion } from 'framer-motion';
import carteBancaire from "@/public/carte.png"
import phone1 from '@/assets/eGoTransfer1 (1).webp'
import legombophone from '@/public/691shots_so.png'

const PhoneCardAnimation: React.FC = () => {

    const [scrollY, setScrollY] = useState(0);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [isHidden, setIsHidden] = useState(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 820) {
        setIsHidden(true);
        setScrollY(820);  // Limite le scroll à 820px
      } else {
        setIsHidden(false);
        setScrollY(currentScrollY);
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const cardSpring = useSpring({
      transform: `translateY(${scrollY}px) scale(${1 - scrollY / 3000}) rotate(${scrollY / 10}deg)`,
    });

    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Image
              src={legombophone}
              width={300}
              className='max-sm:-mt-20 -mt-28'
              alt='egoTransfer phone'
            />
            <motion.div className='-z-10 '>
              <animated.div
                ref={cardRef}
                style={{
                  position: 'absolute',
                  width: '320px',
                  height: '100px',
                  backgroundColor: 'none',
                  top: '0px',
                  ...cardSpring,
                }}
                className="lg:left-[0px] -right-0 max-sm:w-[80px]"
              >
                <Image
                  src={carteBancaire}
                  alt=''
                  width={700}
                  height={700}
                  style={{ display: isHidden ? "none" : ""}}
                  className='-z-10 absolute'
                />
              </animated.div>
            </motion.div>
            <p style={{ color: 'white', textAlign: 'center', lineHeight: '100px' }}></p>
          </div>
        </div>
      </div>
    );
};

export default PhoneCardAnimation;
