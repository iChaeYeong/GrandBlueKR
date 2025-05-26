"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface OverlayMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

interface MenuItem {
    title: string;
    subItems: Array<{
        name: string;
        href: string;
        isSubItem?: boolean;
    }>;
}

export default function OverlayMenu({ isOpen, onClose }: OverlayMenuProps) {
    const [openMenus, setOpenMenus] = useState<number[]>([]);

    const toggleMenu = (index: number) => {
        setOpenMenus(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const menuItems: MenuItem[] = [
        {
            title: "소개",
            subItems: [
                { name: "프리다이빙", href: "/intro/freediving" },
                { name: "강사진", href: "/intro/instructors" },
                // { name: "다이빙 풀장", href: "/intro/pool" },
                { name: "투어", href: "/intro/tour" }
                // { name: "자격증 단체", href: "/intro/certification" }
            ]
        },
        {
            title: "강습 과정",
            subItems: [
                { name: "체험 다이빙", href: "/course?category=experience" },
                { name: "Lv.1", href: "/course?category=lv1" },
                { name: "Lv.2", href: "/course?category=lv2" },
                { name: "Lv.3", href: "/course?category=lv3" },
                { name: "Lv.4", href: "/course?category=lv4" },
                { name: "Instructor", href: "/course?category=instructor" },
                { name: "Youth FreeDiving", href: "/course?category=youth" },
                { name: "Package", href: "/course?category=package" },
                { name: "Mermaid", href: "/course?category=mermaid" },
                { name: "Scuba", href: "/course?category=scuba" },
                { name: "수중레저안전요원", href: "/course?category=leisure" }
            ]
        },
        // {
        //     title: "일정",
        //     subItems: [
        //         { name: "프리다이빙", href: "/schedule/freediving" },
        //         { name: "강사진", href: "/schedule/instructors" },
        //         { name: "다이빙 풀장", href: "/schedule/pool" },
        //         { name: "투어", href: "/schedule/tour" }
        //     ]
        // },
        {
            title: "갤러리",
            subItems: [
                { name: "전체", href: "/gallery?category=all" },
                { name: "다이빙 풀장", href: "/gallery?category=pool" },
                { name: "투어", href: "/gallery?category=tour" }
            ]
        },
        {
            title: "스토어",
            subItems: [
                { name: "N \- 스토어", href: "/404" },
                { name: "숨고", href: "https://www.soomgo.com/profile/users/1172930" },
                // { name: "다이빙 풀장", href: "/store/pool" },
                { name: "투어", href: "/404" }
            ]
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md overflow-y-auto overflow-x-hidden w-full"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
                    }}
                >
                    {/* 로고 */}
                    <Link href="/" className="absolute top-10 left-6 sm:left-10" onClick={onClose}>
                        <Image
                            src="/grandblue_logo.png"
                            alt="그랑블루 로고"
                            width={120}
                            height={50}
                            className="opacity-90 hover:opacity-100 transition-opacity"
                        />
                    </Link>

                    {/* 닫기 버튼 */}
                    <button
                        onClick={onClose}
                        className="absolute top-10 right-6 sm:right-10 text-white hover:opacity-70 transition-opacity cursor-pointer"
                    >
                        <Image
                            src="/close.svg"
                            alt="닫기"
                            width={24}
                            height={24}
                            className="opacity-80"
                        />
                    </button>

                    {/* 메뉴 컨텐츠 */}
                    <div className="flex justify-center flex-col lg:flex-row w-full mx-auto px-6 sm:px-20 pt-40 sm:pt-48">
                        {/* 데스크톱 메뉴 */}
                        <div className="hidden lg:grid grid-cols-5 gap-20 ">
                            {menuItems.map((item, index) => (
                                <div key={index} className="text-white border-l border-white/20 pl-10 min-h-[400px]">
                                    <h3 className="text-xl font-medium mb-8 text-white/90">{item.title}</h3>
                                    <ul className="space-y-3">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    href={subItem.href}
                                                    onClick={onClose}
                                                    className={`text-white/60 hover:text-white transition-colors cursor-pointer block ${subItem.isSubItem ? 'text-sm pl-3' : 'text-base'}`}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* 모바일/태블릿 메뉴 */}
                        <div className="lg:hidden w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 mt-10">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="text-left"
                                    >
                                        <button
                                            onClick={() => toggleMenu(index)}
                                            className="w-full text-left group"
                                        >
                                            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-6 flex items-center justify-between">
                                                {item.title}
                                                <motion.span
                                                    animate={{ rotate: openMenus.includes(index) ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="inline-block opacity-60 group-hover:opacity-100"
                                                >
                                                    ▼
                                                </motion.span>
                                            </h3>
                                        </button>
                                        <AnimatePresence>
                                            {openMenus.includes(index) && (
                                                <motion.ul
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="space-y-4 overflow-hidden text-left"
                                                >
                                                    {item.subItems.map((subItem, subIndex) => (
                                                        <motion.li
                                                            key={subIndex}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: subIndex * 0.05 }}
                                                            className="text-left"
                                                        >
                                                            <Link
                                                                href={subItem.href}
                                                                onClick={onClose}
                                                                className={`text-white/60 hover:text-white transition-colors block text-left ${subItem.isSubItem
                                                                    ? 'text-base sm:text-lg pl-4 border-l border-white/20'
                                                                    : 'text-lg sm:text-xl font-medium'
                                                                    }`}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* SNS 링크 */}
                        <div className="flex justify-end sm:block mt-10 mb-10">
                            <div className="flex sm:flex-col gap-6">
                                <Link href="https://cafe.naver.com/grandbluehabin" target="_blank" onClick={onClose}>
                                    <Image
                                        src="/cafeIcon.svg"
                                        alt="카페"
                                        width={30}
                                        height={30}
                                        className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                    />
                                </Link>
                                <Link href="https://www.instagram.com/grandblue_habin/?__pwa=1" target="_blank" onClick={onClose}>
                                    <Image
                                        src="/instargram.svg"
                                        alt="인스타그램"
                                        width={30}
                                        height={30}
                                        className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                    />
                                </Link>
                                <Link href="https://open.kakao.com/o/simxbKLg" target="_blank" onClick={onClose}>
                                    <Image
                                        src="/talkIcon.svg"
                                        alt="카카오톡"
                                        width={30}
                                        height={30}
                                        className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 