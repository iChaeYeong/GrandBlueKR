"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

// 갤러리 이미지 데이터
const galleryImages = [
    // 두류다이빙 풀 이미지 (id: 1-7)
    {
        id: 1, // 순서대로 id 부여
        src: "/image/gallery/pool/duryu/duryu1.jpg",
        alt: "대구 두류다이빙 풀",
        category: "pool",
        subcategory: "duryu",
        location: "duryu"
    },
    {
        id: 2, // 순서대로 id 부여
        src: "/image/gallery/pool/duryu/duryu2.jpg",
        alt: "대구 두류다이빙 풀",
        category: "pool",
        subcategory: "duryu",
        location: "duryu"
    },
    {
        id: 3, // 순서대로 id 부여
        src: "/image/gallery/pool/duryu/duryu3.jpg",
        alt: "대구 두류다이빙 풀",
        category: "pool",
        subcategory: "duryu",
        location: "duryu"
    },
    {
        id: 4, // 순서대로 id 부여
        src: "/image/gallery/pool/duryu/duryu4.jpg",
        alt: "대구 두류다이빙 풀",
        category: "pool",
        subcategory: "duryu",
        location: "duryu"
    },
    {
        id: 5, // 순서대로 id 부여
        src: "/image/gallery/pool/duryu/duryu5.jpg",
        alt: "대구 두류다이빙 풀",
        category: "pool",
        subcategory: "duryu",
        location: "duryu"
    },
    {
        id: 6, // 순서대로 id 부여
        src: "/image/gallery/pool/duryu/duryu6.jpg",
        alt: "대구 두류다이빙 풀",
        category: "pool",
        subcategory: "duryu",
        location: "duryu"
    },
    {
        id: 7, // 순서대로 id 부여
        src: "/image/gallery/pool/duryu/duryu7.jpg",
        alt: "대구 두류다이빙 풀",
        category: "pool",
        subcategory: "duryu",
        location: "duryu"
    },

    // 알프스다이빙 이미지 (id: 8-11)
    {
        id: 8, // 순서대로 id 부여
        src: "/image/gallery/pool/alpsdiving/alpsdiving1.jpg",
        alt: "대전 알프스",
        category: "pool",
        subcategory: "alpsdiving",
        location: "알프스다이빙"
    },
    {
        id: 9, // 순서대로 id 부여
        src: "/image/gallery/pool/alpsdiving/alpsdiving2.jpg",
        alt: "대전 알프스",
        category: "pool",
        subcategory: "alpsdiving",
        location: "알프스다이빙"
    },
    {
        id: 10, // 순서대로 id 부여
        src: "/image/gallery/pool/alpsdiving/alpsdiving3.jpg",
        alt: "대전 알프스",
        category: "pool",
        subcategory: "alpsdiving",
        location: "알프스다이빙"
    },
    {
        id: 11, // 순서대로 id 부여
        src: "/image/gallery/pool/alpsdiving/alpsdiving4.jpg",
        alt: "대전 알프스",
        category: "pool",
        subcategory: "alpsdiving",
        location: "알프스다이빙"
    },

    // 딥스테이션 이미지 (id: 12-16)
    {
        id: 12, // 순서대로 id 부여
        src: "/image/gallery/pool/deepstation/deepstation1.jpg",
        alt: "용인 딥스테이션",
        category: "pool",
        subcategory: "deepstation",
        location: "deepstation"
    },
    {
        id: 13, // 순서대로 id 부여
        src: "/image/gallery/pool/deepstation/deepstation2.jpg",
        alt: "용인 딥스테이션",
        category: "pool",
        subcategory: "deepstation",
        location: "deepstation"
    },
    {
        id: 14, // 순서대로 id 부여
        src: "/image/gallery/pool/deepstation/deepstation3.jpg",
        alt: "용인 딥스테이션",
        category: "pool",
        subcategory: "deepstation",
        location: "deepstation"
    },
    {
        id: 15, // 순서대로 id 부여
        src: "/image/gallery/pool/deepstation/deepstation4.jpg",
        alt: "용인 딥스테이션",
        category: "pool",
        subcategory: "deepstation",
        location: "deepstation"
    },
    {
        id: 16, // 순서대로 id 부여
        src: "/image/gallery/pool/deepstation/deepstation5.jpg",
        alt: "용인 딥스테이션",
        category: "pool",
        subcategory: "deepstation",
        location: "deepstation"
    },

    // 마리나 이미지 (id: 17-23)
    {
        id: 17, // 순서대로 id 부여
        src: "/image/gallery/pool/marina/marina1.jpg",
        alt: "부산 북항마리나",
        category: "pool",
        subcategory: "marina",
        location: "marina"
    },
    {
        id: 18, // 순서대로 id 부여
        src: "/image/gallery/pool/marina/marina2.jpg",
        alt: "부산 북항마리나",
        category: "pool",
        subcategory: "marina",
        location: "marina"
    },
    {
        id: 19, // 순서대로 id 부여
        src: "/image/gallery/pool/marina/marina3.jpg",
        alt: "부산 북항마리나",
        category: "pool",
        subcategory: "marina",
        location: "marina"
    },
    {
        id: 20, // 순서대로 id 부여
        src: "/image/gallery/pool/marina/marina4.jpg",
        alt: "부산 북항마리나",
        category: "pool",
        subcategory: "marina",
        location: "marina"
    },
    {
        id: 21, // 순서대로 id 부여
        src: "/image/gallery/pool/marina/marina5.jpg",
        alt: "부산 북항마리나",
        category: "pool",
        subcategory: "marina",
        location: "marina"
    },
    {
        id: 22, // 순서대로 id 부여
        src: "/image/gallery/pool/marina/marina6.jpg",
        alt: "부산 북항마리나",
        category: "pool",
        subcategory: "marina",
        location: "marina"
    },
    {
        id: 23, // 순서대로 id 부여
        src: "/image/gallery/pool/marina/marina7.jpg",
        alt: "부산 북항마리나",
        category: "pool",
        subcategory: "marina",
        location: "marina"
    },

    // 제주도 이미지 (id: 24-31)
    {
        id: 24, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/jeju/jeju1.jpg",
        alt: "국내 투어 - 제주",
        category: "tour",
        subcategory: "domestic",
        location: "제주도"
    },
    {
        id: 25, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/jeju/jeju2.jpg",
        alt: "국내 투어 - 제주",
        category: "tour",
        subcategory: "domestic",
        location: "제주도"
    },
    {
        id: 26, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/jeju/jeju3.jpg",
        alt: "국내 투어 - 제주",
        category: "tour",
        subcategory: "domestic",
        location: "제주도"
    },
    {
        id: 27, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/jeju/jeju4.jpg",
        alt: "국내 투어 - 제주",
        category: "tour",
        subcategory: "domestic",
        location: "제주도"
    },
    {
        id: 28, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/jeju/jeju5.jpg",
        alt: "국내 투어 - 제주",
        category: "tour",
        subcategory: "domestic",
        location: "제주도"
    },
    {
        id: 29, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/jeju/jeju6.jpg",
        alt: "국내 투어 - 제주",
        category: "tour",
        subcategory: "domestic",
        location: "제주도"
    },
    {
        id: 30, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/jeju/jeju7.jpg",
        alt: "국내 투어 - 제주",
        category: "tour",
        subcategory: "domestic",
        location: "제주도"
    },
    {
        id: 31, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/jeju/jeju8.jpg",
        alt: "국내 투어 - 제주",
        category: "tour",
        subcategory: "domestic",
        location: "제주도"
    },

    // 울릉도 이미지 (id: 32-34)
    {
        id: 32, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/ulleungdo/ulleungdo1.jpg",
        alt: "국내투어 - 울릉도",
        category: "tour",
        subcategory: "domestic",
        location: "울릉도"
    },
    {
        id: 33, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/ulleungdo/ulleungdo2.jpg",
        alt: "국내투어 - 울릉도",
        category: "tour",
        subcategory: "domestic",
        location: "울릉도"
    },
    {
        id: 34, // 순서대로 id 부여
        src: "/image/gallery/tour/domestic/ulleungdo/ulleungdo3.jpg",
        alt: "국내투어 - 울릉도",
        category: "tour",
        subcategory: "domestic",
        location: "울릉도"
    },

    // 보홀 이미지 (id: 35-36)
    {
        id: 35, // 순서대로 id 부여
        src: "/image/gallery/tour/overseas/bohol/bohol1.jpg",
        alt: "해외 투어 - 보홀",
        category: "tour",
        subcategory: "overseas",
        location: "보홀"
    },
    {
        id: 36, // 순서대로 id 부여
        src: "/image/gallery/tour/overseas/bohol/bohol2.jpg",
        alt: "해외 투어 - 보홀",
        category: "tour",
        subcategory: "overseas",
        location: "보홀"
    }
    // 파라다이브 이미지는 주석 처리됨
    // {
    //     id: 37, // 순서대로 id 부여 (필요시 사용 가능)
    //     src: "/gallery/pool6.jpg",
    //     alt: "시흥 파라다이브",
    //     category: "pool",
    //     subcategory: "paradive",
    //     location: "파라다이브"
    // },
];

