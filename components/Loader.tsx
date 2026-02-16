import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { finishLoading } from "@/store/loaderSlice";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => dispatch(finishLoading()), 1500); // Delay before revealing homepage
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="fixed inset-0 font-sans flex flex-col items-center justify-center bg-custom-gray text-white">
      {progress >= 100 && (
        <motion.h1
        className="text-3xl font-bold text-steel-gray my-4"
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Zaid Nawaz
      </motion.h1>
      
      )}

      {progress < 100 ? (
        <motion.div
          className="relative w-64 h-2 bg-steel-gray rounded-md overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: progress >= 100 ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="h-full bg-white rounded-md"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      ) : (
        <motion.div
          className="relative w-64  h-2 bg-white rounded-md"
          initial={{ width: 0, left: "50%" }}
          animate={{ width: "100%", left: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}