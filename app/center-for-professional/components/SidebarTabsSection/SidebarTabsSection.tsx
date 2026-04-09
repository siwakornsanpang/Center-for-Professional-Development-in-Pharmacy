"use client";
import { useState, useMemo } from "react";
import Sidebar, { MenuItem, TabId } from "./Sidebar";

// นำเข้า Sections ต่างๆ จากโครงสร้างโฟลเดอร์ของคุณ
import HistorySection from "./Tabs/HistorySection/HistorySection";
import VisionMissionSection from "./Tabs/VisionMissionSection/VisionMissionSection";
import CommitteeSection from "./Tabs/CommitteeSection/CommitteeSection";
import LocationSection from "./Tabs/LocationSection/LocationSection";

import styles from "./SidebarTabsSection.module.css";

// กำหนดข้อมูลเมนูโดยใช้ String ID แทน Index (ตัวเลข)
const MENU_ITEMS: MenuItem[] = [
    { id: "history", label: "ประวัติความเป็นมา" },
    { id: "vision", label: "วิสัยทัศน์และพันธกิจ" },
    { id: "committee", label: "คณะกรรมการบริหาร" },
    { id: "location", label: "ติดต่อและสถานที่ตั้ง" },
];

export default function SidebarTabsSection() {
    // ใช้ String ID ('history') เป็นค่าเริ่มต้นแทนตัวเลข 0
    const [activeTab, setActiveTab] = useState<TabId>("history");

    // ใช้ Object Mapping จับคู่ ID กับ Component (คลีนกว่า if-else หรือ &&)
    const tabContent: Record<TabId, React.ReactNode> = useMemo(() => ({
        history: <HistorySection />,
        vision: <VisionMissionSection />,
        committee: <CommitteeSection />,
        location: <LocationSection />,
    }), []);

    return (
        <section className={styles.historySection}>
            
            {/* LEFT MENU: เรียกใช้ Component ที่แยกไว้ */}
            <Sidebar 
                menuItems={MENU_ITEMS} 
                activeTab={activeTab} 
                onTabChange={setActiveTab} 
            />

            {/* RIGHT CONTENT: ดึง Component ออกมาแสดงผลตาม ID ตรงๆ */}
            <div className={styles.historyContent}>
                {tabContent[activeTab]}
            </div>

        </section>
    );
}