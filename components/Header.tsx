import Image from "next/image";
import Logo from "@/public/logo.png";
import NavMenu from "@/public/nav-menu-icon.svg";
import { useState } from "react";
import DribbleIcon from "@/public/assets/DribbleIcon";
import BehanceIcon from "@/public/BehanceIcon";
import GithubIcon from "@/public/GithubIcon";
import LinkdienIcon from "@/public/assets/Linkdien";
import DotBoxIcon from "@/public/DotBox";
import { motion } from 'framer-motion';
export default function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const [isBoxComplete, setIsBoxComplete] = useState(false);

  return (
    <div className="fixed flex justify-between w-full">
      <div className="bg-steel-gray h-screen p-6 w-10/12 flex flex-col gap-20">
        <div>
          <span className="w-15 h-15">
            <Image width={100} height={100} src={Logo} alt="" />
          </span>
          <div className="flex items-center absolute right-[35px] top-[40px]">
            <span
              className={`text-steel-gray text-[8px] font-circular ${
                isHovered ? "hidden" : "block"
              }`}
            >
              Menu
            </span>
            <span
              className={`text-steel-gray text-[8px] font-circular ${
                isHovered ? "block" : "hidden"
              }`}
            >
              Open
            </span>
            <span
              className="w-[60px] h-[60px] flex justify-center items-center cursor-pointer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Image src={NavMenu} alt="" className="w-[30px] h-[30px]" />
            </span>
          </div>
        </div>
        <div className="flex gap-[50px] w-[90%]">
          <div className="flex flex-col gap-8 pl-5 ">
            <span className="w-[40px] h-[40px] flex justify-center items-center group">
              <span className="w-[35px] h-[35px] flex justify-center items-center group-hover:bg-custom-gray rounded-full">
                <DribbleIcon
                  className="group-hover:fill-steel-gray fill-custom-gray"
                  width="20px"
                  height="20px"
                  fillColor="transparent"
                />
              </span>
            </span>
            <span className="w-[40px] h-[40px] flex justify-center items-center group ">
              <span className="w-[35px] h-[35px] flex justify-center items-center group-hover:bg-custom-gray rounded-full">
                <BehanceIcon
                  className="group-hover:fill-steel-gray fill-custom-gray"
                  width="20px"
                  height="20px"
                />
              </span>
            </span>
            <span className="w-[40px] h-[40px] flex justify-center items-center group">
              <span className="w-[35px] h-[35px] flex justify-center items-center group-hover:bg-custom-gray rounded-full">
                <GithubIcon
                  className="group-hover:fill-steel-gray fill-custom-gray"
                  width="20px"
                  height="20px"
                />
              </span>
            </span>
            <span className="w-[40px] h-[40px] flex justify-center items-center group">
              <span className="w-[35px] h-[35px] flex justify-center items-center group-hover:bg-custom-gray rounded-full">
                <LinkdienIcon
                  className="group-hover:fill-steel-gray fill-custom-gray"
                  width="20px"
                  height="20px"
                />
              </span>
            </span>
          </div>
          <div>
            <div>
              <span className="absolute flex flex-col h-[150px]">
                <DotBoxIcon width="60px" height="50px"  />
                <DotBoxIcon width="60px" height="50px" />
                <DotBoxIcon width="60px" height="50px" />
                <DotBoxIcon width="60px" height="50px" />
              </span>
              <div className="flex flex-col gap-[50px]">
              <motion.div
        className="w-full h-[90px] bg-white"
        initial={{ x: '-100%' }} // Start from off-screen to the left
        animate={{ x: '200%' }} // Move to 200% to the right (off-screen)
        transition={{ duration: 10.5, ease: 'easeOut' }}
        // Set the state to true once the animation is complete
        onAnimationComplete={() => setIsBoxComplete(true)}
      />
      
      {/* Heading animation from bottom to top */}
      {isBoxComplete && (
        <motion.h1
          className="text-custom-gray text-[7.2rem] font-custom-font mt-[100px]" // Adjust mt to place below box
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          creative designer 
        </motion.h1>
      )}
      <motion.div
        className="w-full h-[90px] bg-white"
        initial={{ x: '-100%' }} // Start from off-screen to the left
        animate={{ x: '200%' }} // Move to 200% to the right (off-screen)
        transition={{ duration: 1.5, ease: 'easeOut' }}
        // Set the state to true once the animation is complete
        onAnimationComplete={() => setIsBoxComplete(true)}
      />
      
      {/* Heading animation from bottom to top */}
      {isBoxComplete && (
        <motion.h1
          className="text-custom-gray text-[7.2rem] font-custom-font mt-[100px]" // Adjust mt to place below box
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          & developer.
        </motion.h1>
      )}
              {/* <h1 className="text-custom-gray text-[7.2rem] font-custom-font">
                creative designer 
              </h1>
              <h1 className="text-custom-gray text-[7.2rem] font-custom-font">
               & developer.
              </h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom-gray w-2/12"></div>
    </div>
  );
}
