"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import check from "@/assets/check.svg";
import { Button } from '@/components/ui/button';

interface Step {
  title: string;
  description: string;
  imageSrc: string;
}

interface PresentationStepsProps {
  steps: Step[];
}

const StepByStep: React.FC<PresentationStepsProps> = ({ steps }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          const nextIndex = (selectedStepIndex + 1) % steps.length;
          setSelectedStepIndex(nextIndex);
          return 0;
        }
        return prevProgress + 25; // Update progress by 25% each second
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedStepIndex, steps.length]);

  return (
    <div className="presentation-steps-container flex max-h-screen">
      <motion.div
        className="steps-container flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
      <div className="image-container flex-1">
        <ImageDisplay imageSrc={steps[selectedStepIndex].imageSrc} />
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
      className={`step-item ${isSelected ? 'selected' : ''}`}
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
        <h2 className="step-title font-bold">{title}</h2>
      </div>
      
      
      {isSelected && (
        <div>
          <p>{description}</p>
          <div className="progress-bar">
          <motion.div
            className="progress"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>
        </div>
        
       
      )}
      {isSelected && (
        <div className="button-container">
          <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
            Ouvrez un compte
          </Button>
        </div>
      )}
    </motion.div>
  );
};

interface ImageDisplayProps {
  imageSrc: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageSrc }) => {
  return (
    <div className="image-wrapper ">
      <Image src={imageSrc} alt="presentation step image" layout='responsive' width={700} height={300} />
    </div>
  );
};

export default StepByStep;
