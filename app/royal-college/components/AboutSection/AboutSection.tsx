"use client";

import styles from "./AboutSection.module.css";
import { FaSearch } from "react-icons/fa";
import { LuListFilter, LuChevronDown } from "react-icons/lu";

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
            <h3 className={styles.overlayTitle}>ศูนย์พัฒนาการบริการทางวิชาชีพเภสัชกรรม</h3>
            <p className={styles.overlaySubtitle}>
              Center for Professional Development in Pharmacy
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Text & Search */}
      <div className={styles.contentSection}>
        
        <p className={styles.description}>
         ศูนย์พัฒนาการบริการทางวิชาชีพเภสัชกรรม พื้นที่แห่งการเรียนรู้
และการพัฒนาที่ไม่หยุดนิ่ง เรามุ่งมั่นที่จะเป็นกลไกสำคัญในการสนับสนุน
เภสัชกรและบุคลากรทางการแพทย์ ให้มีความเชี่ยวชาญเท่าทันเทคโนโลยี
และนวัตกรรมยาที่เปลี่ยนแปลงไป เพื่อส่งมอบการดูแลสุขภาพที่มีคุณภาพ ปลอดภัย และมีประสิทธิภาพสูงสุดให้แก่ประชาชน
        </p>

        {/* Search Card */}
        <div className={styles.searchCard}>
          <h3 className={styles.searchTitle}>ค้นหารายชื่อ</h3>
          <p className={styles.searchSubtitle}>ผู้ประกอบวิชาชีพเภสัชกรรม</p>

          <div className={styles.inputGroup}>
            <div className={styles.dropdown}>
              <LuListFilter className={styles.filterIcon} />
              <span>เลขที่ใบอนุญาต</span>
              <LuChevronDown className={styles.chevronIcon} />
            </div>
            
            <div className={styles.searchInputWrapper}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="ค้นหาเลขที่ใบอนุญาต"
                className={styles.searchInput}
              />
            </div>

            <button className={styles.searchButton}>ค้นหา</button>
          </div>
        </div>
      </div>
    </section>
  );
}