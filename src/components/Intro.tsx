import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { introData } from "../lib/Data"; // adjust path if needed

const Intro = () => {
    const earthRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 4 } });

        const items = gsap.utils.toArray<HTMLElement>(".fade-item");
        items.forEach((el, i) => {
            tl.fromTo(
                el,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0 },
                i * 0.3
            );
        });

        tl.fromTo(earthRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, 0.2);
        tl.fromTo(bottomRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, 0.6);
    }, []);


    return (
        <div className="bg-gradient-to-br from-[#302357] via-[#080416] to-[#000000] text-white min-h-screen flex flex-col justify-between relative overflow-hidden">
            <div className="px-6 py-12 md:px-20 md:py-16">
                <div className="max-w-xl z-10 space-y-6">
                    <img src={introData.logo} alt="equinox" className="h-32 fade-item" />
                    {introData.description.map((text, idx) => (
                        <p key={idx} className="text-lg md:text-xl leading-relaxed fade-item text-justify">
                            {text}
                        </p>
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
                    className="bg-[#1e1e3f] text-center text-sm md:text-base mt-12 rounded-t-3xl px-4 lg:px-10 py-6 flex flex-col lg:flex-row justify-between items-center z-10"
                >
                    <div className="mb-8 lg:mb-0">
                        <strong>{introData.contact.office.title}</strong><br />
                        {introData.contact.office.lines.map((line, idx) => (
                            <span key={idx}>{line}<br /></span>
                        ))}
                    </div>

                    <div className="mb-8 lg:mb-0">
                        <strong>{introData.contact.website.title}</strong><br />
                        <a href={introData.contact.website.url} className="text-white ">
                            {introData.contact.website.label}
                        </a>
                    </div>

                    <div>
                        <strong>{introData.contact.email.title}</strong><br />
                        <a href={`mailto:${introData.contact.email.address}`} className="text-white">
                            {introData.contact.email.address}
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default Intro;
