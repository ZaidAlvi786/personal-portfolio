import { useSelector } from "react-redux";
import { RootState } from "../store";
import Loader from "../components/Loader";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  return (
    <div className="bg-custom-gray">
      <Head>
        <title>My Portfolio</title>
      </Head>

      {isLoading ? (
        <Loader />
      ) : (
        <motion.div className="bg-custom-gray"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header />
          <main>
            <Hero />
            <Projects />
            <Contact />
          </main>
        </motion.div>
      )}
    </div>
  );
}
