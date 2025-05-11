"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FreeDiving() {
    return (
        <main className="bg-white">
            {/* 히어로 섹션 */}
            <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
                <Image
                    src="/image/intro/freediving/freediving-hero.jpg"
                    alt="프리다이빙 히어로 이미지"
                    fill
                    className="object-cover"
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
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">프리다이빙</h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/90">자유로운 영혼을 위한 수중 모험</p>
                    </motion.div>
                </div>
            </section>

            {/* 소개 섹션 */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <hr></hr>
                            <br></br>
                            <br></br>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">프리다이빙이란?</h2>
                            <p className="text-lg text-gray-600 font-bold leading-relaxed">
                                수중에서 일어나는 모든 무호흡상태의 활동을 말하며, 단순한 물속 활동을 넘어 자신의 한계에 도전하고,
                                수중에서의 자유로움과 평화로움을 경험할 수 있습니다.
                            </p>
                            <p className="text-lg text-gray-600 font-bold leading-relaxed">
                                아름다운 수중촬영과 수줍은 해양 생물과의 마법 같은 만남을 즐기고 여러분을 보다 안전하고 기초부터 탄탄하게 물 속으로의 여행을  경험하게 해드리겠습니다.
                            </p>
                            <br></br>
                            <br></br>
                            <hr></hr>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/image/intro/freediving/freediving-intro.jpg"
                                alt="프리다이빙 소개 이미지"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 특징 섹션 */}
            <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">프리다이빙의 매력</h2>
                        <p className="text-lg text-gray-600">프리다이빙이 가진 특별한 가치를 발견해보세요</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "자유로움",
                                description: "무거운 장비 없이 자유롭게 수중을 탐험하며, 물속에서 진정한 자유를 경험합니다.",
                                icon: "🌊"
                            },
                            {
                                title: "내면의 성장",
                                description: "호흡 조절과 명상을 통해 자신을 더 깊이 이해하고 성장하는 기회를 제공합니다.",
                                icon: "🧘‍♀️"
                            },
                            {
                                title: "안전한 도전",
                                description: "전문 강사진의 지도 아래 단계별로 안전하게 자신의 한계에 도전할 수 있습니다.",
                                icon: "🎯"
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

            {/* 안전 수칙 섹션 */}
            <section className="py-16 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg order-2 lg:order-1"
                        >
                            <Image
                                src="/image/intro/freediving/freediving-safety.jpg"
                                alt="프리다이빙 안전 수칙"
                                fill
                                className="object-cover"
                            />
                            <video
                                src="/image/intro/freediving/test.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls={false} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6 order-1 lg:order-2"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">그랑블루 대구경북지점</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                여러분을 수중에서 행복하고 자유로운 프리다이버로 만들어 드리겠습니다
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "수영을 못해도 OK",
                                    "숨참기를 못해도 OK",
                                    "물공포증 극복 OK",
                                    "만 6세부터의 유스과정도 OK",
                                    "프로페셔녈한 강사과정까지 OK",

                                ].map((rule, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center text-gray-600"
                                    >
                                        <span className="text-blue-500 mr-2">✓</span>
                                        {rule}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
