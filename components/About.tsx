"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const {ref} = useSectionInView("About");
  // const {ref, inView} = useInView({
  //   threshold: 0.75,
  // });
  // const { setActiveSection , timeOfLastClick}= useActiveSectionContext();
  

  // useEffect(() => {if (inView && Date.now() - timeOfLastClick > 1000) {
  //   setActiveSection("About");
  // }}, [inView, setActiveSection, timeOfLastClick])

  
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref = {ref}
      id = "about"
    >
      <SectionHeading text="About me" />
      <p className="mb-3">
        My name is <span className="font-medium">Pham Quang Nhat</span> (but to
        avoid mispronunciation 👀, I tend to introduce myself as{" "}
        <span className="font-medium">Nathan</span>). I was born in Hanoi,
        Vietnam and came to Singapore to attend university at the age of 18.
        <span className="italic"> My favorite part of programming</span> is
        seeing users' satisfaction as they navigate the application to
        address their challenges. Hence I strive to create applications that provide
        a seamless user experience and can benefit the broader community.
         I am currently looking
        for a <span className="underline ">summer&nbsp;internship</span>{" "}
        <span className="italic">
          (May&nbsp;2024&nbsp;-&nbsp;Aug&nbsp;2024)
        </span>{" "}
        for{" "}
        <span className="italic">
          frontend, backend and fullstack developer roles.
        </span>
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy dancing,
        baking, watching K-Dramas, Anime, Kpop stage performances and playing the Nintendo
        Switch. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning more about{" "}
        <span className="font-medium">
          the techniques of popping and locking.
        </span>
        
      </p>
    </motion.section>
  );
}
