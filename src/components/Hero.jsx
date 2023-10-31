import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typed from "react-typed";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const phrases = [
  "building innovative and user-friendly solutions.",
  "web3 and blockchain.",
  "networks and embedded systems.",
  "investment analysis and active trading.",
  "virtual and augmented reality.",
  "data science and analytics.",
  "exploring new tech challenges.",
  //... add more phrases here.
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <Typed
              strings={["Hi, I'm Bret"]}
              typeSpeed={40}
              showCursor
              cursorChar="|"
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm passionate about... <br className="sm:block hidden" />
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
