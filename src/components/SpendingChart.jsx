import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTransactions } from "../context/TransactionContext";

// Sophisticated, soft palette matching the design concept
const COLORS = ["#4f46e5", "#10b981", "#f59e0b", "#ef4444", "#3b82f6", "#ec4899"];

export default function SpendingChart() {
    const { transactions } = useTransactions();

    // Calculate totals exactly as your original logic
    const expenseTotals = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
        }, {});

    const data = Object.entries(expenseTotals).map(([name, value]) => ({ name, value }));

    if (data.length === 0) {
        return (
            <div style={styles.emptyContainer}>
                <p style={styles.emptyText}>No expenses recorded yet.</p>
            </div>
        );
    }

    return (
        <div style={styles.chartWrapper}>
            {/* Left Side: Modern Donut Chart */}
            <div style={styles.chartArea}>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={80}
                            innerRadius={55}
                            paddingAngle={5}
                        >
                            {data.map((_, i) => (
                                <Cell
                                    key={i}
                                    fill={COLORS[i % COLORS.length]}
                                    style={{ outline: "none", borderRadius: "8px" }}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={styles.tooltip}
                            itemStyle={{ color: "#334155", fontSize: "12px", fontWeight: "500" }}
                            border={false}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Right Side: Redesigned Minimalist Legend Grid */}
            <div style={styles.legendGrid}>
                {data.map((entry, i) => (
                    <div key={entry.name} style={styles.legendItem}>
                        <div style={styles.legendLeft}>
                            <span style={{ ...styles.colorIndicator, backgroundColor: COLORS[i % COLORS.length] }} />
                            <span style={styles.categoryName}>{entry.name}</span>
                        </div>
                        <span style={styles.categoryValue}>${entry.value.toLocaleString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    chartWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        width: "100%",
        padding: "8px 0",
    },
    chartArea: {
        flex: 1,
        maxHeight: "200px",
    },
    legendGrid: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxHeight: "200px",
        overflowY: "auto",
        paddingRight: "4px",
    },
    legendItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        background: "#f8fafc",
        borderRadius: "12px",
        border: "1px solid #f1f5f9",
    },
    legendLeft: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    colorIndicator: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        display: "inline-block",
    },
    categoryName: {
        fontSize: "12px",
        fontWeight: "600",
        color: "#475569",
    },
    categoryValue: {
        fontSize: "12px",
        fontWeight: "700",
        color: "#1e293b",
        fontFamily: "monospace",
    },
    tooltip: {
        background: "#ffffff",
        border: "none",
        borderRadius: "12px",
        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.05)",
        padding: "8px 12px",
    },
    emptyContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
        width: "100%",
    },
    emptyText: {
        color: "#94a3b8",
        fontSize: "13px",
        fontWeight: "500",
    },
};