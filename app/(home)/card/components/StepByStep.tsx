// "use client"

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import check from "@/assets/check.svg";
// import { Button } from '@/components/ui/button';

// interface Step {
//   title: string;
//   description: string;
//   imageSrc: string;
// }

// interface PresentationStepsProps {
//   steps: Step[];
// }

// const StepByStep: React.FC<PresentationStepsProps> = ({ steps }) => {
//   const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 100) {
//           const nextIndex = (selectedStepIndex + 1) % steps.length;
//           setSelectedStepIndex(nextIndex);
//           return 0;
//         }
//         return prevProgress + 25; // Update progress by 25% each second
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [selectedStepIndex, steps.length]);

//   return (
//     <div className="presentation-steps-container flex max-h-screen">
//       <motion.div
//         className="steps-container flex-1"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {steps.map((step, index) => (
//           <PresentationStep
//             key={index}
//             title={step.title}
//             description={step.description}
//             isSelected={selectedStepIndex === index}
//             progress={selectedStepIndex === index ? progress : 0}
//             onClick={() => setSelectedStepIndex(index)}
//           />
//         ))}
//       </motion.div>
//       <div className="image-container flex-1">
//         <ImageDisplay imageSrc={steps[selectedStepIndex].imageSrc} />
//       </div>
//     </div>
//   );
  
// };

// interface PresentationStepProps {
//   title: string;
//   description: string;
//   isSelected: boolean;
//   progress: number;
//   onClick: () => void;
// }

// const PresentationStep: React.FC<PresentationStepProps> = ({ title, description, isSelected, progress, onClick }) => {
//   return (
//     <motion.div
//       onClick={onClick}
//       className={`step-item ${isSelected ? 'selected' : ''}`}
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className='flex gap-2'>
//         <Image
//           src={check}
//           alt='check image'
//           width={20}
//           height={20}
//         />
//         <h2 className="step-title font-bold">{title}</h2>
//       </div>
      
      
//       {isSelected && (
//         <div>
//           <p>{description}</p>
//           <div className="progress-bar">
//           <motion.div
//             className="progress"
//             initial={{ width: 0 }}
//             animate={{ width: `${progress}%` }}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//           />
//         </div>
//         </div>
        
       
//       )}
//       {isSelected && (
//         <div className="button-container">
//           <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
//             Ouvrez un compte
//           </Button>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// interface ImageDisplayProps {
//   imageSrc: string;
// }

// const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageSrc }) => {
//   return (
//     <div className="image-wrapper ">
//       <Image src={imageSrc} alt="presentation step image" layout='responsive' width={700} height={300} />
//     </div>
//   );
// };

// export default StepByStep;

"use client"

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import check from "@/assets/check.svg";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
  const gifRef = useRef<HTMLImageElement>(null);

  const [progress, setProgress] = useState(0);

  // Réinitialiser et démarrer la vidéo lorsque l'étape sélectionnée change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Recharger la vidéo
      videoRef.current.play(); // Démarrer la lecture de la vidéo sélectionnée
    }
  }, [selectedStepIndex]);

  // Mettre à jour la barre de progression en fonction du temps de lecture de la vidéo
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
    <div style={{ display: 'flex', flexDirection: 'row', gap: '4rem', paddingBottom: '10px' }}>
      {/* Conteneur des étapes */}
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}
        initial={{ opacity: 0, x: -20}}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
      >
        {steps.map((step, index) => (
          <PresentationStep
            key={index}
            title={step.title}
            description={step.description}
            isSelected={selectedStepIndex === index}
            progress={selectedStepIndex === index ? progress : 0} // Passer la progression de la vidéo
            onClick={() => setSelectedStepIndex(index)}
          />
        ))}
      </motion.div>
      {/* Conteneur de la vidéo */}
      <div style={{ flex: 1 }}>
        <VideoPlayer videoSrc={steps[selectedStepIndex].videoSrc} videoRef={videoRef} />
      </div>
    </div>
  );
};

interface PresentationStepProps {
  title: string;
  description: string;
  isSelected: boolean;
  progress: number; // Ajouter prop pour la progression
  onClick: () => void;
}

const PresentationStep: React.FC<PresentationStepProps> = ({ title, description, isSelected, progress, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#f0f8ff' : 'white'
      }}
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
        <h2 style={{ fontWeight: 'bold' }}>{title}</h2>
      </div>
      
      
      {/* Afficher une barre de progression pour l'étape sélectionnée */}
      {isSelected && (
        <div>
          <p>{description}</p>
          <div style={{ width: '100%', height: '5px', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden', }}>
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#76c7c0',
                transition: 'width 0.2s ease',
              }}
            />
          </div>
        </div>
      )}
      {/* Afficher le bouton uniquement si l'étape est sélectionnée */}
      {isSelected && (
        <div className="py-3 text-center md:text-left">
          <Button className="cursor-pointer bg-[#50c878]" size={"lg"}>
            Ouvrez un compte
          </Button>
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
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video ref={videoRef} className=''  muted   width="100%" style={{ display: 'block', borderRadius: '10px' }}>
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne supporte pas cette video.
      </video>
    </div>
  );
};

export default PresentationSteps;
