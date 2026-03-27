"use client";

import styles from "./AboutSection.module.css";
import { FaUsers, FaPills, FaBookOpen } from "react-icons/fa";
import { LuBookOpen } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section className={styles.container}>
      {/* Left Column: Image Card */}
      <div className={styles.imageSection}>
        <div className={styles.imageCard}>
          <img
            src="/images/home/Container.png"
            alt="Pharmacy Practice"
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <h3 className={styles.overlayTitle}>ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย</h3>
            <p className={styles.overlaySubtitle}>
              The Royal College of Pharmacy of Thailand.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Text & Stats */}
      <div className={styles.contentSection}>
        <p className={styles.mainDescription}>
          ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย ก่อตั้งขึ้นตามปณิธาน 
          ที่มุ่งมั่นของสภาเภสัชกรรมเพื่อเป็นองค์กรหลักในการกำกับดูแล
          มาตรฐานทางวิชาการ และพัฒนาทักษะวิชาชีพเชิงลึก
          โดยการรวมกลุ่มของวิทยาลัยชำนาญการทั้ง 7 สาขา มุ่งเน้น
          การสร้างผู้เชี่ยวชาญที่มีความรู้ความสามารถเป็นที่ยอมรับ
          ในระดับสากลเพื่อสวัสดิการและสุขภาวะที่ดีของประชาชน
        </p>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <h3 className={styles.statNumber}>7</h3>
              <p className={styles.statLabel}>วิทยาลัยเฉพาะทาง</p>
            </div>
            <FaBookOpen className={styles.statIcon} />
          </div>

          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <h3 className={styles.statNumber}>1500+</h3>
              <p className={styles.statLabel}>สมาชิกทั่วประเทศ</p>
            </div>
            <FaUsers className={styles.statIcon} />
          </div>

          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <h3 className={styles.statNumber}>200+</h3>
              <p className={styles.statLabel}>หลักสูตรอบรม/ปี</p>
            </div>
            <LuBookOpen className={styles.statIcon} />
          </div>

          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <h3 className={styles.statNumber}>50+</h3>
              <p className={styles.statLabel}>งานวิจัยตีพิมพ์/ปี</p>
            </div>
            <FaPills className={styles.statIcon} />
          </div>
        </div>
      </div>
    </section>
  );
}