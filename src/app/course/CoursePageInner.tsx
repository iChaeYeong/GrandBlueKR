"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

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
    // certifications: string[];
    price?: string;
    isPackage?: boolean;
    packageOptions?: PackageOption[];
    originalPrice?: string;
    packagePrice?: string;
    isMermaid?: boolean;
    mermaidOptions?: MermaidOption[];
    isScuba?: boolean;
    scubaOptions?: ScubaOption[];
    examUrl?: string;
    showCondition?: boolean;
    condition?: string[];
}

export default function CoursePageInner() {
    const searchParams = useSearchParams();
    const [activeSection, setActiveSection] = useState('experience');
    const [selectedPackage, setSelectedPackage] = useState('package12');
    const [selectedMermaid, setSelectedMermaid] = useState('mermaid1');
    const [selectedScuba, setSelectedScuba] = useState('scuba1');

    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setActiveSection(category);
        }
    }, [searchParams]);

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

    const handleSectionChange = (sectionId: string) => {
        setActiveSection(sectionId);
        const url = new URL(window.location.href);
        url.searchParams.set('category', sectionId);
        window.history.pushState({}, '', url);
    };

    // 과정 데이터
    const courses: Course[] = [
        {
            id: "experience",
            name: "체험 다이빙",
            depth: "체험",
            duration: "1일",
            description: "부담없이 즐기는 프리다이빙 체험 과정",
            image: "/image/course/experience.jpeg",
            price: "50,000 ₩"
        },
        {
            id: "lv1",
            name: "Lv.1",
            depth: "이론, 제한수역, 해양수역",
            duration: "1일",
            description: "프리다이빙의 기초를 배우는 과정으로, 기본적인 안전 수칙과 호흡법을 학습합니다. 수면 호흡법, 덕다이빙 기술, 기초 피닝 등을 배우게 됩니다.",
            image: "/image/course/lv1.jpeg",
            // certifications: ["PSA", "AIDA"],
            price: "100,000 ₩",
            examUrl: "/course/lv1",
            showCondition: true,
            condition: [
                "이론수업 후 풀장 실습 위주 교육",
                "라이센스 취득시 까지 무제한 트레이닝 제공",
                "프리다이빙 호흡법",
                "스노쿨링 운영법",
                "프리다이빙 바디포지션, 피닝",
                "수면 무호흡(Static Apnea)",
                "자유하강 (Free Immersion)",
                "수평 잠영 (Dynamic Apnea)",
                "프리다이빙 버디 시스템"
            ],
        },
        {
            id: "lv2",
            name: "Lv.2",
            depth: "이론, 제한수역, 해양수역",
            duration: "3일",
            description: "가장 대중적인 선택, 퀄리티 있는 교육 과정",
            image: "/image/course/lv2.jpeg",
            price: "350,000 ₩",
            examUrl: "/course/lv2",
            showCondition: true,
            condition: [
                "이론수업 후 풀장 실습 위주 교육",
                "라이센스 취득시 까지 무제한 트레이닝 제공",
                "프리다이빙 호흡법",
                "스노쿨링 운영법",
                "프리다이빙 바디포지션, 피닝",
                "수면 무호흡(Static Apnea)",
                "수직입수 덕다이브 (CWT)",
                "자유하강 (Free Immersion)",
                "수평 잠영 (Dynamic Apnea)",
                "프리다이빙 버디 시스템",
                "다이버 구조 하기(Rescue)"
            ]
        },
        {
            id: "lv3",
            name: "Lv.3",
            depth: "이론, 제한수역, 해양수역",
            duration: "3일",
            description: "프리다이빙의 꽃 '프리폴'을 배우는 과정",
            image: "/image/course/lv3.jpeg",
            price: "550,000 ₩",
            examUrl: "https://yourdomain.com/exam/lv3",
            showCondition: true,
            condition: [
                "이론수업 후 풀장 실습 위주 교육",
                "라이센스 취득시 까지 무제한 트레이닝 제공",
                "수면 무호흡(Static Apnea)",
                "수직입수 덕다이브 (CWT)",
                "자유하강 (Free Immersion)",
                "수평 잠영 (Dynamic Apnea)",
                "수중 잠영 턴, 부력 토잉",
                "피닝 밸런스 트레이닝",
                "컨페티션 시뮬레이션",
                "다이버 구조 하기(Rescue)"
            ]
        },
        {
            id: "lv4",
            name: "Lv.4",
            depth: "이론, 제한수역, 해양수역",
            duration: "4일",
            description: "보조강사 레벨의 프리다이빙 과정",
            image: "/image/course/lv4.jpeg",
            price: "750,000 ₩",
            showCondition: true,
            condition: [
                "이론수업 후 풀장 실습 위주 교육",
                "라이센스 취득시 까지 무제한 트레이닝 제공",
                "FRC(딥 다이빙)",
                "마우스필",
                "부이 설치 밎 매듭법",
                "프리다이빙의 꽃 '프리폴'",
                "수면 무호흡(Static Apnea)",
                "수직입수 덕다이브 (CWT)",
                "자유하강 (Free Immersion)",
                "수평 잠영 (Dynamic Apnea)",
                "수중 잠영 턴, 부력 토잉",
                "다이버 구조 하기(Rescue)"
            ]
        },
        {
            id: "instructor",
            name: "Instructor",
            depth: "별도 문의",
            duration: "7일",
            description: "프리다이빙 강사가 되기 위한 전문 교육 과정입니다. 교육 방법론과 안전 관리, 응급 처치 등을 심도 있게 학습합니다.",
            image: "/image/course/Instructor.jpeg",
            price: "1,500,000 ₩",
            examUrl: "https://yourdomain.com/exam/instructor"
        },
        {
            id: "youth",
            name: "Youth FreeDiving",
            depth: "유스 프리다이빙",
            duration: "#일",
            description: "만 6세~만 14세 어린이를 위한 안전하고 재미있는 맞춤형 프로그램",
            image: "/image/course/erp.jpg",
            price: "250,000 ₩",
            examUrl: "https://yourdomain.com/exam/youth"
        },
        {
            id: "package",
            name: "Package",
            depth: "이론, 제한수역, 해양수역",
            duration: "기간 선택",
            description: "여러 레벨의 과정을 한 번에 수강하여 더 효율적으로 프리다이빙을 배워보세요. 패키지로 신청하시면 할인된 가격으로 수강하실 수 있습니다.",
            image: "/image/course/package1.jpeg",
            isPackage: true,
            packageOptions: [
                {
                    id: "package12",
                    name: "Level 1 + 2 패키지",
                    duration: "3",
                    originalPrice: "450,000 ₩",
                    packagePrice: "350,000 ₩",
                    description: ""
                },
                {
                    id: "package123",
                    name: "Level 1 + 2 + 3 패키지",
                    duration: "5",
                    originalPrice: "1,000,000 ₩",
                    packagePrice: "800,000 ₩",
                    description: ""
                },
                {
                    id: "package23",
                    name: "Level 2 + 3 패키지",
                    duration: "7",
                    originalPrice: "# ₩",
                    packagePrice: "# ₩",
                    description: ""
                },
                {
                    id: "package1234",
                    name: "Level 1 + 2 + 3 + 4 패키지",
                    duration: "9",
                    originalPrice: "# ₩",
                    packagePrice: "# ₩",
                    description: ""
                },
                {
                    id: "package234",
                    name: "Level 2 + 3 +4 패키지",
                    duration: "",
                    originalPrice: "# ₩",
                    packagePrice: "# ₩",
                    description: ""
                },
                {
                    id: "package34",
                    name: "Level 3 + 4 패키지",
                    duration: "",
                    originalPrice: "1,300,000 ₩",
                    packagePrice: "1,100,000 ₩",
                    description: ""
                }
            ]
        },
        {
            id: "mermaid",
            name: "Mermaid",
            depth: "",
            duration: "기간 선택",
            description: "인어와 같은 아름다운 수중 동작을 배우며, 프리다이빙의 즐거움을 경험하는 과정입니다. 기초부터 고급 과정까지 단계별로 학습할 수 있습니다.",
            image: "/image/course/mermaid.jpg",
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
            depth: "",
            duration: "기간 선택",
            description: "스쿠버다이빙의 기초부터 전문가 과정까지 체계적으로 배울 수 있는 과정입니다. 안전하고 즐거운 수중 활동을 위한 필수 교육입니다.",
            image: "/image/course/scuba.jpeg",
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
            id: "leisure",
            name: "수중레저안전요원",
            depth: "이론, 제한수역, 해양수역",
            duration: "2일",
            description: "생명의 보고, 바다를 탐험하는 과정",
            image: "/image/course/leisure.jpeg",
            price: "750,000 ₩",
            showCondition: true,
            condition: [
                "이론수업 후 풀장 실습 위주 교육",
                "라이센스 취득시 까지 무제한 트레이닝 제공",
                "FRC(딥 다이빙)",
                "마우스필",
                "부이 설치 밎 매듭법",
                "프리다이빙의 꽃 '프리폴'",
                "수면 무호흡(Static Apnea)",
                "수직입수 덕다이브 (CWT)",
                "자유하강 (Free Immersion)",
                "수평 잠영 (Dynamic Apnea)",
                "수중 잠영 턴, 부력 토잉",
                "다이버 구조 하기(Rescue)"
            ]
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
                                onClick={() => handleSectionChange(course.id)}
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
            {courses
                .filter(course => course.id === activeSection)
                .map(course => (
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
                                        <p className="text-lg font-semibold text-gray-600 mb-8 flex-grow">
                                            {course.description}
                                        </p>

                                        <div className="space-y-8">
                                            {/* 과정 정보 */}
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                                    <p className="text-gray-500 mb-2">달성 조건</p>
                                                    <p className="text-xl font-bold text-gray-900">{course.depth}</p>
                                                </div>
                                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                                    <p className="text-gray-500 mb-2">교육 기간</p>
                                                    <p className="text-xl font-bold text-gray-900">
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

                                            {/* 신청 버튼 */}
                                            <button className="w-full py-4 px-6 bg-blue-600 text-white text-lg font-medium rounded-xl hover:bg-blue-700 transition-colors cursor-pointer">
                                                과정 신청하기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            {/* 조건 안내 리스트 */}
            {courses.find(course => course.id === activeSection && course.showCondition) && (
                <div className="mb-20 w-full bg-gray-50 py-16 px-4">
                    <div className="mt-12 flex flex-col md:flex-row gap-8 w-full max-w-3xl mx-auto justify-center">
                        {courses.find(course => course.id === activeSection)?.showCondition && (
                            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="flex flex-col items-center mb-6" style={{ minHeight: 110 }}>
                                    <div className="flex items-center justify-center" style={{ width: 120, height: 80 }}>
                                    </div>
                                </div>
                                <ul className="list-disc pl-6 space-y-3">
                                    {Array.isArray(courses.find(course => course.id === activeSection)?.condition) &&
                                        courses.find(course => course.id === activeSection)?.condition?.map((item, idx) => (
                                            <li key={idx} className="text-gray-700 text-base">{item}</li>
                                        ))}
                                </ul>
                                <div className="flex justify-end items-center py-5">
                                    <Image
                                        src="/image/course/logo/aida_logo.png"
                                        alt="AIDA 로고"
                                        width={120}
                                        height={60}
                                        className="object-contain bg-white/80 p-2 rounded-lg"
                                    />
                                    <Image
                                        src="/image/course/logo/psa_logo.jpg"
                                        alt="PSA 로고"
                                        width={120}
                                        height={60}
                                        className="object-contain bg-white/80 p-2 rounded-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
} 