"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import EmblemSection from "../EmblemSection/EmblemSection";
import LocationSection from "../LocationSection/LocationSection";
import ResearchSection from "../ResearchSection/ResearchSection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";

import styles from "./HistorySection.module.css";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "วิสัยทัศน์และพันธกิจ",
    "คณะกรรมการราชวิทยาลัยเภสัชกรรม",
    "ตราสัญลักษณ์",
    "งานวิจัยตีพิมพ์",
    "สถานที่ตั้งราชวิทยาลัยเภสัชกรรม",
];

const TIMELINE_DATA = [
    {
        year: "พ.ศ. 2478 - 2480",
        title: "จุดเริ่มต้นแห่งมาตรฐาน",
        description:
            "ประกาศใช้พระราชบัญญัติควบคุมการประกอบโรคศิลปะ เพื่อบำรุงมาตรฐานการประกอบวิชาชีพเภสัชกรรมให้ดียิ่งขึ้นเพื่อสวัสดิการของประชาชน",
    },
    {
        year: "พ.ศ. 2565 - 2567",
        title: "การวางรากฐานและปณิธาน",
        description:
            "ในวาระของ รศ.(พิเศษ) ภก.กิตติ พิทักษ์นิตินันท์ (นายกสภาเภสัชกรรม วาระที่ 10) ได้ผลักดันแนวคิดการจัดตั้ง \"ราชวิทยาลัย\" เพื่อตอบโจทย์ความก้าวหน้าทางเทคโนโลยีและสถานการณ์สาธารณสุขโลก",
    },
    {
        year: "พ.ศ. 15 พฤศจิกายน 2567",
        title: "การประกาศใช้อย่างเป็นทางการ",
        description:
            "ข้อบังคับสภาเภสัชกรรม ว่าด้วยราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย พ.ศ. 2567 มีผลบังคับใช้ตามกฎหมาย (ประกาศในราชกิจจานุเบกษาเมื่อวันที่ 14 พฤศจิกายน 2567)",
    },
    {
        year: "ปัจจุบัน (พ.ศ. 2568 เป็นต้นไป)",
        title: "การขับเคลื่อนสู่ทางปฏิบัติ",
        description:
            "ภายใต้การนำของ ภก.ปรีชา พันธุ์ติเวช (นายกสภาเภสัชกรรม วาระที่ 11) ได้เดินหน้าจัดตั้งสำนักงาน ณ ชั้น 9 อาคารมหิตลาธิเบศร และขับเคลื่อนวิทยาลัยชำนาญการทั้ง 7 แห่งอย่างเต็มรูปแบบ"
    }
];



export default function HistorySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>จากมาตรฐานวิชาชีพ<br></br>สู่คุณค่าที่ส่งต่อถึงผู้ป่วยและสังคม</h3>

                <ul>
                    {MENU_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={`${styles.menuItem} ${activeTab === index ? styles.active : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.historyContent}>

                {activeTab === 0 && (
                    <>
                        {/* HEADING */}
                        <h2 className={styles.mainHeading}>
                            "จากปณิธานในการยกระดับมาตรฐานการประกอบประกอบวิชาชีพเภสัชกรรมสู่การจัดตั้งสถาบันทางวิชาการชั้นสูงของเภสัชกรไทย"
                        </h2>

                        <p className={styles.subText}>
                           ความเป็นมาของราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย มีจุดเริ่มต้นที่เชื่อมโยงกับประวัติศาสตร์การกำกับดูแลวิชาชีพของชาติ โดยสามารถลำดับเหตุการณ์สำคัญได้ดังนี้:
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <p className={styles.timelineDesc} >{item.description}</p>
                                </div>
                            ))}
                        </div>

                     
                        
                    </>
                )}

                {activeTab === 1 && <VisionMissionSection />}

                {activeTab === 2 && <CommitteeSection />}

                {activeTab === 3 && <EmblemSection />}
                {activeTab === 4 && <ResearchSection/>}

                {activeTab === 5 && <LocationSection />}

            </div>

        </section>
    );
}
