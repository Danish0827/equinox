import React from 'react'

const Info = () => {
    const categories = [
        { name: "Character Rigging", icon: "/3dModeling/cubes.png" },
        { name: "Facial Animation", icon: "/3dModeling/cubes.png" },
        { name: "Motion Capture", icon: "/3dModeling/cubes.png" },
        { name: "Physics Simulation", icon: "/3dModeling/cubes.png" },
        { name: "Game Animation", icon: "/3dModeling/cubes.png" },
        { name: "Character Rigging", icon: "/3dModeling/cubes.png" },
        { name: "Facial Animation", icon: "/3dModeling/cubes.png" },
        { name: "Motion Capture", icon: "F/3dModeling/cubes.png" },
        { name: "Physics Simulation", icon: "/3dModeling/cubes.png" },
        { name: "Game Animation", icon: "/3dModeling/cubes.png" },
    ]
    return (
        <div className="pt-16 relative overflow-hidden min-h-screen bg-gradient-to-tr from-[#11071f] via-[#11071f] to-[#210a42] text-white">

            <div className="flex flex-col items-center gap-10 w-full max-w-7xl">
                <h2 className="text-4xl font-semibold border-b-2 border-cyan-400 shadow-lg pb-2 mb-10 text-center">
                    dasd
                </h2>
            </div>
            <div
                style={{
                    boxShadow:
                        'rgb(146 146 167 / 25%) 0px 0px 5px 9px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px 2064px inset',
                }}
                className="relative z-40 lg:max-w-6xl mx-auto w-full bg-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 border border-cyan-400 p-8 rounded-xl"
            >
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className="py-5 flex flex-col items-center justify-center text-white text-sm font-medium rounded-lg"
                    >
                        <img
                            src={category.icon}
                            alt={category.name}
                            className="h-10 mb-2 fade-item"
                        />
                        <div className="text-center">{category.name}</div>
                    </div>
                ))}
            </div>




            <div
                className={`absolute -bottom-10 -right-44 rotate-12 z-30 `}
            >
                <img src="/bottom-earth.png" alt="equinox" className="h fade-item" />
            </div>

        </div>
    )
}

export default Info