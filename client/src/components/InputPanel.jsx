import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputPanel = () => {
    const fileInputRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState('');
    const [formData, setFormData] = useState({
        mcq: '',
        fillups: '',
        oneword: '',
        short: '',
        longq: '',
        marks: ''
    });
    const [downloadLink, setDownloadLink] = useState('');
    const apiBase = import.meta.env.VITE_API_BASE_URL;

    const handleFileClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const isAllZeroOrEmpty = () => {
        const keysToCheck = ['mcq', 'fillups', 'oneword', 'short', 'longq'];
        return keysToCheck.every(key => Number(formData[key]) === 0 || formData[key] === '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const file = fileInputRef.current.files[0];

        if (!file) {
            toast.error("Please select a PDF file.", {
                position: "top-center",
                theme: "colored"
            });
            return;
        }

        if (isAllZeroOrEmpty()) {
            toast.error("Please select at least one type of question.", {
                position: "top-center",
                theme: "colored"
            });
            return;
        }

        const data = new FormData();
        data.append("file", file);
        const keys = ['mcq', 'fillups', 'oneword', 'short', 'longq'];
        keys.forEach(key => data.append(key, formData[key]));

        setDownloadLink('');
        setLoading(true);

        toast.info("Generating test, please wait...", {
            position: "top-center",
            theme: "colored",
            autoClose: 3000
        });

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 40000); 

        try {
            const res = await fetch(`${apiBase || ""}/upload`, {
                method: 'POST',
                body: data,
                signal: controller.signal
            });

            clearTimeout(timeout);

            const result = await res.json();

            if (res.ok && result.download_url) {
                const fullUrl = new URL(result.download_url, apiBase).toString();
                setDownloadLink(fullUrl);
                toast.success("Test generated successfully!", {
                    position: "top-center",
                    theme: "colored"
                });
            } else {
                console.error("Upload failed:", result);
                toast.error("Failed to generate test. Try again.", {
                    position: "top-center",
                    theme: "colored"
                });
            }
        } catch (error) {
            console.error("Error:", error);
            if (error.name === "AbortError") {
                toast.error("Server is taking too long. Please try again later.", {
                    position: "top-center",
                    theme: "colored"
                });
            } else {
                toast.error("Server error. Please try again.", {
                    position: "top-center",
                    theme: "colored"
                });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="text-white mt-10 p-4">
            <div className="text-center">
                <h2 className="lg:p-5 sm:p-2 p-1 font-bold font-poppins mb-6 leading-relaxed">
                    <span className="text-[35px] lg:text-[43px] xl:text-[64px]">You Do the </span>
                    <span className="bg-gradient-to-tr from-blue-600 to-white bg-clip-text text-transparent text-[35px] lg:text-[43px] xl:text-[64px] font-poppins font-semibold">Study</span>
                    <span className="text-[35px] lg:text-[43px] xl:text-[64px]">, We Prepare Your </span>
                    <span className="bg-gradient-to-tr from-blue-600 to-white text-[35px] lg:text-[43px] xl:text-[64px] bg-clip-text text-transparent font-poppins font-semibold">Test </span>
                </h2>
            </div>

            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-xl p-8 space-y-8 font-poppins">
                    <div className="grid sm:grid-cols-3 gap-4 text-gray-700 sm:text-lg text-base">
                        {[
                            ["mcq", "MCQ"],
                            ["fillups", "Fill-Ups"],
                            ["oneword", "One Word"],
                            ["short", "Short Questions"],
                            ["longq", "Long Questions"],
                        ].map(([id, label]) => (
                            <div key={id} className="flex flex-col ">
                                <label htmlFor={id}>{label}</label>
                                <input
                                    type="number"
                                    id={id}
                                    placeholder="0"
                                    min="0"
                                    className="w-full border rounded-md px-3 py-1"
                                    onChange={handleChange}
                                    value={formData[id]}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center border border-dashed border-gray-300 rounded-xl p-3 sm:p-6">
                        <label className="sm:text-4xl s:text-[22px] text-[18px] font-poppins text-gray-700 mb-2">
                            Upload Chapter PDF
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={handleFileClick}
                            className="bg-blue-600 text-white sm:text-xl font-poppins px-5 py-2 rounded-full hover:bg-blue-700 transition"
                        >
                            Choose File
                        </button>
                        {fileName && (
                            <p className="text-sm mt-2 text-gray-500 italic">{fileName}</p>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`text-lg font-poppins px-6 py-2 rounded-md transition text-white 
      ${loading
                                    ? "bg-gray-400 cursor-not-allowed opacity-50"
                                    : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {loading ? "Generating..." : "Generate"}
                        </button>
                    </div>

                    {downloadLink && (
                        <div className="text-center mt-4">
                            <a
                                href={downloadLink}
                                download
                                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
                            >
                                Download Test PDF
                            </a>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default InputPanel;
