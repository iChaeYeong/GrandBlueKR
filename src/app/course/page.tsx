"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PackageOption {
    id: string;
    name: string;
    duration: string;
    originalPrice: string;
    packagePrice: string;
    description: string;
}

interface MermaidOption {
    id: string;
    name: string;
    duration: string;
    price: string;
    description: string;
}

interface ScubaOption {
    id: string;
    name: string;
    duration: string;
    price: string;
    description: string;
}

interface Course {
    id: string;
    name: string;
    depth: string;
    duration: string;
    description: string;
    image: string;
    certifications: string[];
    price?: string;
    isPackage?: boolean;
    packageOptions?: PackageOption[];
    originalPrice?: string;
    packagePrice?: string;
    isMermaid?: boolean;
    mermaidOptions?: MermaidOption[];
    isScuba?: boolean;
    scubaOptions?: ScubaOption[];
}

export default function CoursePage() {
    // 현재 활성화된 섹션 추적
    const [activeSection, setActiveSection] = useState('experience');
    const [selectedPackage, setSelectedPackage] = useState('package12');
    const [selectedMermaid, setSelectedMermaid] = useState('mermaid1');
    const [selectedScuba, setSelectedScuba] = useState('scuba1');

    // 스크롤 이벤트 핸들러
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach((section) => {
                if (section instanceof HTMLElement) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 스크롤 핸들러
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // 상단 메뉴 높이만큼 오프셋
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    // 과정 데이터
    const courses: Course[] = [
        {
            id: "experience",
            name: "체험 다이빙",
            depth: "#",
            duration: "1일",
            description: "프리다이빙을 처음 접하는 분들을 위한 체험 과정입니다. 기본적인 장비 사용법과 호흡법을 배우고 풀장에서 안전하게 프리다이빙을 체험해볼 수 있습니다.",
            image: "/image/course/experience.jpg",
            certifications: [],
            price: "50,000 ₩"
        },
        {
            id: "lv1",
            name: "Lv.1",
            depth: "#",
            duration: "1일",
            description: "프리다이빙의 기초를 배우는 과정으로, 기본적인 안전 수칙과 호흡법을 학습합니다. 수면 호흡법, 덕다이빙 기술, 기초 피닝 등을 배우게 됩니다.",
            image: "/image/course/Lv1.jpg",
            certifications: ["AIDA", "PSA"],
            price: "100,000 ₩"
        },
        {
            id: "lv2",
            name: "Lv.2",
            depth: "#",
            duration: "3일",
            description: "심화된 프리다이빙 기술을 배우며, 더 깊은 수심에서의 다이빙을 연습합니다. 프리폴링 기술과 고급 피닝 기술을 습득하게 됩니다.",
            image: "/image/course/Lv2.jpg",
            certifications: ["AIDA", "PSA"],
            price: "350,000 ₩"
        },
        {
            id: "lv3",
            name: "Lv.3",
            depth: "#",
            duration: "3일",
            description: "고급 프리다이빙 기술을 습득하고, 깊은 수심에서의 안전한 다이빙을 위한 과정입니다. 마우스필 기술과 고급 이퀄라이제이션을 학습합니다.",
            image: "/image/course/Lv3.jpeg",
            certifications: ["AIDA", "PSA"],
            price: "550,000 ₩"
        },
        {
            id: "lv4",
            name: "Lv.4",
            depth: "#",
            duration: "4일",
            description: "전문적인 프리다이버가 되기 위한 과정으로, 극한의 수심에서도 안전하게 다이빙할 수 있는 능력을 기릅니다.",
            image: "/image/course/Lv4.jpeg",
            certifications: ["AIDA", "PSA"],
            price: "750,000 ₩"
        },
        {
            id: "instructor",
            name: "Instructor",
            depth: "#",
            duration: "7일",
            description: "프리다이빙 강사가 되기 위한 전문 교육 과정입니다. 교육 방법론과 안전 관리, 응급 처치 등을 심도 있게 학습합니다.",
            image: "/image/course/Instructor.jpeg",
            certifications: ["PSA"],
            price: "1,500,000 ₩"
        },
        {
            id: "package",
            name: "Package",
            depth: "#",
            duration: "기간 선택",
            description: "여러 레벨의 과정을 한 번에 수강하여 더 효율적으로 프리다이빙을 배워보세요. 패키지로 신청하시면 할인된 가격으로 수강하실 수 있습니다.",
            image: "/image/course/package2.jpg",
            certifications: ["AIDA", "PSA"],
            isPackage: true,
            packageOptions: [
                {
                    id: "package12",
                    name: "Level 1 + 2 패키지",
                    duration: "3일",
                    originalPrice: "450,000 ₩",
                    packagePrice: "350,000 ₩",
                    description: "기초부터 중급 과정까지 한 번에 완성하는 패키지입니다."
                },
                {
                    id: "package123",
                    name: "Level 1 + 2 + 3 패키지",
                    duration: "6일",
                    originalPrice: "1,000,000 ₩",
                    packagePrice: "800,000 ₩",
                    description: "기초부터 상급 과정까지 한 번에 완성하는 패키지입니다."
                },
                {
                    id: "package23",
                    name: "Level 2 + 3 패키지",
                    duration: "6일",
                    originalPrice: "# ₩",
                    packagePrice: "# ₩",
                    description: "기초부터 상급 과정까지 한 번에 완성하는 패키지입니다."
                },
                {
                    id: "package1234",
                    name: "Level 1 + 2 + 3 + 4 패키지",
                    duration: "6일",
                    originalPrice: "# ₩",
                    packagePrice: "# ₩",
                    description: "기초부터 상급 과정까지 한 번에 완성하는 패키지입니다."
                },
                {
                    id: "package234",
                    name: "Level 2 + 3 +4 패키지",
                    duration: "6일",
                    originalPrice: "# ₩",
                    packagePrice: "# ₩",
                    description: "기초부터 상급 과정까지 한 번에 완성하는 패키지입니다."
                },
                {
                    id: "package34",
                    name: "Level 3 + 4 패키지",
                    duration: "7일",
                    originalPrice: "1,300,000 ₩",
                    packagePrice: "1,100,000 ₩",
                    description: "상급 과정부터 고급 과정까지 한 번에 완성하는 패키지입니다."
                }

            ]
        },
        {
            id: "mermaid",
            name: "Mermaid",
            depth: "#",
            duration: "기간 선택",
            description: "인어와 같은 아름다운 수중 동작을 배우며, 프리다이빙의 즐거움을 경험하는 과정입니다. 기초부터 고급 과정까지 단계별로 학습할 수 있습니다.",
            image: "/image/course/mermaid.jpg",
            certifications: ["PSA"],
            isMermaid: true,
            mermaidOptions: [
                {
                    id: "mermaid1",
                    name: "체험 (3시간)",
                    duration: "3시간",
                    price: "80,000 ₩",
                    description: "수중공연에 필요한 움직임 체험해보기,가라앉기, 인어꼬리 착용해보기, 수중포즈취해보기"
                },
                {
                    id: "mermaid2",
                    name: "베이직머메이드(3시간)",
                    duration: "3시간",
                    price: "250,000 ₩",
                    description: "얕믄물에서 수중 공연시 필요한 기본적인 기술과 안전기술 배워보기"
                },
                {
                    id: "mermaid3",
                    name: "머메이드 (이론+풀장 2회)",
                    duration: "6시간",
                    price: "300,000 ₩",
                    description: "다양한 수중기술과 안전기술을 직접 수행"
                },
                {
                    id: "mermaid4",
                    name: "오션 머메이드 (이론+풀장 3회)",
                    duration: "9시간",
                    price: "400,000 ₩",
                    description: "심화된 기술을 깊은물에서 시행,저항과 동작이 제한되는 아웃핏 착용후 기술 구사, 작품 만들어보기, 버디 구조하기"
                }
            ]
        },
        {
            id: "scuba",
            name: "Scuba",
            depth: "#",
            duration: "기간 선택",
            description: "스쿠버다이빙의 기초부터 전문가 과정까지 체계적으로 배울 수 있는 과정입니다. 안전하고 즐거운 수중 활동을 위한 필수 교육입니다.",
            image: "/image/course/scuba.jpg",
            certifications: ["PSA"],
            isScuba: true,
            scubaOptions: [
                {
                    id: "scuba1",
                    name: "체험 다이빙",
                    duration: "3시간",
                    price: "80,000 ₩",
                    description: "스쿠버다이빙을 처음 접하는 분들을 위한 체험 과정입니다."
                },
                {
                    id: "scuba2",
                    name: "오픈워터",
                    duration: "#일",
                    price: "500,000 ₩",
                    description: "스쿠버다이빙의 기초를 배우는 자격증 과정입니다."
                },
                {
                    id: "scuba3",
                    name: "어드밴스드 오픈워터",
                    duration: "#일",
                    price: "800,000 ₩",
                    description: "다양한 환경에서의 다이빙 기술을 배우는 과정입니다."
                },
                {
                    id: "scuba4",
                    name: "레스큐 다이버",
                    duration: "#일",
                    price: "400,000 ₩",
                    description: "응급 상황 대처와 구조 기술을 배우는 과정입니다."
                }
            ]
        },
        {
            id: "ERP",
            name: "ERP 응급처치",
            depth: "#",
            duration: "#일",
            description: "####",
            image: "/image/course/erp.jpg",
            certifications: ["PSA"],
            price: "250,000 ₩"
        }
    ];

    return (
        <main className="bg-white w-full overflow-x-hidden">
            {/* 히어로 섹션 */}
            <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
                <Image
                    src="/image/course/hero.jpg"
                    alt="교육 과정 소개 배경 이미지"
                    fill
                    className="object-cover object-[center_50%]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white px-4"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">교육 과정</h1>
                        <p className="text-lg sm:text-xl text-white/90">체계적이고 전문적인 교육 과정을 소개합니다</p>
                    </motion.div>
                </div>
            </section>

            {/* 과정 선택 메뉴 */}
            <nav className="py-8 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* 갤러리 스타일 버튼 메뉴 */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {courses.map((course) => (
                            <motion.button
                                key={course.id}
                                onClick={() => scrollToSection(course.id)}
                                className={`px-4 py-2 text-sm rounded-full transition-all ${activeSection === course.id
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {course.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* 과정 소개 섹션 */}
            {courses.map((course) => (
                <section
                    key={course.id}
                    id={course.id}
                    className="min-h-screen py-20 flex items-center"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* 이미지 섹션 */}
                                <div className="relative h-[300px] lg:h-full min-h-[500px]">
                                    <Image
                                        src={course.image}
                                        alt={`${course.name} 과정 이미지`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* 내용 섹션 */}
                                <div className="p-8 lg:p-12 flex flex-col">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                        {course.name}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 flex-grow">
                                        {course.description}
                                    </p>

                                    <div className="space-y-8">
                                        {/* 과정 정보 */}
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                                <p className="text-gray-500 mb-2">#</p>
                                                <p className="text-2xl font-bold text-gray-900">{course.depth}</p>
                                            </div>
                                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                                <p className="text-gray-500 mb-2">교육 기간</p>
                                                <p className="text-2xl font-bold text-gray-900">
                                                    {course.id === 'package' && course.packageOptions
                                                        ? course.packageOptions.find(opt => opt.id === selectedPackage)?.duration
                                                        : course.duration}
                                                </p>
                                            </div>
                                        </div>

                                        {/* 가격 정보 */}
                                        {'packageOptions' in course && course.packageOptions ? (
                                            <div className="space-y-6">
                                                <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                                                    {course.packageOptions.map((option) => (
                                                        <div key={option.id} className="mb-4 last:mb-0">
                                                            <label className="flex items-start space-x-4 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="package-option"
                                                                    value={option.id}
                                                                    checked={selectedPackage === option.id}
                                                                    onChange={(e) => setSelectedPackage(e.target.value)}
                                                                    className="mt-1.5"
                                                                />
                                                                <div className="flex-1">
                                                                    <div className="flex justify-between items-center mb-2">
                                                                        <h3 className="text-lg font-medium text-gray-900">{option.name}</h3>
                                                                        <div className="text-right">
                                                                            <p className="text-sm text-gray-500 line-through">{option.originalPrice}</p>
                                                                            <p className="text-xl font-bold text-blue-600">{option.packagePrice}</p>
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-sm text-gray-600">{option.description}</p>
                                                                    <p className="text-sm text-gray-500 mt-1">교육기간: {option.duration}</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : course.isMermaid && course.mermaidOptions ? (
                                            <div className="space-y-6">
                                                <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                                                    {course.mermaidOptions.map((option) => (
                                                        <div key={option.id} className="mb-4 last:mb-0">
                                                            <label className="flex items-start space-x-4 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="mermaid-option"
                                                                    value={option.id}
                                                                    checked={selectedMermaid === option.id}
                                                                    onChange={(e) => setSelectedMermaid(e.target.value)}
                                                                    className="mt-1.5"
                                                                />
                                                                <div className="flex-1">
                                                                    <div className="flex justify-between items-center mb-2">
                                                                        <h3 className="text-lg font-medium text-gray-900">{option.name}</h3>
                                                                        <p className="text-xl font-bold text-blue-600">{option.price}</p>
                                                                    </div>
                                                                    <p className="text-sm text-gray-600">{option.description}</p>
                                                                    <p className="text-sm text-gray-500 mt-1">교육시간: {option.duration}</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : course.isScuba && course.scubaOptions ? (
                                            <div className="space-y-6">
                                                <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                                                    {course.scubaOptions.map((option) => (
                                                        <div key={option.id} className="mb-4 last:mb-0">
                                                            <label className="flex items-start space-x-4 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="scuba-option"
                                                                    value={option.id}
                                                                    checked={selectedScuba === option.id}
                                                                    onChange={(e) => setSelectedScuba(e.target.value)}
                                                                    className="mt-1.5"
                                                                />
                                                                <div className="flex-1">
                                                                    <div className="flex justify-between items-center mb-2">
                                                                        <h3 className="text-lg font-medium text-gray-900">{option.name}</h3>
                                                                        <p className="text-xl font-bold text-blue-600">{option.price}</p>
                                                                    </div>
                                                                    <p className="text-sm text-gray-600">{option.description}</p>
                                                                    <p className="text-sm text-gray-500 mt-1">교육시간: {option.duration}</p>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
                                                <div className="flex justify-between items-center">
                                                    <p className="text-blue-600 font-medium">교육비</p>
                                                    <p className="text-2xl font-bold text-blue-600">{course.price}</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* 자격증 발급 기관 - 체험 과정에서는 표시하지 않음 */}
                                        {course.certifications && course.certifications.length > 0 && (
                                            <div>
                                                <p className="text-gray-500 mb-4">자격증 발급 기관</p>
                                                <div className="flex gap-6">
                                                    {course.certifications.map((cert) => (
                                                        cert.toUpperCase() === "AIDA" && (
                                                            <Image
                                                                key="aida"
                                                                src="/image/course/logo/aida_logo.png"
                                                                alt="AIDA 로고"
                                                                width={100}
                                                                height={50}
                                                                className="object-contain"
                                                            />
                                                        )
                                                    ))}
                                                    {course.certifications.map((cert) => (
                                                        cert.toUpperCase() === "PSA" && (
                                                            <Image
                                                                key="psa"
                                                                src="/image/course/logo/psa_logo.jpg"
                                                                alt="PSA 로고"
                                                                width={100}
                                                                height={50}
                                                                className="object-contain"
                                                            />
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* 신청 버튼 */}
                                        <button className="w-full py-4 px-6 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 transition-colors">
                                            과정 신청하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </main>
    );
}
