import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ProjectItem } from "./ProjectItem";
import { projects } from "../constants/projects";

export default function Hero() {
  const [isBoxComplete, setIsBoxComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-custom-gray relative flex flex-col gap-12 px-40 py-20">
      {!isBoxComplete && (
        <div className="flex w-1/4 flex-col gap-[10px] relative overflow-hidden h-[200px]">
          <motion.div
            className="w-1/4 h-[90px] bg-steel-gray absolute"
            initial={{ width: "3px" }}
            animate={isInView ? {
              width: ["3px", "100%", "100%", "100%", "100%"],
              x: ["0%", "0%", "0%", "97%", "100%"],
            } : {}}
            transition={{
              duration: 5,
              ease: "easeOut",
              times: [0, 0.5, 0.7, 0.8, 1],
            }}
            onAnimationComplete={() => setIsBoxComplete(true)}
          />
        </div>)}
      {isBoxComplete && (
        <div className="relative flex flex-col gap-8">
          <motion.h2
            className="text-steel-gray font-custom-font font-bold text-7xl"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >Creafted with love.</motion.h2>
          <motion.p
            className="text-steel-gray font-custom-font font-regular leading-10 text-3xl"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >These are a selection of my recent works.
          </motion.p>
        </div>
      )}

      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
      <div className="pt-[100px] mb-20">
        <span className="tracking-[3px] text-[1.1rem] uppercase text-[#717171] font-custom-font">THERE&apos;S MORE</span>
        <div className="relative group flex items-center gap-6 cursor-pointer transition-transform duration-500 hover:translate-x-4 w-fit mt-6">
          <h2 className="text-white font-custom-font text-6xl">view all projects</h2>
          <div className="relative flex items-center mt-2">
            <span className="bg-white w-16 h-[1px]"></span>
            <span className="absolute right-0 bg-white w-3 h-[1px] origin-right rotate-[35deg] group-hover:opacity-0 transition-opacity duration-300"></span>
          </div>
        </div>
      </div>
      <div className="pt-[100px] mb-20 flex flex-col gap-6">
        <span className="tracking-[3px] text-[1.1rem] uppercase text-[#717171] font-custom-font">QUICK LINKS</span>
        <div className="flex gap-10">
          {["about", "contact", "works", "vlog"].map((link) => (
            <div key={link} className={`relative group flex flex-col items-start gap-1 ${link === 'vlog' ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
              <span className={`inline-block tracking-[2px] text-4xl font-custom-font transition-all duration-500 ${link === 'vlog' ? 'text-[#3d3d3d]' : 'text-steel-gray group-hover:translate-x-[5px]'}`}>
                {link}
              </span>
              <span className={`absolute bottom-4 left-0 w-full h-[4px] transition-transform duration-500 origin-right group-hover:origin-left ${link === 'vlog' ? 'bg-[#3d3d3d] scale-x-100' : 'bg-steel-gray scale-x-0 group-hover:scale-x-100'}`}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}