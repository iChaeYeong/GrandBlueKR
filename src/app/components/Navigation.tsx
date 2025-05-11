"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import OverlayMenu from "./OverlayMenu";
import { usePathname } from "next/navigation";

interface MenuItem {
    title: string;
    href: string;
    items: Array<{
        name: string;
        href: string;
        isSubItem?: boolean;
    }>;
}

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isGalleryPage = pathname?.startsWith('/gallery');

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

    const menuItems: MenuItem[] = [
        {
            title: "소개",
            href: "/intro",
            items: [
                { name: "프리다이빙", href: "/intro/freediving" },
                { name: "강사진", href: "/intro/instructors" },
                { name: "다이빙 풀장", href: "/intro/pool" },
                { name: "투어", href: "/intro/tour" },
                { name: "자격증 단체", href: "/intro/certification" }
            ]
        },
        {
            title: "강습 과정",
            href: "/course",
            items: [
                { name: "체험 다이빙", href: "/course#experience" },
                { name: "Lv 1", href: "/course#lv1" },
                { name: "Lv 2", href: "/course#lv2" },
                { name: "Lv 3", href: "/course#lv3" },
                { name: "Lv 4", href: "/course#lv4" },
                { name: "Package", href: "/course#package" },
                { name: "Instructor", href: "/course#instructor" },
                { name: "Mermaid", href: "/course#mermaid" },
                { name: "Scuba", href: "/course#scuba" },
                { name: "ERP 응급처치", href: "/course#ERP" }
            ]
        },
        // {
        //     title: "일정",
        //     href: "/schedule",
        //     items: [
        //         { name: "프리다이빙", href: "/schedule/freediving" },
        //         { name: "강사진", href: "/schedule/instructors" },
        //         { name: "다이빙 풀장", href: "/schedule/pool" },
        //         { name: "투어", href: "/schedule/tour" }
        //     ]
        // },
        {
            title: "갤러리",
            href: "/gallery",
            items: [
                { name: "다이빙 풀장", href: "/gallery?category=pool" },
                { name: "\- 대구 두류다이빙 풀", href: "/gallery?category=pool&subcategory=duryu", isSubItem: true },
                { name: "\- 구미 패스나인", href: "/gallery?category=pool&subcategory=passnine", isSubItem: true },
                { name: "\- 대전 알프스", href: "/gallery?category=pool&subcategory=alpsdiving", isSubItem: true },
                { name: "\- 부산 북항마리나", href: "/gallery?category=pool&subcategory=marina", isSubItem: true },
                { name: "\- 용인 딥스테이션", href: "/gallery?category=pool&subcategory=deepstation", isSubItem: true },
                { name: "\- 시흥 파라다이브", href: "/gallery?category=pool&subcategory=paradive", isSubItem: true },
                { name: "투어", href: "/gallery?category=tour" },
                { name: "\- 국내 투어", href: "/gallery?category=tour&subcategory=domestic", isSubItem: true },
                { name: "\- 해외 투어", href: "/gallery?category=tour&subcategory=overseas", isSubItem: true }
            ]
        },
        {
            title: "스토어",
            href: "/store",
            items: [
                { name: "N \- 스토어", href: "/store/freediving" },
                { name: "숨고", href: "/store/instructors" },
                { name: "다이빙 풀장", href: "/store/pool" },
                { name: "투어", href: "/store/tour" }
            ]
        }
    ];

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? (isGalleryPage ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-white/90 backdrop-blur-md py-2') : 'py-5'}`}>
                {/* 로고 */}
                <div className={`absolute left-6 sm:left-30 transition-all duration-300 ${scrolled ? 'top-4' : 'top-10'}`}>
                    <Link href="/">
                        <Image
                            src={scrolled && !isGalleryPage ? "/grandblue_b.svg" : "/grandblue.svg"}
                            alt="그랑블루 로고"
                            width={scrolled ? 100 : 120}
                            height={scrolled ? 40 : 50}
                            className="opacity-90 hover:opacity-100 transition-all duration-300"
                        />
                    </Link>
                </div>

                {/* 카테고리 - 데스크톱에서만 표시 */}
                <nav className={`absolute left-1/2 transform -translate-x-1/2 items-center gap-[60px] transition-all duration-300 ${scrolled ? 'top-5' : 'top-15'} hidden lg:flex`}>
                    {menuItems.map((menu, index) => (
                        <div key={index} className="group relative">
                            <Link
                                href={menu.href}
                                className={`hover:text-gray-600 font-bold transition-colors text-[15px] cursor-pointer ${scrolled && !isGalleryPage ? 'text-gray-800' : 'text-white'}`}
                            >
                                {menu.title}
                            </Link>
                            {/* 드롭다운 메뉴 */}
                            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 pt-5 min-w-[200px]">
                                <div className={`${scrolled && !isGalleryPage ? 'bg-white shadow-lg' : 'bg-black/50 backdrop-blur-md'} p-6 rounded-sm border-l border-white/20`}>
                                    <ul className="space-y-3">
                                        {menu.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <Link
                                                    href={item.href}
                                                    className={`block transition-colors ${scrolled && !isGalleryPage ? 'text-gray-600 hover:text-gray-900' : 'text-white/60 hover:text-white'} ${item.isSubItem ? 'text-sm pl-3' : 'text-base'}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </nav>

                {/* 우측 상단 메뉴 */}
                <div className={`absolute right-6 sm:right-25 flex items-center gap-4 sm:gap-6 transition-all duration-300 ${scrolled ? 'top-5' : 'top-15'}`}>
                    <Link href="https://cafe.naver.com/grandbluehabin" target="_blank" className="hidden sm:block">
                        <Image
                            src={scrolled && !isGalleryPage ? "/cafeIcon_b.svg" : "/cafeIcon.svg"}
                            alt="카페"
                            width={30}
                            height={30}
                            className="opacity-80 hover:opacity-100 transition-all duration-300"
                        />
                    </Link>
                    <Link href="https://www.instagram.com/grandblue_habin/?__pwa=1" target="_blank" className="hidden sm:block">
                        <Image
                            src={scrolled && !isGalleryPage ? "/instargram_b.svg" : "/instargram.svg"}
                            alt="인스타그램"
                            width={30}
                            height={30}
                            className="opacity-80 hover:opacity-100 transition-all duration-300"
                        />
                    </Link>
                    <Link href="https://open.kakao.com/o/simxbKLg" target="_blank" className="hidden sm:block">
                        <Image
                            src={scrolled && !isGalleryPage ? "/talkIcon_b.svg" : "/talkIcon.svg"}
                            alt="카카오톡"
                            width={30}
                            height={30}
                            className="opacity-80 hover:opacity-100 transition-all duration-300"
                        />
                    </Link>
                    <button onClick={() => setIsMenuOpen(true)}>
                        <Image
                            src={scrolled && !isGalleryPage ? "/Menu_b.svg" : "/Menu.svg"}
                            alt="메뉴"
                            width={50}
                            height={25}
                            className="opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        />
                    </button>
                </div>
            </div>
            <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
} 