'use client'

import { useState, useEffect } from 'react';

export default function Home() {
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % 5); // Switch quote every 4 seconds (with 5 quotes)
        }, 4000); // Quote change every 4 seconds
        return () => clearInterval(interval);
    }, []);

    const quotes = [
        `"Code is like humor. When you have to explain it, it’s bad." – Cory House`,
        `"The best way to predict the future is to invent it." – Alan Kay`,
        `"Software is a great combination between artistry and engineering." – Bill Gates`,
        `"First, solve the problem. Then, write the code." – John Johnson`,
        `"Programs must be written for people to read, and only incidentally for machines to execute." – Harold Abelson`,
    ];

    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://www.boldplanning.com/wp-content/uploads/2016/10/iStock-628033328.jpg')",
                }}
            />

            {/* Content Section */}
            <div className="flex items-center justify-start w-full h-full px-6 sm:px-12 md:px-16 text-left">
                <div className="text-white space-y-6 w-full md:w-2/3 lg:w-1/2">
                    {/* Portfolio Introduction */}
                    <div className="bg-[#deb992] py-4 px-6 rounded-xl shadow-lg mb-6">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#d1d1d1] leading-tight tracking-widest font-bebas-neue">
                            <br />
                            Welcome to My Portfolio
                           
                        </h2>
                    </div>

                    {/* Quote Section with Italics and Styling from globals.css */}
                    <div className="bg-[#deb992] py-3 px-6 rounded-xl shadow-lg mb-6">
                        <p className="italic-quote">
                            {quotes[quoteIndex]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
