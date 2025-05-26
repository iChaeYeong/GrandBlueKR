"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Tour() {
    return (
        <main className="bg-white">
            {/* 히어로 섹션 */}
            <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
                <Image
                    src="/image/intro/tour/tour-hero.jpeg"
                    alt="그랑블루 투어 히어로 이미지"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white px-4"
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow">그랑블루 투어</h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 drop-shadow">바다와 여행, 그리고 당신의 특별한 순간을 기록합니다</p>
                    </motion.div>
                </div>
            </section>

            {/* 투어 소개 섹션 */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* 왼쪽: 이미지 */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-[320px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/image/intro/tour/image1.jpeg"
                                alt="투어 활동 이미지"
                                fill
                                className="object-cover object-[center_60%]"
                            />
                        </motion.div>
                        {/* 오른쪽: 텍스트 */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">바다 속 당신의 인생샷을 담아드립니다</h2>
                            <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
                                <li>수중에서 빛나는 당신의 모습, 그랑블루와 함께 영원히 간직하세요</li>
                                <li>전문가의 시선으로 당신만의 특별한 추억을 사진과 영상으로 남겨보세요</li>
                                <li>수중 촬영, 로컬 투어, 다양한 체험이 함께하는 그랑블루만의 투어</li>
                                <li>여행의 설렘과 감동을 오래 간직할 수 있도록 최고의 순간을 기록해드립니다</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 투어 특징 섹션 */}
            <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">그랑블루 투어의 매력</h2>
                        <p className="text-lg text-gray-600">여행과 바다, 그리고 당신의 이야기를 담는 특별한 경험</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "수중 & 지상 촬영",
                                description: "전문가가 직접 촬영하는 바다 속과 여행지의 아름다운 순간",
                                icon: "📸"
                            },
                            {
                                title: "로컬 체험",
                                description: "여행지의 숨은 명소와 현지 문화를 깊이 있게 경험",
                                icon: "🌏"
                            },
                            {
                                title: "맞춤 투어",
                                description: "참가자별 맞춤 일정과 다양한 프로그램 제공",
                                icon: "🎒"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 투어 Q&A/참여 안내 섹션 */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">투어가 궁금하다면?</h2>
                        <p className="text-gray-700 text-lg">문의 및 예약은 카카오톡 또는 인스타그램 DM으로 언제든 연락주세요.<br />자세한 일정과 준비물, 참가비 등은 개별 안내해드립니다.</p>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
                        <a
                            href="https://open.kakao.com/o/simxbKLg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 py-3 px-6 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-colors text-lg font-bold shadow"
                        >
                            <Image src="/talkIcon.svg" alt="카카오톡" width={24} height={24} className="opacity-80" />
                            카카오톡 문의
                        </a>
                        <a
                            href="https://www.instagram.com/grandblue_habin/?__pwa=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors text-lg font-bold shadow"
                        >
                            <Image src="/instargram.svg" alt="인스타그램" width={24} height={24} className="opacity-80" />
                            인스타그램 DM
                        </a>
                        <a
                            href="https://cafe.naver.com/grandbluehabin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 py-3 px-6 bg-[#03C75A] text-white rounded-full hover:bg-[#02B350] transition-colors text-lg font-bold shadow"
                        >
                            <Image src="/cafeIcon.svg" alt="네이버" width={24} height={24} className="opacity-80" />
                            네이버 카페
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
