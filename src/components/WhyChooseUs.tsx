"use client";
import { musicSchoolContent } from "@/data/musicSchoolcontent";
import { StickyScroll } from "./ui/sticky-scroll-reveal";



export default function WhyChooseUs() {
    return (
        <>
            <StickyScroll content={musicSchoolContent} />
        </>
    )
}
