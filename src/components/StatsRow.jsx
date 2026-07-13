import { useTransactions } from "../context/TransactionContext";

export default function StatsRow() {
    const { transactions } = useTransactions();

    const income = transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
    const expenses = transactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
    const balance = income - expenses;

    const topCategory = (() => {
        const totals = {};
        transactions.filter(t => t.type === "expense").forEach(t => {
            totals[t.category] = (totals[t.category] || 0) + t.amount;
        });
        return Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0] || "None";
    })();

    const stats = [
        { icon: "fa-wallet", label: "Potential Monthly Profit", value: `$${balance.toLocaleString()}`, bg: "#fee2e2", color: "#ef4444" },
        { icon: "fa-users", label: "Workers Wage This Month", value: `$${expenses.toLocaleString()}`, bg: "#dbeafe", color: "#3b82f6" },
        { icon: "fa-calendar-days", label: "Average Project Length", value: "2 weeks", bg: "#fef3c7", color: "#f59e0b" },
        { icon: "fa-arrow-trend-up", label: "Average Income Category", value: topCategory, bg: "#d1fae5", color: "#10b981" },
    ];

    return (
        <div style={styles.grid}>
            {stats.map((s) => (
                <div key={s.label} style={styles.tile}>
                    <div style={{ ...styles.iconContainer, backgroundColor: s.bg, color: s.color }}>
                        <i className={`fa-solid ${s.icon}`}></i>
                    </div>
                    <div>
                        <p style={styles.label}>{s.label}</p>
                        <h2 style={styles.value}>{s.value}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" },
    tile: { background: "#ffffff", borderRadius: "28px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "150px", border: "1px solid #f8fafc" },
    iconContainer: { width: "40px", height: "40px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" },
    label: { fontSize: "12px", fontWeight: "500", color: "#94a3b8", margin: "0 0 4px 0" },
    value: { fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: 0, trackingTight: "-0.02em" },
};