import Image from "next/image";
import styles from "./VisionMissionSection.module.css";

export default function VisionMissionSection() {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.headerArea}>
                <h2 className={styles.mainHeading}>
                    &quot;มุ่งยกระดับร้านยาคุณภาพสู่มาตรฐานสากล ผ่านการพัฒนาเกณฑ์
                    การรับรองสถานประกอบการ เสริมศักยภาพเภสัชกร
                    และสร้างความเชื่อมั่นให้ประชาชน&quot;
                </h2>
            </div>

            <div className={styles.cardsContainer}>
                {/* Vision Card */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 22V20H8V16H12V12H16V8H22V22H4Z" fill="#6A7432"/>
                                <path d="M14 8V2H21L18 5L21 8H14Z" fill="#6A7432"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>วิสัยทัศน์</h3>
                        <p className={styles.cardText}>
                            &quot;เป็นผู้นำระดับสากลในการขับเคลื่อนนวัตกรรม
                            การบริการทางวิชาชีพเภสัชกรรม เพื่อสุขภาวะที่ดีของสังคม&quot;
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/vision/img1.png"
                            alt="Vision"
                            fill
                            className={styles.cardImage}
                        />
                    </div>
                </div>

                {/* Mission Card */}
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <div className={styles.iconWrapper}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 22H16V20H13V4H14V2H10V4H11V20H8V22Z" fill="#6A7432"/>
                                <path d="M12 3H23L20 7L23 11H12V3Z" fill="#6A7432"/>
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>พันธกิจ</h3>
                        <div className={styles.missionList}>
                            <p><strong>Professional Excellence:</strong><br/>พัฒนาหลักสูตรและจัดอบรมเพื่อเพิ่มพูนทักษะวิชาชีพ
                            เภสัชกรรมอย่างต่อเนื่อง</p>
                            <p><strong>Innovation &amp; Research:</strong><br/>ส่งเสริมการวิจัยและสร้างสรรค์นวัตกรรมในการดูแลผู้ป่วย</p>
                            <p><strong>Standard Setting:</strong> กำหนดและยกระดับมาตรฐานการ
                            บริการเภสัชกรรมให้เป็นที่ยอมรับในระดับสากล</p>
                            <p><strong>Collaboration:</strong><br/>สร้างเครือข่ายความร่วมมือระหว่างองค์กรวิชาชีพ
                            ทั้งในและต่างประเทศ</p>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/vision/img2.png"
                            alt="Mission"
                            fill
                            className={`${styles.cardImage} ${styles.missionImage}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
