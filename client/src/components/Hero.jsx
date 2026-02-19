const Hero = () => {
    return (
        <section className="text-white mt-10 flex justify-center text-left sm:text-center px-4 md:px-8">
            <div className="max-w-8xl">
                <div className="py-3">
                    <span className="text-[15px] s:text-[18px] sm:text-[20px] lg:text-[25px] px-4 py-2 font-poppins rounded-lg bg-gradient-to-bl from-blue-950 to-black inline-block">
                        AI-powered <span className="text-gray-300">Test Paper </span>Generator
                    </span>
                </div>
                <div className="sm:block hidden">
                    <p className="px-2 leading-snug font-poppins font-semibold">
                        <span className="sm:text-[38px] lg:text-[48px] xl:text-[72px]">Your </span>
                        <span className="bg-gradient-to-tr from-blue-600 to-white bg-clip-text text-transparent sm:text-[38px] xl:text-[72px] lg:text-[48px] font-poppins font-semibold">AI </span>
                        <span className="sm:text-[38px] xl:text-[72px] lg:text-[48px]">Co-Teacher </span>
                        <span className="sm:text-[38px] xl:text-[72px] lg:text-[48px]">for </span>
                        <span className="bg-gradient-to-tr from-blue-600 to-white lg:text-[48px]px] sm:text-[38px] xl:text-[72px] bg-clip-text text-transparent font-poppins font-semibold">Test Papers.</span>
                    </p>
                </div>
                <div className="sm:hidden flex justify-start text-left">
                    <p className="text-[33px] s:text-[40px] leading-snug font-poppins font-semibold">
                        <span className="">Your </span>
                        <span className="bg-gradient-to-tr from-blue-600 to-white bg-clip-text text-transparent font-poppins font-semibold">AI </span> <br />
                        <span className="">Co-Teacher </span> <br />
                        <span className="">for </span>
                        <span className="bg-gradient-to-tr from-blue-600 to-white bg-clip-text text-transparent font-poppins font-semibold">Test Papers.</span>
                    </p>
                </div>
                <div className="flex justify-center mt-2">
                    <p className="text-lg sm:text-[18px] xl:text-2xl lg:text-[22px]  font-poppins text-gray-300 sm:text-center text-left leading-relaxed lg:max-w-3xl xl:max-w-5xl">
                        Create fully customized test papers in just a few clicks with AI-powered intelligence. From multiple-choice to short and long answers, generate questions tailored to any subject or grade level. Designed for educators, students, and institutions who value speed, accuracy, and smart automation. Let your AI co-teacher handle the heavy lifting while you focus on what truly matters — teaching and learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

