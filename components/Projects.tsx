"use client"
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const {ref} = useSectionInView("Projects", 0.5);
  // const {ref, inView} = useInView({
  //   threshold: 0.5,
  // });
  // const { setActiveSection, timeOfLastClick }= useActiveSectionContext();
  

  // useEffect(() => {if (inView && Date.now() - timeOfLastClick > 1000) {
  //   setActiveSection("Projects");
  // }}, [inView, setActiveSection, timeOfLastClick])

  return (
    <section ref = {ref} id = "projects" className="scroll-mt-28 mb-28">
      <SectionHeading text="My projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {" "}
            {/* Wrap around cause dont want to pass key to Project */}
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}



