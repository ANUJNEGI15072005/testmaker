import React from 'react';

const Footer = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-black to-blue-900 text-white mt-8 py-10 px-6 md:px-16">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                        About Test
                        <span className="bg-gradient-to-tr from-blue-600 to-white bg-clip-text text-transparent">
                            Maker
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-poppins">
                        Test Maker is a powerful, AI-driven tool designed to help students and educators create high-quality test papers in minutes. Whether you're preparing for competitive exams or conducting class assessments, our platform streamlines the process by offering intelligent question generation, secure handling of your content, and instant downloads in multiple formats.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 font-poppins">
                        We believe in saving time without compromising quality. With our modern interface and smart technology, Test Maker transforms the way you approach tests — making it faster, smarter, and stress-free.
                    </p>
                    <p className="text-base md:text-xl text-gray-400 leading-relaxed mt-10 font-poppins">
                        Built by <span className="font-semibold text-white">Anuj Negi</span>, a passionate Web Developer.
                        You can explore more of my work on{" "}
                        <a
                            href="https://github.com/ANUJNEGI15072005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            GitHub
                        </a>{" "}
                        or connect with me on{" "}
                        <a
                            href="https://www.linkedin.com/in/anuj-negi-b78910320/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            LinkedIn
                        </a>.
                    </p>
                    <p className="text-base text-gray-400 italic mt-6">
          <span className='text-white'>Note:</span> This project is currently in the beta stage and under active development. Use it for testing or exploration purposes only.
        </p>
                </div>
            </section>

            {/* <footer className="w-full text-white text-center py-4 mt-10 font-poppins text-base md:text-base">
                &copy; {new Date().getFullYear()} Test Maker. All rights reserved.
            </footer> */}
        </>
    );
};

export default Footer;
