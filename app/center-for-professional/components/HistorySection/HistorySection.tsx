"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import LocationSection from "../LocationSection/LocationSection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";

import styles from "./HistorySection.module.css";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "วิสัยทัศน์และพันธกิจ",
    "คณะกรรมการ",
    "สถานที่ตั้ง",
];

const TIMELINE_DATA = [
    {
        year: "พ.ศ. 2545",
        title: "จุดเริ่มต้นและวิสัยทัศน์",
        descTitle: "ก่อตั้งกลุ่มงานวิชาการ:",
        description:
            "ริเริ่มแนวคิดการจัดตั้งหน่วยงานกลางเพื่อรองรับการขยายตัวของเทคโนโลยีทางการแพทย์\nและยกระดับบทบาทเภสัชกรจากผู้จ่ายยาสู่ผู้ดูแลสหสาขาวิชาชีพ",
    },
    {
        year: "พ.ศ. 2550",
        title: "การก่อตั้งศูนย์ฯ อย่างเป็นทางการ",
        descTitle: "Center Establishment:",
        description:
            "ประกาศจัดตั้ง \"ศูนย์พัฒนาการบริการทางวิชาชีพเภสัชกรรม\"\nเพื่อเป็นศูนย์กลางการฝึกอบรมและเพิ่มพูนทักษะเฉพาะทางให้กับเภสัชกรทั่วประเทศ",
    },
    {
        year: "พ.ศ. 2555",
        title: "การสร้างมาตรฐานการบริการ",
        descTitle: "Standard of Practice:",
        description:
            "จัดทำเกณฑ์มาตรฐานการบริการทางเภสัชกรรมเพื่อใช้เป็นบรรทัดฐานในสถานพยาบาล\nและเริ่มโครงการ \"Smart Pharmacy Service\" ยกระดับการให้คำปรึกษาในระดับชุมชน",
    },
    {
        year: "พ.ศ. 2560",
        title: "การพัฒนาเครือข่าย",
        descTitle: "Research & Innovation:",
        description:
            "ส่งเสริมการวิจัยเชิงปฏิบัติการและสร้างเครือข่ายความร่วมมือกับสถาบันการศึกษาชั้นนำ\nเพื่อนำนวัตกรรมการจัดการยาที่ทันสมัยมาปรับใช้ในบริบทสาธารณสุขไทย"
    },
    {
        year: "พ.ศ. 2565",
        title: "การเปลี่ยนผ่านสู่ดิจิทัล",
        descTitle: "E-Learning Platform:",
        description:
            "พัฒนาระบบเรียนรู้ออนไลน์และ Tele-pharmacy Training\nเพื่อให้บุคลากรเข้าถึงองค์ความรู้ใหม่ๆ ได้อย่างไร้ขีดจำกัดเรื่องสถานที่และเวลา"
    },
    {
        year: "พ.ศ. 2569 - ปัจจุบัน",
        title: "มุ่งสู่ศูนย์กลางระดับภูมิภาค",
        descTitle: "Regional Hub:",
        description:
            "มุ่งมั่นสู่การเป็นผู้นำด้านการพัฒนาศักยภาพเภสัชกรในระดับอาเซียน\nรองรับการเปลี่ยนแปลงของระบบสุขภาพยุคใหม่และนวัตกรรมยาระดับโลก"
    }
];



export default function HistorySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>"อัปเกรดทักษะวิชาชีพ...<br></br> ไม่หยุดเรียนรู้ ก้าวสู่เภสัชกรแถวหน้า"</h3>

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
                           "ยกระดับมาตรฐาน พัฒนาศักยภาพ เพื่อก้าวต่อไปของวิชาชีพเภสัชกรรม"
                        </h2>

                        <p className={styles.subText}>
                           ศูนย์พัฒนาการบริการทางวิชาชีพเภสัชกรรม ก่อตั้งขึ้นจากความวิสัยทัศน์ที่ต้องการเชื่อมโยงองค์ความรู้จากห้องเรียนสู่การปฏิบัติงานจริง
ในสถานพยาบาลและชุมชนเริ่มแรกจากการเป็นหน่วยงานสนับสนุนเล็กๆ  ที่มุ่งเน้นการจัดอบรมระยะสั้น จนกระทั่งเล็งเห็นความสำคัญ
ของการสร้างเครือข่ายวิชาชีพที่เข้มแข็ง เราจึงได้ขยายบทบาทสู่การเป็นศูนย์กลางในการกำหนดมาตรฐานการบริการ การวิจัยเชิงปฏิบัติการ และการเป็นที่ปรึกษาด้านวิชาชีพ เพื่อตอบสนองต่อระบบสาธารณสุขของประเทศที่ต้องการความเชี่ยวชาญ
เฉพาะทางจากเภสัชกรมากขึ้นในปัจจุบัน
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <div className={styles.timelineDesc}>
                                        <strong className={styles.descTitle}>{item.descTitle}</strong>
                                        <span>{item.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                     
                        
                    </>
                )}

                {activeTab === 1 && <VisionMissionSection />}

                {activeTab === 2 && <CommitteeSection />}



                {activeTab === 3 && <LocationSection />}

            </div>

        </section>
    );
}
