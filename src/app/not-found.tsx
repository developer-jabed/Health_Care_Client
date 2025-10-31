"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

// Generate star positions outside the component render
const stars = Array.from({ length: 20 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 2,
}));

const NotFound = () => {
    const router = useRouter();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const orbRef1 = useRef<HTMLDivElement>(null);
    const orbRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
        );

        gsap.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 50, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.3, ease: "power3.out" }
        );

        gsap.fromTo(
            buttonRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "back.out(1.7)" }
        );

        gsap.to([orbRef1.current, orbRef2.current], {
            y: 20,
            repeat: -1,
            yoyo: true,
            duration: 3,
            ease: "sine.inOut",
        });
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
            <div
                ref={orbRef1}
                className="absolute top-10 left-10 w-32 h-32 bg-pink-200/40 dark:bg-pink-700/30 rounded-full blur-3xl animate-spin-slow"
            />
            <div
                ref={orbRef2}
                className="absolute bottom-20 right-20 w-48 h-48 bg-blue-200/40 dark:bg-blue-700/30 rounded-full blur-3xl animate-spin-slow"
            />

            <div className="relative z-10 text-center px-4">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-4"
                >
                    404
                </h1>
                <h2
                    ref={subtitleRef}
                    className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
                >
                    Oops! Page Not Found
                </h2>

                <button
                    ref={buttonRef}
                    onClick={() => router.push("/")}
                    className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                    Back to Home
                </button>
            </div>

            {/* Stars */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                {stars.map((star, i) => (
                    <div
                        key={i}
                        className="absolute bg-yellow-300 dark:bg-yellow-400 w-2 h-2 rounded-full animate-pulse"
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default NotFound;
