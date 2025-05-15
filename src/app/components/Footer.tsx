import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-200 py-12 px-4 mt-5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
                {/* 좌측: 상호명 및 연락처 */}
                <div className="text-center md:text-left">
                    <div className="font-bold text-lg">그랑블루 대구경북</div>
                    <div className="text-sm mt-1">대표: 김하빈 | 연락처: 010-0000-0000</div>
                    <div className="text-xs mt-1 text-gray-400">© {new Date().getFullYear()} Grandblue DaeguGyeongbuk. All rights reserved.</div>
                </div>
                {/* 우측: SNS 아이콘 */}
                <div className="flex gap-4 items-center justify-center">
                    <a href="https://open.kakao.com/o/simxbKLg" target="_blank" rel="noopener noreferrer" aria-label="카카오톡">
                        <Image src="/talkIcon.svg" alt="카카오톡" width={28} height={28} className="opacity-80 hover:opacity-100 transition" />
                    </a>
                    <a href="https://www.instagram.com/grandblue_habin/?__pwa=1" target="_blank" rel="noopener noreferrer" aria-label="인스타그램">
                        <Image src="/instargram.svg" alt="인스타그램" width={28} height={28} className="opacity-80 hover:opacity-100 transition" />
                    </a>
                    <a href="https://cafe.naver.com/grandbluehabin" target="_blank" rel="noopener noreferrer" aria-label="네이버 카페">
                        <Image src="/cafeIcon.svg" alt="네이버 카페" width={28} height={28} className="opacity-80 hover:opacity-100 transition" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
