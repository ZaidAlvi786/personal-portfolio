import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import Image from "next/image";
import Logo from "@/public/logo.png"
import CloseIcon from "@/public/assets/CloseIcon";

interface NavMenuProps {
    toggleMenu: () => void;
    menuOpen:boolean
  }
const NavMenu = ({ toggleMenu,menuOpen }:NavMenuProps) => {
  const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      toggleMenu();
      setIsClosing(false);
    }, 2900); // Duration matches the closing animation timeline
  };

  // Handle hover effects for menu icon
  

  // Handle menu opening/closing

  // Handle animation on component load or first menu open
  useEffect(() => {
    if (menuOpen && !hasAnimated) {
      setAnimate(true);
      setHasAnimated(true);
    }
  }, [menuOpen, hasAnimated]);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="bg-steel-gray">

      {/* Full page menu */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-custom-gray z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen && !isClosing ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isClosing ? 2.4 : 0 }}
      >
        {/* Animated steel-gray divs */}
        <motion.div
          className="absolute left-0 top-0 h-1/3"
          style={{ zIndex: 10 }}
          initial={{ width: '83.333%' }}
          animate={{ width: (animate || hasAnimated) && !isClosing ? '100%' : '83.333%' }}
          transition={{ duration: 1, ease: 'easeInOut', delay: isClosing ? 1.4 : 0 }}
        >
          <div className="w-full h-full bg-steel-gray" />
        </motion.div>
        <motion.div
          className="absolute left-0 top-1/3 h-1/3"
          style={{ zIndex: 9 }}
          initial={{ width: '83.333%' }}
          animate={{ width: (animate || hasAnimated) && !isClosing ? '100%' : '83.333%' }}
          transition={{ duration: 1, ease: 'easeInOut', delay: isClosing ? 1.2 : 0.2 }}
        >
          <div className="w-full h-full bg-steel-gray" />
        </motion.div>
        <motion.div
          className="absolute left-0 top-2/3 h-1/3"
          style={{ zIndex: 8 }}
          initial={{ width: '83.333%' }}
          animate={{ width: (animate || hasAnimated) && !isClosing ? '100%' : '83.333%' }}
          transition={{ duration: 1, ease: 'easeInOut', delay: isClosing ? 1.0 : 0.4 }}
        >
          <div className="w-full h-full bg-steel-gray" />
        </motion.div>
        <div className="absolute flex justify-between items-start px-4 pt-4 z-[10000] left-0 top-0 h-full w-full ">
        <span className="w-15 h-15">
        <Image width={100} height={100} src={Logo} alt="Logo" />
      </span>
      <div className="flex items-center z-[100]" onClick={handleClose} >
        <span
          className={`text-custom-gray cursor-pointer text-[10px] font-circular block `}
        >
          Close
        </span>
        <span
          className="w-[60px] h-[60px] flex justify-center items-center cursor-pointer"
          
          
        >
          <CloseIcon fillColor="#928dab" width="30px" height="30px" />
        </span>
      </div>
        </div>
        {/* Nav menu items */}
        <motion.div
          className="absolute justify-center gap-8 h-full z-[10000] left-[25%] w-2/4 flex flex-col items-center space-y-4 -translate-y-1/2"
          initial={{ y: "100%" }}
          animate={{ y: (animate || hasAnimated) && !isClosing ? 0 : "100%" }}
          transition={{ duration: 1, ease: "easeInOut", delay: isClosing ? 0 : 1.4 }}
        >
          <div 
            className="text-custom-gray text-5xl font-semibold h-20 relative w-fit overflow-y-visible overflow-x-hidden"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-custom-gray-hover">about</span>
            {/* Background numbers */}
            <motion.span 
              className="absolute -left-12 -top-2 text-7xl font-bold text-gray-600 opacity-30 -z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredItem === 'about' ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              01
            </motion.span>
            <motion.span 
              className="absolute inset-0 h-1 top-1/2 w-full text-custom-gray z-[10000000]"
              initial={{ x: '0%' }}
              animate={{ 
                x: hoveredItem === 'about' ? '0%' : '100%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
             
            </motion.span>
            {/* White text overlay */}
            <motion.span 
              className="absolute inset-0 text-5xl font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredItem === 'about' ? 1 : 0
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              about
            </motion.span>
            {/* White strike-through line */}
            <motion.span 
              className={`absolute z-[1000000] top-6 left-0 w-full h-1 bg-white -translate-y-1/2 ${hoveredItem === 'about' ? 'block' : 'hidden'}`}
              initial={{ x: '0%' }}
              animate={{ 
                x: hoveredItem === 'about' ? '0%' : '100%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            ></motion.span>
          </div>
          <div 
            className="text-custom-gray text-5xl font-semibold h-20 relative w-fit overflow-x-hidden"
            onMouseEnter={() => handleMouseEnter('works')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-custom-gray-hover">works</span>
            {/* Background numbers */}
            <motion.span 
              className="absolute -left-12 -top-2 text-7xl font-bold text-gray-600 opacity-30 -z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredItem === 'works' ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              02
            </motion.span>
            <motion.span 
              className="absolute inset-0 top-6 h-1 w-full text-custom-gray z-[10000000]"
              initial={{ x: '0%' }}
              animate={{ 
                x: hoveredItem === 'works' ? '0%' : '100%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
             
            </motion.span>
            {/* White text overlay */}
            <motion.span 
              className="absolute inset-0 text-5xl font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredItem === 'works' ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              works
            </motion.span>
            {/* White strike-through line */}
            <motion.span 
              className={`absolute z-[1000000] top-6 left-0 w-full h-1 bg-white -translate-y-1/2 ${hoveredItem === 'works' ? 'block' : 'hidden'}`}
              initial={{ x: '0%' }}
              animate={{ 
                x: hoveredItem === 'works' ? '0%' : '100%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            ></motion.span>
          </div>
          <div 
            className="text-custom-gray text-5xl font-semibold relative h-20 w-fit overflow-y-visible overflow-x-hidden"
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-custom-gray-hover">contact</span>
            {/* Background numbers */}
            <motion.span 
              className="absolute -left-8 -top-2 text-7xl font-bold text-gray-600 opacity-30 -z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredItem === 'contact' ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              03
            </motion.span>
            <motion.span 
              className="absolute inset-0 top-6 h-1 w-full text-custom-gray z-[10000000]"
              initial={{ x: '0%' }}
              animate={{ 
                x: hoveredItem === 'contact' ? '0%' : '100%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
             
            </motion.span>
            {/* White text overlay */}
            <motion.span 
              className="absolute inset-0 text-5xl font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredItem === 'contact' ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              contact
            </motion.span>
            {/* White strike-through line */}
            <motion.span 
              className={`absolute z-[1000000] top-6 left-0 w-full h-1 bg-white -translate-y-1/2 ${hoveredItem === 'contact' ? 'block' : 'hidden'}`}
              initial={{ x: '0%' }}
              animate={{ 
                x: hoveredItem === 'contact' ? '0%' : '100%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            ></motion.span>
          </div>
          <div 
            className="text-custom-gray text-5xl font-semibold relative w-fit h-20 overflow-y-visible overflow-x-hidden"
            onMouseEnter={() => handleMouseEnter('blogs')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="hover:text-custom-gray-hover">blogs</span>
            {/* Background numbers */}
            <motion.span 
              className="absolute -left-[55px] -top-2 text-7xl font-bold text-gray-600 opacity-30 -z-10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredItem === 'blogs' ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              04
            </motion.span>
            <motion.span 
              className="absolute inset-0 top-6 h-1 w-full text-custom-gray z-[10000000]"
              initial={{ x: '0%' }}
              animate={{ 
                x: hoveredItem === 'blogs' ? '0%' : '100%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
             
            </motion.span>
            {/* White text overlay */}
            <motion.span 
              className="absolute inset-0 text-5xl font-semibold text-white"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: hoveredItem === 'blogs' ? 1 : 0
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              blogs
            </motion.span>
            {/* White strike-through line */}
            <motion.span 
              className={`absolute z-[1000000] top-6 left-0 w-full h-1 bg-white -translate-y-1/2 ${hoveredItem === 'blogs' ? 'block' : 'hidden'}`}
              initial={{ x: '0%' }}
              animate={{ 
                x: hoveredItem === 'blogs' ? '0%' : '100%'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            ></motion.span>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center z-[1000]">
          <div className="text-custom-gray text-xs font-normal py-3">© 2025 Zaid Nawaz</div>
        </div>
      </motion.div>
    </div>
  );
};

export default NavMenu;
