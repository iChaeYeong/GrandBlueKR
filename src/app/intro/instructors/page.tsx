"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Instructors() {
    const instructors = [
        {
            name: "김하빈",
            title: "대표 / 강사",
            image: "/image/intro/instructors/instructor-habin.jpeg",
            description: "그랑블루 대구경북 지점의 대표 강사로서, 풍부한 경험과 전문 지식을 바탕으로 안전하고 효과적인 프리다이빙 교육을 제공합니다. 다양한 국제 자격증을 보유하고 있습니다.",
            certifications: [
                "PSA Freediving Instructor Trainer (강사훈련관)",
                "AIDA Freediving Master Instructor",
                "PSA Youth Instructor",
                "AIDA Youth Instructor",
                "PSA First Aid, CPR and Emergency Oxygen for Adult, Children and Infant Instructor Trainer",
                "Advanced Rescue Freediver Instructor",
                "Nopin Diver Instructor",
                "AIDA JUDGE (AIDA 프리다이빙 국제심판)",
                "Apnea Underwater PhotoGrapher Instructor",
                "PSA Mermaid Instructor",
                "PSAI Scuba Openwater Instructor"
            ],
            background: "bg-blue-50/50",
            social: {
                kakao: "https://open.kakao.com/o/simxbKLg",
                instagram: "https://www.instagram.com/grandblue_habin/?__pwa=1"
            }
        },

        {
            name: "방금식",
            title: "보조강사",
            image: "/image/intro/instructors/instructor-chaeyoung.png",
            description: "방금식",
            certifications: [
                "PSA Freediving Instructor",
                "MermaidDiving",
                "First & CPR",
                "ScubaDiving",
                "Rescue",
                "Twin Set",
                "Advanced Nitrox",
                "Nitrox Gas Blending",
                "Dry Suit",
                "해양안전교실",
                "수중레저안전관리",
                "︎Open Water Safety",
                "Public Safety Diving Lv.2",
                "FreeDiving",
                "Underwater Photography",
                "ScubaDiving",
                "Advanced Buoyance Control",
                "Full Face Mask",
                "Ice Diving",
                "Sport Wreck",
                "Underwater Photography",
                "Advanced Wreck Penetration",
                "Openwater Sidmount",
                "Narcosis Management Lv.2",
                "Visual Inspection Technician",
                "Swiftwater & flood Rescue",
                "O2 Provider",
                "스포츠심리상담사",
                "잠수기능사"
            ],
            background: "bg-red-50/50",
            social: {
                kakao: "a",
                instagram: "#"
            }
        },
        {
            name: "이가람",
            title: "보조강사",
            image: "/image/intro/instructors/instructor-chaeyoung.png",
            description: "이가람",
            certifications: [
                "PSA머메이드다이빙 강사",
                "PSA프리다이빙 강사",
                "PSAI스쿠버강사",
                "CPR응급처치 자격",
                "오픈워터세이프티다이버",
                "생활체육지도사2급"
            ],
            background: "bg-yellow-50/50",
            social: {
                kakao: "a",
                instagram: "#"
            }
        },
        {
            name: "이채영",
            title: "보조강사",
            image: "/image/intro/instructors/instructor-chaeyoung.png",
            description: "안녕하세요 접니다. 이 사이트 제가 만들었써요오오오~~~~",
            certifications: [
                "PSA Freediving Instructor",
            ],
            background: "bg-green-50/50",
            social: {
                kakao: "#",
                instagram: "https://www.instagram.com/chae_813/"
            }
        },
        //추가 강사 템플릿입니다
        // {
        //     name: "강사 이름",
        //     title: "직책",
        //     image: "/intro/instructor-name.jpg",
        //     description: "강사 소개 내용이 들어갑니다.",
        //     certifications: [
        //         "보유 자격증 1",
        //         "보유 자격증 2",
        //         "보유 자격증 3"
        //     ],
        //     social: {
        //         kakao: "#",
        //         instagram: "#"
        //     }
        // },
    ];

    return (
        <main className="bg-white w-full overflow-x-hidden">
            {/* 히어로 섹션 */}
            <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
                <Image
                    src="/image/intro/instructors/instructors-hero.jpeg"
                    alt="강사진 소개 배경 이미지"
                    fill
                    className="object-cover object-[center_50%]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white px-4"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">강사진 소개</h1>
                        <p className="text-lg sm:text-xl text-white/90">그랑블루 대구경북의 전문 강사들을 만나보세요</p>
                    </motion.div>
                </div>
            </section>

            {/* 강사진 소개 섹션 */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {instructors.map((instructor, index) => (
                        <motion.div
                            key={instructor.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`mb-20 ${index > 0 ? "mt-24 pt-24 border-t border-gray-200" : ""
                                }`}
                        >

                            <div className={`${instructor.background} rounded-xl p-8 lg:p-12 `}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                                    {/* 왼쪽: 강사 이미지 */}
                                    <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden rounded-lg shadow-md">
                                        <Image
                                            src={instructor.image}
                                            alt={`${instructor.name} 강사 프로필`}
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>

                                    {/* 오른쪽: 강사 정보 */}
                                    <div className="space-y-8">
                                        <div>
                                            <h2 className="text-4xl font-bold text-blue-600 mb-2">{instructor.name} / {instructor.title}</h2>
                                            <p className="text-lg text-gray-600 leading-relaxed mt-4">{instructor.description}</p>

                                            {/* SNS 링크 */}
                                            <div className="flex gap-4 mt-6">
                                                {instructor.social.kakao && instructor.social.kakao !== "#" && (
                                                    <a
                                                        href={instructor.social.kakao}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 py-2 px-4 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors cursor-pointer"
                                                    >
                                                        <Image
                                                            src="/talkIcon.svg"
                                                            alt="카카오톡"
                                                            width={20}
                                                            height={20}
                                                            className="opacity-80"
                                                        />
                                                        <span>카카오톡</span>
                                                    </a>
                                                )}
                                                {instructor.social.instagram && instructor.social.instagram !== "#" && (
                                                    <a
                                                        href={instructor.social.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors cursor-pointer"
                                                    >
                                                        <Image
                                                            src="/instargram.svg"
                                                            alt="인스타그램"
                                                            width={20}
                                                            height={20}
                                                            className="opacity-80"
                                                        />
                                                        <span>인스타그램</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* 자격증 리스트 */}
                                        <div className="mt-8">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6">보유 자격증</h3>
                                            <ul className="space-y-3">
                                                {instructor.certifications.map((cert, certIndex) => (
                                                    <motion.li
                                                        key={certIndex}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: certIndex * 0.05 }}
                                                        viewport={{ once: true }}
                                                        className="flex items-start text-gray-700"
                                                    >
                                                        <span className="text-blue-500 mr-2 font-bold">▶</span>
                                                        <span>{cert}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* 추가 강사 템플릿 */}
                    <div className="mt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">그 외 강사진</h3>
                            <p className="text-gray-600 mb-12">곧 그랑블루의 새로운 강사진을 소개해드릴 예정입니다</p>
                        </motion.div>

                        {/* 추가 강사 카드를 위한 공간 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-blue-50/30 p-8 rounded-xl border border-blue-100 min-h-[200px] flex items-center justify-center">
                                <p className="text-gray-500 text-center text-lg">새로운 강사 정보가 곧 업데이트될 예정입니다</p>
                            </div>
                            <div className="bg-blue-50/30 p-8 rounded-xl border border-blue-100 min-h-[200px] flex items-center justify-center">
                                <p className="text-gray-500 text-center text-lg">새로운 강사 정보가 곧 업데이트될 예정입니다</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
