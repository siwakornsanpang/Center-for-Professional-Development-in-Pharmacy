"use client";
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from './HighlightSection.module.css';

const GALLERY_IMAGES = [
    { src: '/images/cardslice/img1.png', alt: 'เภสัชกรให้คำปรึกษา' },
    { src: '/images/cardslice/img2.png', alt: 'เภสัชกรใช้เทคโนโลยี' },
    { src: '/images/cardslice/img3.png', alt: 'เภสัชกรในร้านยา' },
    { src: '/images/cardslice/img4.png', alt: 'เภสัชกรตรวจสอบยา' },
    { src: '/images/cardslice/img4.png', alt: 'เภสัชกรตรวจสอบยา' },
];

const IMAGES_PER_VIEW = 4;
const TOTAL_PAGES = Math.ceil(GALLERY_IMAGES.length / IMAGES_PER_VIEW);

const HighlightSection: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const galleryRef = useRef<HTMLDivElement>(null);

    const scrollToPage = useCallback((page: number) => {
        if (!galleryRef.current) return;
        const scrollWidth = galleryRef.current.scrollWidth;
        const pageWidth = scrollWidth / TOTAL_PAGES;
        galleryRef.current.scrollTo({ left: pageWidth * page, behavior: 'smooth' });
        setCurrentPage(page);
    }, []);

    // Update active dot on scroll
    useEffect(() => {
        const el = galleryRef.current;
        if (!el) return;
        const handleScroll = () => {
            const scrollWidth = el.scrollWidth - el.clientWidth;
            if (scrollWidth <= 0) return;
            const ratio = el.scrollLeft / scrollWidth;
            const page = Math.round(ratio * (TOTAL_PAGES - 1));
            setCurrentPage(page);
        };
        el.addEventListener('scroll', handleScroll, { passive: true });
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={styles.highlightContainer}>
            {/* Background Image */}
            <div className={styles.bgWrapper}>
                <Image
                    src="/images/cardslice/bg.png"
                    alt=""
                    fill
                    className={styles.bgImage}
                    priority
                />
            </div>

            {/* Top Content */}
            <div className={styles.topContent}>
                <div className={styles.leftContent}>
                    <h3 className={styles.highlightLabel}>
                        Highlight ศูนย์พัฒนาการบริการทางวิชาชีพเภสัชกรรม
                    </h3>
                    <h1 className={styles.mainHeading}>
                        &quot;ยกระดับมาตรฐานเภสัชกรไทย<br />
                        สู่นวัตกรรมการบริการระดับสากล&quot;
                    </h1>
                </div>

                <div className={styles.rightContent}>
                    <p className={styles.rightText}>
                        ศูนย์กลางแห่งการเรียนรู้และพัฒนาศักยภาพ
                        วิชาชีพเภสัชกรรม มุ่งเน้นการสร้าง
                        เชี่ยวชาญเฉพาะทาง เพื่อความปลอดภัย
                        และสุขภาวะที่ดีของประชาชน
                    </p>
                </div>
            </div>

            {/* Gallery Images */}
            <div className={styles.gallery} ref={galleryRef}>
                {GALLERY_IMAGES.map((img, index) => (
                    <div key={index} className={styles.galleryItem}>
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className={styles.galleryImage}
                        />
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className={styles.dots}>
                {Array.from({ length: TOTAL_PAGES }).map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentPage ? styles.activeDot : ''}`}
                        onClick={() => scrollToPage(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default HighlightSection;
