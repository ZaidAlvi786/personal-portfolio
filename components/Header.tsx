import Image from "next/image";
import Logo from "@/public/logo.png";
import navMenu from "@/public/nav-menu-icon.svg";
import { useState } from "react";
import DribbleIcon from "@/public/assets/DribbleIcon";
import BehanceIcon from "@/public/BehanceIcon";
import GithubIcon from "@/public/GithubIcon";
import LinkdienIcon from "@/public/assets/Linkdien";
import DotBoxIcon from "@/public/DotBox";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";
export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBoxComplete, setIsBoxComplete] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  

  return (
    <>
      {!menuOpen ? (
        <div className=" flex justify-between w-full h-screen">
          <div className="bg-steel-gray h-screen p-6 w-10/12 flex  flex-col gap-20">
            <div className="fixed w-full">
              <span className="w-15 h-15">
                <Image width={100} height={100} src={Logo} alt="" />
              </span>
              <div className="flex items-center absolute right-[35px] top-0">
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
                  onClick={toggleMenu}
                >
                  <Image src={navMenu} alt="" className="w-[30px] h-[30px]" />
                </span>
              </div>
            </div>

            <div className="flex items-end gap-[50px] w-[90%] h-full">
              <div className="flex flex-col justify-end gap-8 pl-5 ">
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

              <div className="w-full">
                <div className="absolute flex flex-col h-[150px]">
                  <DotBoxIcon width="60px" height="50px" />
                  <DotBoxIcon width="60px" height="50px" />
                  <DotBoxIcon width="60px" height="50px" />
                  <DotBoxIcon width="60px" height="50px" />
                </div>

                <div
                  className={`flex flex-col gap-[10px] overflow-x-hidden ${
                    isBoxComplete ? "pt-[30px]" : ""
                  }`}
                >
                  {!isBoxComplete && (
                    <div className="felx flex-col gap-[10px]">
                      <motion.div
                        className="w-full h-[90px] bg-custom-gray"
                        initial={{ width: "3px" }}
                        animate={{
                          width: ["3px", "100%", "100%", "100%", "100%"],
                          x: ["0%", "0%", "0%", "97%", "100%"],
                        }}
                        transition={{
                          duration: 5,
                          ease: "easeOut",
                          times: [0, 0.5, 0.7, 0.8, 1],
                        }}
                        onAnimationComplete={() => setIsBoxComplete(true)}
                      />

                      <motion.div
                        className="w-[90%] h-[90px] bg-custom-gray"
                        initial={{ width: "1px" }}
                        animate={{
                          width: ["1px", "99%", "99%", "99%", "100%"],
                          x: ["0%", "0%", "0%", "98%", "100%"],
                        }}
                        transition={{
                          duration: 5,
                          delay: 0.1,
                          ease: "easeOut",
                          times: [0, 0.5, 0.7, 0.8, 1],
                        }}
                        onAnimationComplete={() => setIsBoxComplete(true)}
                      />
                    </div>
                  )}

                  {isBoxComplete && (
                    <motion.h1
                      className="text-custom-gray ml-7 leading-[85px] text-[6rem] font-custom-font"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      creative designer
                    </motion.h1>
                  )}

                  {isBoxComplete && (
                    <motion.h1
                      className="text-custom-gray ml-7 leading-[85px] text-[6rem] font-custom-font"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      & developer.
                    </motion.h1>
                  )}

                  {isBoxComplete && (
                    <motion.div
                      className="text-custom-gray ml-7 mt-12 text-3xl font-custom-font"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                      Hi I&apos;m Zaid Nawaz, a passionate Software Developer & UI/UX
                      Designer based in Pakistan.
                    </motion.div>
                  )}

                  <motion.div
                    className="relative w-[210px] mt-8 ml-5 cursor-pointer group h-12 overflow-hidden flex pl-3 items-center"
                    initial="initial"
                    whileHover="hover"
                  >
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-custom-gray rounded-full z-0"
                      variants={{
                        initial: { width: 50 },
                        hover: { width: "100%" },
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />

                    <div className="relative z-10 text-white flex items-center space-x-3 w-full pl-3">
                      <span>view all works</span>
                      <span className="bg-white w-12 h-[1px]"></span>
                      <span className="absolute right-7 bg-white w-2 h-[1px] origin-right rotate-[35deg]"></span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-custom-gray w-2/12"></div>
        </div>
      ) : (
        <NavMenu toggleMenu={toggleMenu} menuOpen={menuOpen }/>
      )}
    </>
  );
}
