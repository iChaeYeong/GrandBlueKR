"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SlideContent {
    title: string;
    description: string;
    image: string;
}

interface SliderProps {
    slides: SlideContent[];
}

export default function Slider({ slides }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

    const startTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % slides.length);
        }, 10000);
    }, [slides.length]);

    const changeSlide = useCallback((newIndex: number) => {
        setCurrentIndex(newIndex);
        startTimer();
    }, [startTimer]);

    useEffect(() => {
        startTimer();
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [startTimer]);

    return (
        <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0">
                <motion.div
                    className="relative flex w-full h-full"
                    animate={{ x: `${-currentIndex * 100}%` }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 relative"
                        >
                            <Image
                                src={slide.image}
                                alt={`슬라이드 이미지 ${index + 1}`}
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover object-[55%_center]"
                                quality={100}
                            />
                            {/* 이미지 위에 그라데이션 오버레이 */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30" />

                            {/* 텍스트 컨텐츠 */}
                            <div className="absolute inset-0 flex flex-col justify-center px-20">
                                <AnimatePresence mode="wait">
                                    {index === currentIndex && (
                                        <motion.div
                                            key={`content-${index}`}
                                            className="space-y-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: "easeOut",
                                                    delay: 0.5
                                                }
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -20,
                                                transition: {
                                                    duration: 0.5,
                                                    ease: "easeIn"
                                                }
                                            }}
                                        >
                                            <motion.h1
                                                className="text-3xl sm:text-6xl lg:text-7xl font-bold text-white"
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: "easeOut",
                                                        delay: 0.7
                                                    }
                                                }}
                                            >
                                                {slide.title}
                                            </motion.h1>
                                            <motion.p
                                                className="text-l sm:text-2xl text-white/90"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: {
                                                        duration: 0.8,
                                                        ease: "easeOut",
                                                        delay: 0.9
                                                    }
                                                }}
                                            >
                                                {slide.description}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* 네비게이션 버튼 */}
            <button
                className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white opacity-50 hover:opacity-100 transition-all z-10 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 cursor-pointer"
                onClick={() => changeSlide((currentIndex - 1 + slides.length) % slides.length)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white opacity-50 hover:opacity-100 transition-all z-10 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 cursor-pointer"
                onClick={() => changeSlide((currentIndex + 1) % slides.length)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* 인디케이터 */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-10 px-6 py-4 rounded-full bg-black/20 backdrop-blur-sm">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 rounded-full transition-all cursor-pointer ${index === currentIndex
                            ? "w-8 bg-white"
                            : "w-2 bg-white/50 hover:bg-white/70"
                            }`}
                        onClick={() => changeSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
} 