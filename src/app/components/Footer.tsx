import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-200 py-5 px-4 mt-5">
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
                {/* 상호 및 사업자 정보 */}
                <div className="text-center text-base">
                    <div className="font-bold text-lg mb-1">그랑블루 대구경북</div>
                    <div className="mb-1">대표: 김하빈 | Kakao ID: grandblue_habin </div>
                    <div className="mb-1">사업장소재지: 대구광역시 달서구 야외음악당로 51길 19 (두류동) 1층</div>
                    <div className="text-xs text-gray-400 mb-1">© {new Date().getFullYear()} Grandblue DaeguGyeongbuk. All rights reserved.</div>
                </div>
                {/* 이용약관/개인정보처리방침 */}
                <div className="flex justify-center gap-6 text-sm text-gray-300 mb-2">
                    <a href="#" className="hover:underline">이용약관</a>
                    <a href="#" className="hover:underline">개인정보처리방침</a>
                </div>
                {/* SNS 아이콘 */}
                <div className="flex gap-4 items-center justify-center mb-2">
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
                {/* 사이트 제작자 */}
                <div className="text-center text-xs text-gray-500 mt-2">
                    사이트 제작: <span className="font-semibold">이채영</span>
                </div>
            </div>
        </footer>
    );
}
