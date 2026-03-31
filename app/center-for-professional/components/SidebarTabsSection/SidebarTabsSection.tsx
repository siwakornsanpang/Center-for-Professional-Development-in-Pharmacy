"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import LocationSection from "../LocationSection/LocationSection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";

import styles from "./SidebarTabsSection.module.css";
import HistorySection from "../HistorySection/HistorySection";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "วิสัยทัศน์และพันธกิจ",
    "คณะกรรมการ",
    "สถานที่ตั้ง",
];





export default function SidebarTabsSection() {
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

                {activeTab === 0 && <HistorySection />}

                {activeTab === 1 && <VisionMissionSection />}

                {activeTab === 2 && <CommitteeSection />}



                {activeTab === 3 && <LocationSection />}

            </div>

        </section>
    );
}
