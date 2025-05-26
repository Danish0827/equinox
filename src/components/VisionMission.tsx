import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        title: "Our Mission",
        content:
            "Our mission is to provide innovative technology solutions that empower businesses and individuals to achieve their goals, streamline processes, and drive growth in a digital landscape.",
    },
    {
        title: "Our Vision",
        content:
            "Globally recognized as a transformative IT leader. Pushing boundaries, making positive impact, shaping tech future.",
    },
];

const VisionMission = () => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        cardRefs.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    x: i % 2 === 0 ? -100 : 100,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: 'play none play none',
                    },
                }
            );
        });
    }, []);

    return (
        <div className="py-16 border-b-2 border-cyan-400 relative overflow-hidden bg-gradient-to-b from-[#1a002c] via-[#1a0e38] to-[#1a002c] text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-3">
                {data.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => { cardRefs.current[index] = el; }}
                        style={{
                            boxShadow:
                                "rgb(146 146 167 / 25%) 0px 0px 5px 9px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px 2064px inset",
                        }}
                        className="border-2 border-cyan-400 p-6 bg-gradient-to-r from-[#1b1433] via-[#110c20] to-[#000000] shadow-xl rounded-2xl transition-all duration-300 h-96 opacity-0"
                    >
                        <div className="flex flex-col items-center gap-12 w-full max-w-7xl">
                            <h2 className="text-3xl lg:text-4xl py-5 font-semibold border-b-2 border-cyan-400 shadow-lg pb-2 mb-10 text-center">
                                {item.title}
                            </h2>
                        </div>
                        <p className="text-white text-xl lg:text-2xl text-justify">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VisionMission;
