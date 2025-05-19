"use client";
import { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

const categories = [
    { id: "all", name: "전체" },
    { id: "pool", name: "다이빙 풀장" },
    { id: "tour", name: "투어" }
];

function getAltText(alt: string) {
    // 확장자 제거 및 보기 좋게 변환
    return alt.replace(/\.[^/.]+$/, "");
}

const galleryImages = [


    { src: "/image/gallery/tour/투어 - 일본 요론섬 1.jpeg", alt: "일본 요론섬", category: "tour" },
    { src: "/image/gallery/tour/투어 - 일본 요론섬 2.jpeg", alt: "일본 요론섬", category: "tour" },
    { src: "/image/gallery/tour/투어 - 일본 요론섬 3.jpeg", alt: "일본 요론섬", category: "tour" },
    { src: "/image/gallery/pool/풀장 - 화보 1.jpeg", alt: "화보", category: "pool" },
    { src: "/image/gallery/tour/투어 - 수심트레이닝 1.jpeg", alt: "수심트레이닝", category: "tour" },
    { src: "/image/gallery/tour/투어 - 수심트레이닝 2.jpeg", alt: "수심트레이닝", category: "tour" },
    { src: "/image/gallery/tour/투어 - 수심트레이닝 3.jpeg", alt: "수심트레이닝", category: "tour" },
    { src: "/image/gallery/pool/풀장 - 화이트밸런스 1.jpeg", alt: "화이트 밸런스 프리다이빙 대회", category: "tour" },
    { src: "/image/gallery/pool/풀장 - 딥스테이션 1.jpeg", alt: "딥스테이션", category: "pool" },
    { src: "/image/gallery/pool/풀장 - 딥스테이션 2.jpeg", alt: "딥스테이션", category: "pool" },
    { src: "/image/gallery/pool/풀장 - 패스나인 1.jpeg", alt: "패스나인", category: "pool" },
    { src: "/image/gallery/pool/풀장 - 패스나인 2.jpeg", alt: "패스나인", category: "pool" },
    { src: "/image/gallery/pool/풀장 - 두류 다이빙 풀 1.jpeg", alt: "두류 다이빙 풀", category: "pool" },
    { src: "/image/gallery/pool/풀장 - 두류 다이빙 풀 2.jpeg", alt: "두류 다이빙 풀", category: "pool" }
];

export default function GalleryPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GalleryContent />
        </Suspense>
    );
}

function GalleryContent() {
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const category = searchParams.get('category') || "all";
        setSelectedCategory(category);
    }, [searchParams]);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const filteredImages = selectedCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const defaultImagePath = "/gallery/default.jpg";

    const closeModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const handlePrevImage = useCallback(() => {
        const currentIndex = filteredImages.findIndex(img => img.src === selectedImage);
        if (currentIndex > 0) {
            setSelectedImage(filteredImages[currentIndex - 1].src);
        }
    }, [filteredImages, selectedImage]);
    const handleNextImage = useCallback(() => {
        const currentIndex = filteredImages.findIndex(img => img.src === selectedImage);
        if (currentIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentIndex + 1].src);
        }
    }, [filteredImages, selectedImage]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedImage !== null) {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                handlePrevImage();
            } else if (e.key === 'ArrowRight') {
                handleNextImage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, closeModal, handlePrevImage, handleNextImage]);

    return (
        <div className="min-h-screen">
            {/* 히어로 섹션 */}
            <div className={`relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center transition-all duration-500 ${scrolled ? 'h-[40vh] sm:h-[50vh] lg:h-[60vh]' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
                <Image
                    src="/image/gallery/hero1.png"
                    alt="갤러리 히어로 이미지"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center text-white">
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        갤러리
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto px-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        그랑블루 대구경북의 다양한 다이빙 풀장과 투어 현장을 담은 갤러리입니다.
                    </motion.p>
                </div>
            </div>

            {/* 갤러리 컨텐츠 */}
            {/* <div className="bg-white  dark:bg-gray-900"> */}
            <div className="bg-white ">
                <div className="py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* 카테고리 필터 */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 text-sm rounded-full transition-all ${selectedCategory === category.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category.name}
                                </motion.button>
                            ))}
                        </div>

                        {/* 이미지 그리드 */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.src}
                                    className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                                    onClick={() => setSelectedImage(image.src)}
                                    whileHover={{ scale: 1.03 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="font-medium">{getAltText(image.alt)}</p>
                                    </div>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image.src}
                                            alt={getAltText(image.alt)}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = defaultImagePath;
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* 이미지가 없을 때 메시지 */}
                        {filteredImages.length === 0 && (
                            <motion.div
                                className="text-center py-12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p className="text-lg text-gray-500 dark:text-gray-400">
                                    선택한 카테고리에 해당하는 이미지가 없습니다.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* 이미지 모달 */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* 이전 버튼 */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors z-10 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrevImage();
                                }}
                                disabled={filteredImages.findIndex(img => img.src === selectedImage) === 0}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* 다음 버튼 */}
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors z-10 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNextImage();
                                }}
                                disabled={filteredImages.findIndex(img => img.src === selectedImage) === filteredImages.length - 1}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button
                                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10 cursor-pointer"
                                onClick={closeModal}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-center text-gray-800 dark:text-white">
                                    {getAltText(filteredImages.find(img => img.src === selectedImage)?.alt || "이미지 제목")}
                                </h3>
                                <div className="relative w-full h-[70vh]">
                                    <Image
                                        src={filteredImages.find(img => img.src === selectedImage)?.src || defaultImagePath}
                                        alt={getAltText(filteredImages.find(img => img.src === selectedImage)?.alt || "갤러리 이미지")}
                                        fill
                                        className="object-contain"
                                        priority
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = defaultImagePath;
                                        }}
                                    />
                                </div>
                                <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {filteredImages.findIndex(img => img.src === selectedImage) + 1} / {filteredImages.length}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
