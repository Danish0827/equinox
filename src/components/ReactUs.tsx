import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { introData } from "../lib/Data";

gsap.registerPlugin(ScrollTrigger);

const ReactUs = () => {
  const sectionRef = useRef(null);
  const fadeItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeItemsRef.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            delay : 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: 'play none play none',
              scrub: false,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="pt-16 relative overflow-hidden bg-gradient-to-b from-[#1a002c] via-[#23134b] to-[#1a002c] text-white"
    >
      <div
        ref={(el) => {  fadeItemsRef.current[0] = el;}}
        className="fade-item flex flex-col items-center gap-10 w-full max-w-7xl mx-auto"
        >
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold border-b-2 border-cyan-400 shadow-lg pb-2 text-center">
          SAY HELLO TO REACH US
        </h2>
      </div>

      <div
        ref={(el) => {  fadeItemsRef.current[1] = el;}}
        style={{
          boxShadow:
            "rgb(222 241 255 / 30%) 0px 1px 2px 0px, rgb(255 255 255 / 15%) 0px 2px 6px 2px",
        }}
        className="fade-item bg-[#1e1e3f] shadow-2xl text-center text-sm md:text-base mt-12 px-4 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center z-10 max-w-7xl mx-auto"
      >
        <div className="mb-8 lg:mb-0">
          <strong>{introData.contact.office.title}</strong>
          <br />
          {introData.contact.office.lines.map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </div>

        <div className="mb-8 lg:mb-0">
          <strong>{introData.contact.website.title}</strong>
          <br />
          <a href={introData.contact.website.url} className="text-white">
            {introData.contact.website.label}
          </a>
        </div>

        <div>
          <strong>{introData.contact.email.title}</strong>
          <br />
          <a
            href={`mailto:${introData.contact.email.address}`}
            className="text-white"
          >
            {introData.contact.email.address}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReactUs;
