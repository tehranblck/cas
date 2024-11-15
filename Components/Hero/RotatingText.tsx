// RotatingTextCircle.tsx
'use client';
import React, { useEffect } from 'react';

const RotatingTextCircle: React.FC = () => {
    useEffect(() => {
        const text = document.querySelector('.text p') as HTMLElement;
        if (text) {
            text.innerHTML = text.innerText
                .split("")
                .map(
                    (char, i) =>
                        `<span style="transform:rotate(${i * 8.1}deg)">${char}</span>`
                )
                .join("");
        }
    }, []);

    return (
        <div className="circle">
            <div className="logo"></div>
            <div className="text">
                <p> D I S C O V E R - D I S C O V E R -  D I S C  </p>
            </div>
        </div>
    );
};

export default RotatingTextCircle;
