import React from "react";

type SectionHeadingProps = {
    text: string;
}
  
export default function SectionHeading({ text }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{text}</h2>;
}
