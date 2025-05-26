import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { introData } from "../lib/Data";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const earthRef = useRef<HTMLImageElement>(null);
  const fadeRefs = useRef<HTMLDivElement[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  fadeRefs.current = [];

  const setFadeRef = useCallback((el: HTMLDivElement | null) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    fadeRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: 'play none play none',
          },
          delay: i * 0.2,
        }
      );
    });

  gsap.fromTo(
  earthRef.current,
  { opacity: 0, x: 200, scale: 1.2, rotate: 10 },
  {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    duration: 1.5,
    ease: "power3.out",
    delay: 0.5,
    scrollTrigger: {
      trigger: earthRef.current,
      start: "top 80%",
      toggleActions: 'play none play none',
    },
  }
);


    ScrollTrigger.create({
      trigger: bottomRef.current,
      start: "top 80%",
      toggleActions: 'play none play none',
      onEnter: () => {
        gsap.to(bottomRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(bottomRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
        });
      },
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#302357] via-[#080416] to-[#000000] text-white min-h-screen flex flex-col justify-between relative overflow-hidden">
      <div className="px-6 py-12 md:px-20 md:py-16">
        <div className="max-w-xl z-10 space-y-6">
          <div
            ref={setFadeRef}
            className="h-32 w-full fade-item"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <img
              src={introData.logo}
              alt="equinox"
              className="h-32 object-contain w-auto mx-auto"
            />
          </div>
          {introData.description.map((text, idx) => (
            <div
              key={idx}
              ref={setFadeRef}
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-justify fade-item">
                {text}
              </p>
            </div>
          ))}
        </div>

        <img
          ref={earthRef}
          src={introData.earthImage}
          alt="earth"
          className="hidden lg:block absolute right-0 -top-20 bottom-0 w-[400px] h-[700px] object-cover z-0 opacity-90 pointer-events-none"
        />
      </div>

      <div
        ref={bottomRef}
        className="bg-[#1e1e3f] text-center text-sm md:text-base mt-12 rounded-t-3xl px-4 lg:px-10 py-6 flex flex-col lg:flex-row justify-between items-center z-10 opacity-0"
        style={{ transform: "translateY(50px)" }}
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
          <a
            href={introData.contact.website.url}
            className="text-white underline hover:text-gray-300"
          >
            {introData.contact.website.label}
          </a>
        </div>

        <div>
          <strong>{introData.contact.email.title}</strong>
          <br />
          <a
            href={`mailto:${introData.contact.email.address}`}
            className="text-white underline hover:text-gray-300"
          >
            {introData.contact.email.address}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
