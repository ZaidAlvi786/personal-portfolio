import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
export default function Hero(){
    const [isBoxComplete, setIsBoxComplete] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <div ref={ref} className="bg-custom-gray relative flex flex-col gap-12 px-40">
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

        <div className="flex gap-4">
          <div className="relative h-[400px] w-[350px] ">
            <div className="w-full h-full object-cover">
              <Image 
              src="/resumify-banner.png" 
              alt="Resumify Banner" 
              width={350} 
              height={400} 
              className="object-cover rounded-lg shadow-xl"
            />
            </div>
          </div>
        </div>
    </div>
    )
}