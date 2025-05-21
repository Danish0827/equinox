import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesData } from '../lib/Data';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const triggers = sectionsRef.current.map((section) => {
      if (!section) return null;
      return gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
            // markers: true, // Uncomment for debugging trigger points
          },
        }
      );
    });

    return () => {
      triggers.forEach((anim) => {
        if (anim && anim.scrollTrigger) anim.scrollTrigger.kill();
        if (anim) anim.kill();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#11071f] via-[#11071f] to-[#11071f] lg:to-[#210a42] text-white">
      {servicesData.map((service, index) => {
        const isEven = index % 2 !== 0;
        return (
          <div
            key={index}
            ref={(el) => {
              sectionsRef.current[index] = el;
            }}
            className={`${isEven ? 'bg-gradient-to-tr' : 'bg-gradient-to-tl'} border-b-2 border-cyan-400 from-[#11071f] via-[#11071f] to-[#11071f] lg:to-[#210a42] min-h-screen relative overflow-hidden pt-20 px-3 lg:px-6 flex flex-col items-center gap-32`}
          >
            <div className="flex flex-col items-center gap-10 w-full max-w-7xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold border-b-2 border-cyan-400 shadow-lg pb-2 text-center">
                {service.heading}
              </h2>

              <p className={`${isEven ? 'text-center lg:text-left' : 'text-center lg:text-right'} text-base lg:text-xl text-gray-300`}>{service.description}</p>

              {/* Zig-Zag Layout */}
              <div
                className={`flex w-full lg:px-6 flex-col lg:flex-row items-center gap-8 ${isEven ? '' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Image */}
                <div className="lg:w-[40%] flex justify-center z-10">
                  <img src={service.image} alt={service.heading} className="h fade-item" />
                </div>

                {/* Categories Box */}
                <div className='pb-3'>
                  <div
                    style={{
                      boxShadow:
                        'rgb(146 146 167 / 25%) 0px 0px 5px 9px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px 2064px inset',
                    }}
                    className="relative z-40  w-full bg-transparent grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 border border-cyan-400 p-8 rounded-xl"
                  >
                    {service.categories.map((category, idx) => (
                      <div
                        key={idx}
                        className="py-5 flex flex-col items-center justify-center text-white text-sm font-medium rounded-lg"
                      >
                        <img
                          src={category.icon}
                          alt={category.name}
                          className="h-10 mb-2 fade-item"
                        />
                        <div className="text-center text-sm lg:text-base">{category.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Zig-Zag Background Image */}
            <div
              className={`absolute -bottom-10 ${isEven ? '-right-44 rotate-12' : '-left-44  -rotate-6 scale-x-[-1] '
                } z-30 `}
            >
              <img src="/bottom-earth.png" alt="equinox" className="h fade-item" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
