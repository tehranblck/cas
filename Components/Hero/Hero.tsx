// components/Hero.tsx
'use client';
import React from 'react';
import RotatingTextCircle from './RotatingText';

const Hero = () => {
    const AnimatedSpan = 'DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER'
    const AnimatedText = AnimatedSpan.split(' ').map((text: string, index: number) => (<span style={{ transform: `rotate(${index * 10.3}deg)` }}>{text}</span>)).join('')
    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/bg-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for Video Darkening */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

            <div className="relative z-10 flex flex-col items-center">

                <h2 className='!text-8xl mb-32 text-white'>We Make Digital Ideas & PPC Marketing</h2>
                <RotatingTextCircle />


                {/* About Us Button */}
                <button className="mt-8 px-6 py-3 bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white rounded-md">
                    About Us
                </button>
            </div>
        </section>
    );
};

export default Hero;
