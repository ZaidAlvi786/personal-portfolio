
import DribbleIcon from "@/public/assets/DribbleIcon";
import BehanceIcon from "@/public/BehanceIcon";
import GithubIcon from "@/public/GithubIcon";
import LinkdienIcon from "@/public/assets/Linkdien";
import DotBoxIcon from "@/public/DotBox";
import { motion } from "framer-motion";
import NavMenu from "./NavMenu";
export default function Footer() {



    return (
        <div className="w-full h-[200px] mt-[100px] flex items-center">
            <div className="w-[85%] pl-[15%] pr-[10%] flex items-center h-full bg-steel-gray">
                <div className="flex gap-8 w-full ">
                    <div className="flex items-center">
                        <span className="text-white tracking-[0.3em]">© 2026 Zaid Nawaz</span>
                    </div>
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
            </div>
            <div className="py-8 flex items-center justify-center w-[15%]">
                <motion.div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative mt-2 z-10 text-white flex flex-col items-center justify-center cursor-pointer"
                >
                    <span className="bg-white w-16 h-[1px] rotate-[90deg]"></span>
                    <span className="absolute left-[30%] -top-[25px] bg-white w-2 h-[1px] origin-right rotate-[125deg]"></span>
                    <span className="rotate-[90deg] mt-12 tracking-widest">TOP</span>
                </motion.div>
            </div>
        </div>
    );
}