// 카테고리 필터 옵션
const categories = [
    { id: "all", name: "전체" },
    { id: "pool", name: "다이빙 풀장" },
    { id: "tour", name: "투어" }
];

// 다이빙 풀장 서브카테고리
const poolSubcategories = [
    { id: "all", name: "전체" },
    { id: "duryu", name: "대구 두류다이빙 풀" },
    { id: "passnine", name: "구미 패스나인" },
    { id: "alpsdiving", name: "대전 알프스" },
    { id: "marina", name: "부산 북항마리나" },
    { id: "deepstation", name: "용인 딥스테이션" },
    { id: "paradive", name: "시흥 파라다이브" }
];

// 투어 서브카테고리
const tourSubcategories = [
    { id: "all", name: "전체" },
    { id: "domestic", name: "국내 투어" },
    { id: "overseas", name: "해외 투어" }
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
    const [selectedSubcategory, setSelectedSubcategory] = useState("all");
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [scrolled, setScrolled] = useState(false);

    // URL 파라미터에서 카테고리, 서브카테고리, location 가져오기
    useEffect(() => {
        const category = searchParams.get('category') || "all";
        const subcategory = searchParams.get('subcategory') || "all";
        const location = searchParams.get('location') || "all";

        setSelectedCategory(category);
        setSelectedSubcategory(subcategory);
        setSelectedLocation(location);
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

    // 선택된 카테고리, 서브카테고리, location에 따라 이미지 필터링 후 ID 역순 정렬
    const filteredImages = galleryImages.filter(img => {
        // 카테고리 필터링
        if (selectedCategory === "all") return true;
        if (img.category !== selectedCategory) return false;

        // 서브카테고리 필터링
        if (selectedSubcategory !== "all") {
            if (img.subcategory !== selectedSubcategory) return false;

            // 서브카테고리가 선택되고 tour 카테고리인 경우에만 location 필터 적용
            if (selectedCategory === 'tour' && selectedLocation !== "all") {
                return img.location === selectedLocation;
            }
        }

        // 모든 필터 통과
        return true;
    }).sort((a, b) => b.id - a.id);

    // 현재 선택된 카테고리에 맞는 서브카테고리 옵션 가져오기
    const getSubcategories = () => {
        if (selectedCategory === "pool") return poolSubcategories;
        if (selectedCategory === "tour") return tourSubcategories;
        return [];
    };

    // 'tour' 카테고리 + 선택된 서브카테고리에 해당하는 고유한 location 목록 가져오기
    const getLocations = () => {
        if (selectedCategory !== 'tour' || selectedSubcategory === 'all') {
            return [];
        }
        // 선택된 서브카테고리에 해당하는 이미지들의 location 값만 추출
        const locationsForSubcategory = galleryImages
            .filter(img => img.category === 'tour' && img.subcategory === selectedSubcategory && img.location)
            .map(img => img.location);
        // 중복 제거하고 '전체' 옵션 추가
        const uniqueLocations = [...new Set(locationsForSubcategory)];
        // 실제 location 값을 이름으로 사용 (예: 'jeju' -> '제주') - 이 부분은 데이터에 따라 커스터마이징 필요
        const locationOptions = uniqueLocations.map(loc => ({ id: loc, name: loc })); // 임시로 id와 name 동일하게 설정
        return [{ id: "all", name: "전체" }, ...locationOptions];
    };

    // 카테고리 변경 시 서브카테고리 및 location 초기화
    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId);
        setSelectedSubcategory("all");
        setSelectedLocation("all");

        // URL 업데이트
        const url = new URL(window.location.href);
        url.searchParams.set('category', categoryId);
        url.searchParams.delete('subcategory');
        url.searchParams.delete('location');
        window.history.pushState({}, '', url.toString());
    };

    // 서브카테고리 변경 시 location 초기화 및 URL 업데이트
    const handleSubcategoryChange = (subcategoryId: string) => {
        setSelectedSubcategory(subcategoryId);
        setSelectedLocation("all");

        // URL 업데이트
        const url = new URL(window.location.href);
        url.searchParams.set('subcategory', subcategoryId);
        url.searchParams.delete('location');
        window.history.pushState({}, '', url.toString());
    };

    // Location 변경 시 URL 업데이트
    const handleLocationChange = (locationId: string) => {
        setSelectedLocation(locationId);

        // URL 업데이트
        const url = new URL(window.location.href);
        url.searchParams.set('location', locationId);
        window.history.pushState({}, '', url.toString());
    };

    // 선택된 이미지 정보 가져오기
    const getSelectedImageInfo = () => {
        if (selectedImage === null) return null;
        return galleryImages.find(img => img.id === selectedImage) || null;
    };

    // 기본 이미지 경로 (이미지가 없을 때 사용)
    const defaultImagePath = "/gallery/default.jpg";

    // 이미지 모달 닫기
    const closeModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    // 이전 이미지로 이동
    const handlePrevImage = useCallback(() => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
        if (currentIndex > 0) {
            setSelectedImage(filteredImages[currentIndex - 1].id);
        }
    }, [filteredImages, selectedImage]);

    // 다음 이미지로 이동
    const handleNextImage = useCallback(() => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
        if (currentIndex < filteredImages.length - 1) {
            setSelectedImage(filteredImages[currentIndex + 1].id);
        }
    }, [filteredImages, selectedImage]);

    // 키보드 이벤트 처리 (ESC 키로 모달 닫기, 화살표 키로 이미지 이동)
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
            <div className="bg-white dark:bg-gray-900">
                <div className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        {/* 카테고리 필터 */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => handleCategoryChange(category.id)}
                                    className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category.id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category.name}
                                </motion.button>
                            ))}
                        </div>

                        {/* 서브카테고리 필터 */}
                        {selectedCategory !== "all" && getSubcategories().length > 0 && (
                            <motion.div
                                className="flex flex-wrap justify-center gap-2 mb-12"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {getSubcategories().map((subcategory) => (
                                    <motion.button
                                        key={subcategory.id}
                                        onClick={() => handleSubcategoryChange(subcategory.id)}
                                        className={`px-4 py-1 text-sm rounded-full transition-all ${selectedSubcategory === subcategory.id
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {subcategory.name}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        {/* Location 필터 (투어 카테고리의 서브카테고리 선택 시) */}
                        {selectedCategory === 'tour' && selectedSubcategory !== 'all' && getLocations().length > 1 && (
                            <motion.div
                                className="flex flex-wrap justify-center gap-1 mb-12"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {getLocations().map((location) => (
                                    <motion.button
                                        key={location.id}
                                        onClick={() => handleLocationChange(location.id)}
                                        className={`px-3 py-1 text-xs rounded-full transition-all ${selectedLocation === location.id
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {location.name.charAt(0).toUpperCase() + location.name.slice(1)}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        {/* 이미지 그리드 */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                                    onClick={() => setSelectedImage(image.id)}
                                    whileHover={{ scale: 1.03 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="font-medium">{image.alt}</p>
                                    </div>
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                // 이미지 로드 실패 시 기본 이미지로 대체
                                                const target = e.target as HTMLImageElement;
                                                target.src = defaultImagePath;
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* 이미지가 없을 때 표시할 메시지 */}
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
                                disabled={filteredImages.findIndex(img => img.id === selectedImage) === 0}
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
                                disabled={filteredImages.findIndex(img => img.id === selectedImage) === filteredImages.length - 1}
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
                                    {getSelectedImageInfo()?.alt || "이미지 제목"}
                                </h3>
                                <div className="relative w-full h-[70vh]">
                                    <Image
                                        src={getSelectedImageInfo()?.src || defaultImagePath}
                                        alt={getSelectedImageInfo()?.alt || "갤러리 이미지"}
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
                                    {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
