import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import styles from "./ChartsBlock.module.css"

const sectorData = [
    { name: "Transportation", value: 22.15 },
    { name: "Technology Service", value: 6.02 },
    { name: "Electronic Technology", value: 71.83 },
];

const industryData = [
    { name: "Other Transportation", value: 22.15 },
    { name: "Computer Processing Hardware", value: 6.02 },
    { name: "Telecommunication equipment", value: 71.83 },
    { name: "Semiconductors", value: 6.02 },
    { name: "Packaged Software", value: 6.02 },
    { name: "Electronic Production Equipment", value: 6.02 },
];

const COLORS = ["#8b5cf6", "#3b82f6", "#10b981", "#6366f1", "#f59e0b", "#9ca3af"];

export default function ChartsBlock() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Symbol Distribution</h1>
            <div className={styles.blocks}>
                <div className={styles.block}>
                    <h2 className={styles.title}>Stock Sectors</h2>
                    <PieChart width={480} height={300}>
                        <Pie
                            data={sectorData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            dataKey="value"
                        >
                            {sectorData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                {/* Industries */}
                <div className={styles.block}>
                    <h2 className={styles.title}>Industries</h2>
                    <PieChart width={480} height={300}>
                        <Pie
                            data={industryData}
                            cx="40%"   // сдвигаем пончик влево, чтобы освободить место
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            dataKey="value"
                        >
                            {industryData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>
                </div>
            </div>
        </div>
    );
}
