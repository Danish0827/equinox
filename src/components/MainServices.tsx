import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { name: "AR, VR and MR", icon: "/sevices/virtual-tour.png" },
    { name: "3D Modelling", icon: "/sevices/data-modelling.png" },
    { name: "UI/UX Design", icon: "/sevices/ux-design.png" },
    { name: "App Development", icon: "/sevices/mobile-development.png" },
    { name: "Digital Branding", icon: "/sevices/advertising-campaign.png" },
    { name: "Business Automation", icon: "/sevices/automation.png" },
    { name: "IT Consultation", icon: "/sevices/technical-support.png" },
    { name: "Cloud Solutions", icon: "/sevices/saas.png" },
    { name: "Quality Testing", icon: "/sevices/software-testing.png" },
    { name: "Digital Experience", icon: "/sevices/technology.png" },
];

const MainServices = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const elements = gsap.utils.toArray(".icon-card") as HTMLElement[];

        gsap.set(elements, { opacity: 0, y: 80 });

        gsap.to(elements, {
            scrollTrigger: {
                trigger: sectionRef.current, 
                start: "top 80%",
                toggleActions: 'play none play none',
            },
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.3,
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="pt-16 border-b-2 border-cyan-400 relative overflow-hidden min-h-screen bg-gradient-to-tr from-[#11071f] via-[#11071f] to-[#210a42] text-white"
        >
            <div className="flex flex-col items-center gap-10 w-full max-w-7xl">
                <h2 className="icon-card text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold border-b-2 border-cyan-400 shadow-lg pb-2 mb-10 text-center ">
                    Services We Provide
                </h2>
            </div>
            <div className="px-3 pb-3">
                <div
                    style={{
                        boxShadow:
                            "rgb(146 146 167 / 25%) 0px 0px 5px 9px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px 2064px inset",
                    }}
                    className="relative z-40 lg:max-w-6xl mx-auto w-full bg-transparent grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 border border-cyan-400 p-8 rounded-xl"
                >
                    {services.map((item, idx) => (
                        <div
                            key={idx}
                            className="icon-card py-8 flex flex-col items-center group justify-center text-white text-sm font-medium rounded-lg "
                        >
                            <img src={item.icon} alt={item.name} className="h-14 mb-4 group-hover:scale-[120%] duration-500" />
                            <div className="text-center text-sm md:text-base lg:text-xl">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute -bottom-10 -right-44 rotate-12 z-30 icon-card">
                <img src="/bottom-earth.png" alt="equinox" className="h" />
            </div>
        </div>
    );
};

export default MainServices;
