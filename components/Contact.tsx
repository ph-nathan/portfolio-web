"use client"

import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Contact() {
const { ref } = useSectionInView("Contact");
  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28"
    initial={{
        opacity: 0,
    }}
    whileInView= {{
        opacity: 1,
    }}
    transition= {{
        duration: 1
    }}
    viewport={{
        once:true
    }}>
      <SectionHeading text="Contact me" />
      <p className="text-gray-700 -mt-6">
        Please contact me directly at {" "}
        <a className="underline" href="mailto:">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" action ="">
        <input required maxLength= {500} type="email" className="h-14 rounded-lg borderBlack px-4" placeholder= "Your email"/>
        <textarea required className="h-52 my-3 rounded-lg borderBlack p-4" placeholder= "Your message"/>
        <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focusEffect hover:bg-gray-950">
          Submit <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}
        </button>
      </form>
    </motion.section>
  );
}
