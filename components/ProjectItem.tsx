import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

import { Project } from "../constants/projects";

interface ProjectItemProps extends Project {}

export const ProjectItem = ({
  title,
  subtitle,
  description,
  imageSrc,
  number,
  isReversed = false,
}: ProjectItemProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative mt-40">
      {!isComplete && (
        <div className={`flex gap-[100px] items-start transition-opacity duration-500 ${isReversed ? 'flex-row-reverse text-right' : ''}`}>
           {/* Image Expansion Box */}
          <div className="relative h-[400px] w-[350px] overflow-hidden">
            <motion.div
              className="w-full h-full bg-steel-gray absolute"
              initial={{ width: "3px" }}
              animate={isInView ? {
                width: ["3px", "100%", "100%", "100%", "100%"],
                x: ["0%", "0%", "0%", "97%", "100%"],
              } : {}}
              transition={{
                duration: 2,
                ease: "easeOut",
                times: [0, 0.5, 0.7, 0.8, 1],
              }}
              onAnimationComplete={() => setIsComplete(true)}
            />
          </div>
          {/* Content Expansion Box */}
          <div className="relative h-[200px] flex-1 overflow-hidden">
            <motion.div
              className={`w-1/4 h-[90px] bg-steel-gray absolute ${isReversed ? 'right-0' : 'left-0'}`}
              initial={{ width: "3px" }}
              animate={isInView ? {
                width: ["3px", "100%", "100%", "100%", "100%"],
                x: ["0%", "0%", "0%", isReversed ? "-97%" : "97%", isReversed ? "-100%" : "100%"],
              } : {}}
              transition={{
                duration: 2,
                ease: "easeOut",
                times: [0, 0.5, 0.7, 0.8, 1],
              }}
            />
          </div>
        </div>
      )}

      {isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`flex gap-[100px] group grayscale transition-all duration-700 hover:grayscale-0 ${isReversed ? 'flex-row-reverse' : ''}`}
        >
          {/* Image Part */}
          <div className="relative h-[400px] w-[350px] ">
            <div className="w-full h-full object-cover">
              <Image
                src={imageSrc}
                alt={title}
                width={350}
                height={400}
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <span className={`text-[10rem] text-white font-bold [text-shadow:_0_5px_10px_rgba(0,0,0,0.3)] absolute -bottom-8 ${isReversed ? '-right-16' : '-left-16'}`}>
              {number}
            </span>
          </div>

          {/* Content Part */}
          <div className={`flex justify-between flex-col flex-1 ${isReversed ? 'items-end text-right' : ''}`}>
            <div className="flex gap-4 flex-col">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-white text-[6.5rem] font-custom-font [text-shadow:1px_1px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000] group-hover:text-black group-hover:[text-shadow:none] transition-all duration-500"
                >
                  {title}
                </motion.h1>
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="block group-hover:text-black transition-colors duration-500"
                >
                  {subtitle}
                </motion.span>
              </div>
              <motion.span
                initial={{ y: "20px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="group-hover:text-black transition-colors duration-500"
              >
                {description}
              </motion.span>
            </div>

            <motion.div
              initial={{ y: "20px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className={`relative w-[210px] mt-8 ${isReversed ? 'mr-5' : 'ml-5'} cursor-pointer group h-12 overflow-hidden flex pl-3 items-center`}
              whileHover="hover"
            >
              <motion.div
                className={`absolute ${isReversed ? 'right-0' : 'left-0'} top-0 h-full bg-steel-gray rounded-full z-0`}
                variants={{
                  initial: { width: 50 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />

              <div className={`relative z-10 text-white flex items-center space-x-3 w-full pl-3 ${isReversed ? 'justify-end pr-3' : ''}`}>
                {isReversed && <span className="absolute left-14 bg-white w-2 h-[1px] origin-left rotate-[-35deg]"></span>}
                {isReversed && <span className="bg-white w-12 h-[1px] mr-3"></span>}
                <span>view work</span>
                {!isReversed && <span className="bg-white w-12 h-[1px]"></span>}
                {!isReversed && <span className="absolute right-14 bg-white w-2 h-[1px] origin-right rotate-[35deg]"></span>}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
