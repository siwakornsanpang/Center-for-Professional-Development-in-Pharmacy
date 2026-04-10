import styles from "./SidebarTabsSection.module.css";

// สร้าง Type เพื่อบังคับให้ ID เป็นค่าที่กำหนดเท่านั้น (ป้องกันพิมพ์ผิด)
export type TabId = 
  | "history" 
  | "vision" 
  | "committee" 
  | "location";

export interface MenuItem {
  id: TabId;
  label: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}

export default function Sidebar({ menuItems, activeTab, onTabChange }: SidebarProps) {
  return (
    <div className={styles.historyMenu}>
      <h3>"อัปเกรดทักษะวิชาชีพ... <br />ไม่หยุดเรียนรู้ ก้าวสู่เภสัชกรแถวหน้า"</h3>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`${styles.menuItem} ${activeTab === item.id ? styles.active : ""}`}
            onClick={() => onTabChange(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}