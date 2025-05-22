import { useEffect, useRef } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { PiPhoneLight } from 'react-icons/pi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const categories = [
    { name: 'Goutham S.V', icon: FaRegUserCircle },
    { name: 'goutham@equinoxtechsolutions.com', icon: IoMailUnreadOutline },
    { name: '+91 88674 46851', icon: PiPhoneLight },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll('.icon-row');

    gsap.set(elements, { opacity: 0, y: 60 });

    gsap.to(elements, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
      opacity: 1,
      y: 0,
      delay: 1.5,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="pt-14 border-b-2 border-cyan-400 relative overflow-hidden min-h-screen bg-gradient-to-tr from-[#11071f] via-[#11071f] to-[#210a42] text-white"
    >
      <div className="icon-row flex flex-col items-center gap-10 w-full max-w-7xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold border-b-2 border-cyan-400 shadow-lg pb-2 mb-10 text-center">
          Know Our CEO
        </h2>
      </div>

      <div className="px-3 pb-3">
        <div
          style={{
            boxShadow:
              'rgb(146 146 167 / 25%) 0px 0px 5px 9px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px 2064px inset',
          }}
          className="relative z-40 lg:max-w-7xl mx-auto w-full bg-transparent border border-cyan-400 p-4 md:p-8 rounded-xl"
        >
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="icon-row py-1 mb-2 flex flex-row gap-1 sm:gap-4 items-center justify-start text-white text-sm font-medium rounded-lg"
            >
              <category.icon className="text-xl md:text-3xl" />
              <div className="text-center text-sm md:text-xl">{category.name}</div>
            </div>
          ))}

          <div className="icon-row pt-12 pb-8">
            <p className="text-xl lg:text-2xl">
              His passion for technology is no secret and his hunger to do more is an inspiration.
              Gautam S.V., our Head of Technology, has in-depth knowledge about all things tech and
              unique skills for making good things better. Truly skilled in problem-solving, he
              leverages complex technology to solve complex business problems and deliver simple,
              tangible solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-44 rotate-12 z-30">
        <img src="/bottom-earth.png" alt="equinox" className="" />
      </div>
    </div>
  );
};

export default Info;
