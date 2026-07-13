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
        const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
        return sorted[0]?.[0] || "—";
    })();

    const stats = [
        { icon: "fa-wallet", label: "Current Balance", value: `$${balance.toFixed(2)}` },
        { icon: "fa-arrow-trend-up", label: "Total Income", value: `$${income.toFixed(2)}` },
        { icon: "fa-arrow-trend-down", label: "Total Expenses", value: `$${expenses.toFixed(2)}` },
        { icon: "fa-tag", label: "Top Category", value: topCategory },
    ];

    return (
        <div style={styles.grid}>
            {stats.map((s) => (
                <div key={s.label} style={styles.tile}>
                    <i className={`fa-solid ${s.icon}`} style={styles.icon}></i>
                    <p style={styles.label}>{s.label}</p>
                    <p style={styles.value}>{s.value}</p>
                </div>
            ))}
        </div>
    );
}

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16,
        marginTop: 20,
    },
    tile: {
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 16,
        padding: "18px 20px",
    },
    icon: { fontSize: 18, color: "var(--green)" },
    label: { fontSize: 13, color: "var(--muted)", margin: "10px 0 2px" },
    value: { fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 700, margin: 0 },
};