"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import check from "@/assets/check.svg";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Step {
  title: string;
  description: string;
  videoSrc: string;
}

interface PresentationStepsProps {
  steps: Step[];
}

const PresentationSteps: React.FC<PresentationStepsProps> = ({ steps }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [selectedStepIndex]);

  useEffect(() => {
    const video = videoRef.current;
    const updateProgress = () => {
      if (video) {
        const percentage = (video.currentTime / video.duration) * 100;
        setProgress(percentage);
      }
    };
  
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
      return () => {
        video.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [videoRef, setProgress]);

  return (
    <div className="flex flex-col md:flex-row gap-4 pb-10">
      <motion.div 
        className="flex flex-col gap-4 w-full md:w-1/2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
      >
        {steps.map((step, index) => (
          <PresentationStep
            key={index}
            title={step.title}
            description={step.description}
            isSelected={selectedStepIndex === index}
            progress={selectedStepIndex === index ? progress : 0}
            onClick={() => setSelectedStepIndex(index)}
          />
        ))}
      </motion.div>
      <div className="w-full md:w-1/2">
        <VideoPlayer videoSrc={steps[selectedStepIndex].videoSrc} videoRef={videoRef} />
      </div>
    </div>
  );
};

interface PresentationStepProps {
  title: string;
  description: string;
  isSelected: boolean;
  progress: number;
  onClick: () => void;
}

const PresentationStep: React.FC<PresentationStepProps> = ({ title, description, isSelected, progress, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`flex flex-col gap-2 p-4 border rounded cursor-pointer ${isSelected ? 'bg-[#f0f8ff]' : 'bg-white'} max-w-full md:max-w-md`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className='flex gap-2'>
        <Image
          src={check}
          alt='check image'
          width={20}
          height={20}
        />
        <h2 className="font-bold">{title}</h2>
      </div>
      {isSelected && (
        <div>
          <p>{description}</p>
          <div className="w-full h-1 bg-gray-200 rounded overflow-hidden">
            <div
              className="bg-teal-400 h-full"
              style={{ width: `${progress}%`, transition: 'width 0.2s ease' }}
            />
          </div>
        </div>
      )}
      {isSelected && (
        <div className="py-3 text-center md:text-left">
          {/* <Link href="https://ego-frontend-next.vercel.app/register"> */}
          <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
            Ouvrez un compte
          </Button>
          {/* </Link> */}
        </div>
      )}
    </motion.div>
  );
};

interface VideoPlayerProps {
  videoSrc: string;
  videoRef: React.RefObject<HTMLVideoElement>;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, videoRef }) => {
  return (
    <div className="relative w-full h-full border-2 border-gray-200 rounded-lg">
      <video ref={videoRef} className="block w-full rounded-lg" muted>
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas cette vidéo.
      </video>
    </div>
  );
};

export default PresentationSteps;
