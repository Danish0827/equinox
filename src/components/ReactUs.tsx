import { useEffect, useRef } from "react";
import gsap from "gsap";
import { introData } from "../lib/Data";

const ReactUs = () => {
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
        tl.fromTo(bottomRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, 0.6);
    }, []);
    return (
        <div className="pt-16 relative overflow-hidden  bg-gradient-to-b from-[#1a002c] via-[#23134b] to-[#1a002c] text-white">
            <div className="flex flex-col items-center gap-10 w-full max-w-7xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold border-b-2 border-cyan-400 shadow-lg pb-2  text-center">
                    SAY HELLO TO REACH US
                </h2>
            </div>
            <div
            style={{boxShadow: 'rgb(222 241 255 / 30%) 0px 1px 2px 0px, rgb(255 255 255 / 15%) 0px 2px 6px 2px'}}
                ref={bottomRef}
                className="bg-[#1e1e3f] shadow-2xl text-center text-sm md:text-base mt-12 px-4 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center z-10"
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


export default ReactUs