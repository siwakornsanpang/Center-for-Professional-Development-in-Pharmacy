import React from 'react';
import styles from './HighlightSection.module.css';

const HighlightSection: React.FC = () => {
  return (
    <section className={styles.highlightContainer}>
      {/* Left Content */}
      <div className={styles.leftContent}>
        <h3 className={styles.highlightLabel}>
          Highlight ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย
        </h3>
        <h1 className={styles.mainHeading}>
          ยกระดับวิชาชีพเภสัชกรรมไทย <br />
          สู่มาตรฐานสากล
        </h1>
      </div>

      {/* Right Content */}
      <div className={styles.rightContent}>
        <h2 className={styles.rightHeader}>
          ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย
        </h2>
        <div className={styles.listContainer}>
          <div className={styles.listItem}>องค์กรวิชาการระดับประเทศ</div>
          <div className={styles.listItem}>พัฒนาหลักสูตรเฉพาะทาง (Specialized Training)</div>
          <div className={styles.listItem}>มาตรฐานและการรับรอง (Accreditation & Credentialing)</div>
          <div className={styles.listItem}>ขับเคลื่อนระบบสุขภาพด้วยข้อมูล (Data-driven Healthcare)</div>
          <div className={styles.listItem}>เครือข่ายความร่วมมือระดับประเทศ</div>
          <div className={styles.listItem}>พัฒนาเภสัชกรสู่อนาคต (Future-ready Pharmacists)</div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
