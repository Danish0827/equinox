import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    number: "1",
    text: "Are you struggling to reach the right audience?",
  },
  {
    number: "2",
    text: "Is your brand not standing out in the market?",
  },
  {
    number: "3",
    text: "Are your competitors doing better than you in digital space?",
  },
];

const ProblemSection = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray(".problem-card") as HTMLElement[];

    gsap.set(elements, { opacity: 0, y: 80 });

    gsap.to(elements, {
      scrollTrigger: {
        trigger: ".problem-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="problem-section border-b-2 border-cyan-400 min-h-screen bg-gradient-to-b from-[#0b032d] via-[#211146] to-[#1a002c] text-white py-20 px-6 md:px-20">
      <div className="flex flex-col items-center gap-12 w-full max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold border-b-2 border-cyan-400 shadow-lg pb-2 mb-10 text-center">
          What Problem Are You Facing?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {problems.map((item, i) => (
          <div
            key={i}
            className={`problem-card bg-gradient-to-br from-[#130e22] via-[#1d1246] to-[#302357] rounded-xl shadow-lg p-6 flex items-start gap-4 ${
              i === 2 ? "md:col-span-2 mx-auto w-full md:w-2/3" : ""
            }`}
          >
            <div
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
              className="flex-shrink-0 h-20 w-20 rounded-full bg-gradient-to-br from-[#22183f] via-[#322166] to-[#1c0f44] border-2 border-[#3e0974] flex items-center justify-center text-xl font-bold text-white"
            >
              {item.number}
            </div>
            <p className="text-base md:text-xl">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSection;
