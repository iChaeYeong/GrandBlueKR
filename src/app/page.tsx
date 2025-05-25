"use client";

import Slider from "./components/Slider";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Free() {
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const mainRef = useRef<HTMLElement>(null);
  const reviewSectionRef = useRef<HTMLDivElement>(null);
  const isReviewSectionInView = useInView(reviewSectionRef, { once: false, amount: 0.3 });
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(1); // 초기 기본값 (SSR/마운트 전)
  const slides = [
    {
      title: "그랑블루 하빈",
      description: "그랑블루대구경북지점 | 프리다이빙 | 스쿠버 | 투어 ",
      image: "/image/home/slider/freebg12.jpeg"
    },
    {
      title: "프리다이빙",
      description: "AIDA & PSA 강습 | 수중촬영 | 어린이 강습 | 머메이드 ",
      image: "/image/home/slider/freebg2.jpeg"
    },
    {
      title: "투어 프로그램",
      description: "국내투어 | 해외투어 | 해루질 | 보홀 | 아쿠아리움 ",
      image: "/image/home/slider/freebg11.jpeg"
    }
  ];

  // 블로그 리뷰 데이터
  const blogReviews = [
    {
      id: 1,
      title: "경북 대구프리다이빙 그랑블루 초보 강습 후기",
      subtitle: "더 배우고 싶을 정도로 매력적이었어요",
      image: "/image/home/blogreview/review.png",
      author: "뽀돌",
      profileImage: "/image/home/blogreview/profile.png",
      content: "물놀이를 좋아하는 편이라 그런지 깊은 물속에서 자유롭게 돌아다니는게 굉장히 재미있더라고요. 진짜 너무너무 즐거운 취미가 될것 같아 더 배워보고 싶어요.",
      link: "https://blog.naver.com/bodoru/223805651513"
    },
    {
      id: 2,
      title: "제목2",
      subtitle: "서브 제목",
      image: "/image/intro/pool/duryu/water.png",
      author: "닉네임",
      profileImage: "/image/intro/instructors/instructor-habin.jpg",
      content: "리뷰 내용",
      link: "https://blog.naver.com/freedive_review2"
    },
    {
      id: 3,
      title: "제목3",
      subtitle: "서브 제목",
      image: "/image/intro/3.jpg",
      author: "닉네임",
      profileImage: "/image/intro/instructors/instructors-hero.jpg",
      content: "리뷰 내용",
      link: "https://blog.naver.com/freedive_review3"
    },
    {
      id: 4,
      title: "제목4",
      subtitle: "서브 제목",
      image: "/image/intro/2.jpg",
      author: "닉네임",
      profileImage: "/image/intro/1.jpg",
      content: "리뷰 내용",
      link: "https://blog.naver.com/freedive_review4"
    }
  ];

  // 클라이언트 마운트 처리 및 초기/리사이즈 시 itemsPerPage 설정
  useEffect(() => {
    setIsMounted(true);
    const getItemsPerPage = () => {
      if (typeof window === 'undefined') return 1;
      if (window.innerWidth >= 1280) return Math.min(3, blogReviews.length - 1);
      if (window.innerWidth >= 1024) return Math.min(2, blogReviews.length - 1);
      if (window.innerWidth >= 768) return Math.min(2, blogReviews.length - 1);
      return 1;
    };
    const calculateItems = () => setItemsPerPage(getItemsPerPage());
    calculateItems();
    window.addEventListener('resize', calculateItems);
    return () => window.removeEventListener('resize', calculateItems);
  }, []);

  // isMounted, itemsPerPage, currentReviewSlide 변경 시 슬라이드 스타일 업데이트
  useEffect(() => {
    if (isMounted) {
      // const slideWidthPercentage = 100 / itemsPerPage; // 사용하지 않으므로 삭제
      // 슬라이드 위치 보정 (페이지당 아이템 변경 시)
      const maxSlideIndex = Math.ceil(blogReviews.length / itemsPerPage) - 1;
      if (currentReviewSlide > maxSlideIndex && maxSlideIndex >= 0) {
        setCurrentReviewSlide(maxSlideIndex);
      }
      else if (maxSlideIndex < 0) {
        setCurrentReviewSlide(0);
      }
    } else {
      setCurrentReviewSlide(0);
    }
  }, [isMounted, itemsPerPage, currentReviewSlide, blogReviews.length]);

  // 자동 슬라이드 로직 (isMounted, itemsPerPage, blogReviews.length 의존성 추가)
  useEffect(() => {
    if (!isMounted || blogReviews.length <= itemsPerPage || !isReviewSectionInView) {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
        autoSlideIntervalRef.current = null;
      }
      return;
    }
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentReviewSlide((prev) => {
        const maxSlideIndex = Math.ceil(blogReviews.length / itemsPerPage) - 1;
        if (maxSlideIndex < 0) return 0; // 슬라이드 불필요
        return prev >= maxSlideIndex ? 0 : prev + 1;
      });
    }, 5000);
    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
        autoSlideIntervalRef.current = null;
      }
    };
  }, [isMounted, itemsPerPage, blogReviews.length, isReviewSectionInView]);

  // 슬라이드 가능 여부 및 총 슬라이드 페이지 계산
  // const canSlide = isMounted && blogReviews.length > itemsPerPage; // 사용하지 않으므로 삭제
  const totalSlides = Math.ceil(blogReviews.length / itemsPerPage);

  // 개발 환경에서 디버깅을 위한 로그
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('리뷰 총 개수:', blogReviews.length);
      console.log('페이지당 표시 개수:', itemsPerPage);
      console.log('총 슬라이드 페이지:', totalSlides);
      console.log('현재 슬라이드:', currentReviewSlide);
    }
  }, [blogReviews.length, itemsPerPage, currentReviewSlide, totalSlides]);

  return (
    <main ref={mainRef} className="relative overflow-hidden max-w-[100%]">
      {/* 첫 번째 섹션 - 슬라이더 */}
      <section className="relative h-screen w-full snap-start">
        <Slider slides={slides} />
        {/* 스크롤 다운 화살표 */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <path
              d="M12 4L12 20M12 20L18 14M12 20L6 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* 두 번째 섹션 - 하얀색 컨테이너 */}
      <section className="relative z-20 bg-white snap-start">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* 첫 번째 컨텐츠 영역 */}
          <div className="min-h-screen flex flex-col justify-center py-10 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8 px-4 sm:px-0"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  물 속의 자유를 경험하세요
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  그랑블루와 함께 투명한 바다 세계로의 여행을 시작하세요. 전문 강사진의 안전한 지도 아래 자유로운 수중 움직임의 아름다움을 발견하고, 일상에서 벗어나 진정한 평온을 찾을 수 있습니다. 대구경북 최고의 프리다이빙 경험, 그랑블루에서 시작됩니다.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="aspect-video rounded-xl shadow-lg border-3 border-gray-300 overflow-hidden mx-4 sm:mx-0"
              >
                <Image
                  src="/image/home/photo.jpg"
                  alt="프리다이빙 이미지"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-[center_55%]"
                  priority
                />
              </motion.div>
            </div>
            <hr className="flext mt-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-10">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="aspect-video rounded-xl shadow-lg border-3 border-gray-300 overflow-hidden mx-4 sm:mx-0"
              >
                <Image
                  src="/image/home/photo3.jpg"
                  alt="프리다이빙 이미지"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover object-[center_50%]"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8 px-4 sm:px-0"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  프로페셔널한 교육, <br></br> 잊지 못할 추억
                </h2>
                <p className="text-base sm:text-lg lg:text-xl- text-gray-600 leading-relaxed">
                  그랑블루는 초보자부터 전문가까지 모든 수준의 다이버를 위한 맞춤형 교육 프로그램을 제공합니다. 최신 장비와 체계적인 커리큘럼으로 안전하고 효과적인 프리다이빙 기술을 습득하세요. 대구경북 지역 내 최고의 시설과 경험이 풍부한 강사진이 여러분의 수중 모험을 함께합니다.
                </p>
              </motion.div>
            </div>
          </div>

          {/* 두 번째 컨텐츠 영역 */}
          <div className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
              {/* 섹션 헤더 */}
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
                >
                  그랑블루만의 특별한 가치
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600"
                >
                  최고의 시설과 전문 강사진이 함께하는 프리미엄 프리다이빙 교육
                </motion.p>
              </div>

              {/* 카드 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
                {[
                  {
                    title: "AIDA & PSA 공인 강사진",
                    description: "국제 공인 AIDA & PSA 자격을 갖춘 그랑블루 강사진이 직접 지도합니다. 체계적이고 안전한 프리다이빙 교육을 통해 초보자부터 전문가까지 모두가 신뢰할 수 있는 강습을 경험하세요.",
                    icon: "🎓",
                    link: "/intro/instructors/"
                  },
                  {
                    title: "투어 프로그램",
                    description: "울릉도, 동해, 제주 등 국내 명소는 물론, 다양한 해외 투어까지! 그랑블루만의 특별한 일정과 전문 가이드와 함께 잊지 못할 다이빙 여행을 떠나보세요.",
                    icon: "🌊",
                    link: "/intro/tour/"
                  },
                  {
                    title: "다양한 강습 과정",
                    description: "어린이를 위한 유스 프리다이빙, 환상적인 머메이드, 그리고 스쿠버 다이빙까지! 연령과 목적에 맞춘 다양한 강습 프로그램으로 누구나 즐겁고 안전하게 수중 세계를 만날 수 있습니다.",
                    icon: "🏊‍♂️",
                    link: "/course/"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
                  >
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">{item.description}</p>
                    <div className="mt-8 mt-auto">
                      <a href={item.link} className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                        자세히 보기 →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 블로그 리뷰 섹션 */}
          {/* <div ref={reviewSectionRef} className="min-h-screen flex flex-col justify-center py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">블로그 후기</h2>
              <p className="text-base sm:text-lg text-gray-600">그랑블루와 함께한 고객들의 생생한 후기를 확인하세요</p>
            </motion.div> */}

          {/* 리뷰 그리드 (슬라이더 대신 고정 그리드) */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
              {blogReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8
                  }}
                  viewport={{ once: true }}
                > */}
          {/* 리뷰 카드 */}
          {/* <motion.div
                    className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  > */}
          {/* 리뷰 이미지 */}
          {/* <div className="relative h-48 sm:h-52 md:h-56 bg-gray-200">
                      <Image
                        src={review.image}
                        alt={review.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                        priority={index < 2}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/image/home/gallery/gallery1.jpeg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 z-20 text-white">
                        <h3 className="text-base sm:text-lg font-semibold mb-1 leading-tight line-clamp-2">{review.title}</h3>
                        <p className="text-xs sm:text-sm whitespace-pre-line opacity-90 line-clamp-1">{review.subtitle}</p>
                      </div>
                    </div> */}

          {/* 글쓴이 정보 & 내용 */}
          {/* <div className="p-4 flex-grow flex flex-col">
                      <div className="flex items-center mb-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                          <Image
                            src={review.profileImage}
                            alt={`${review.author} 프로필`}
                            fill
                            className="object-cover"
                            sizes="32px"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/image/home/gallery/gallery1.jpeg";
                            }}
                          />
                        </div>
                        <p className="text-xs text-gray-600 truncate">{review.author}</p>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 flex-grow mb-3">
                        {review.content}
                      </p>
                      <div className="mt-auto pt-3 border-t border-gray-100 text-right">
                        <a href={review.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 font-medium hover:underline cousor-pointer">더 보기 &rarr;</a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* 세 번째 컨텐츠 영역 */}
          <div className="min-h-screen flex flex-col justify-center py-10 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">갤러리</h2>
              <p className="text-base sm:text-lg text-gray-600">그랑블루의 특별한 순간들을 만나보세요</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <a href="/gallery/">
                    <Image
                      src={`/image/home/gallery/gallery${i}.jpeg`}
                      alt={`갤러리 이미지 ${i}`}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </a>

                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
