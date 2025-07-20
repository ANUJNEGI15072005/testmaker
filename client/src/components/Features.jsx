import { FaBrain, FaCogs, FaFileAlt, FaDownload, FaLock } from "react-icons/fa";

const features = [
    { icon: <FaBrain sm:size={38} size={65} />, title: "AI-Generated", description: "Our system uses advanced AI to automatically generate custom test papers based on your subject, level, and preferences — saving hours of manual effort." },
    { icon: <FaFileAlt sm:size={35} size={60} />, title: "Formattable", description: "Export your tests in various formats like PDF, DOCX, or plain text — compatible with all major platforms and easy to customize." },
    { icon: <FaDownload sm:size={35} size={60} />, title: "Downloadable", description: "Instantly download your generated test papers in just one click, making it easy to print or share them with students and colleagues." },
    { icon: <FaLock sm:size={35} size={60} />, title: "Secure", description: "All your data is encrypted and stored securely, ensuring your content and student information remains private and protected at all times." },
];

const Features = () => {
    return (
        <section className="text-white mt-16  p-5 ">
            <div className="sm:block hidden">
                <div className="grid xl:grid-cols-4 grid-cols-2 gap-6 place-items-start">
                    {features.map((feature, i) => (
                        <div key={i} className="text-center flex justify-start items-center">
                            <div className="sm:min-w-72 sm:min-h-80  bg-gradient-to-tr from-black to-blue-950 rounded-lg text-center shadow-lg p-4 hover:scale-105 transition-all duration-300">
                                <div className="flex items-center justify-center mt-2">
                                    <div className="text-white">{feature.icon}</div>
                                    <div className="sm:text-[22px] text-[18px] px-4 font-lilita font-semibold mt-2">{feature.title}</div>
                                </div>
                                <div className="text-white mt-2 p-2 sm:text-xl text-base text-center">
                                    <p className="leading-">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sm:hidden flex justify-center items-center">
                <div className="grid grid-cols-2 gap-6 place-items-center">
                    {features.map((feature, i) => (
                        <div key={i} className="text-center">
                            <div className="w-[120px] h-[120px]  bg-gradient-to-tr from-black to-blue-950 rounded-full text-center shadow-lg p-4 hover:scale-105 transition-all duration-300">
                                <div className="flex items-center justify-center mt-2">
                                    <div className="text-white">{feature.icon}</div>
                                </div>
                            </div>
                            <div className="s:text-[15px] text-[14px] px-4 font-lilita font-semibold mt-2">{feature.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Features;
