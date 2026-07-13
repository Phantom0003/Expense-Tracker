import { useTransactions } from "../context/TransactionContext";

export default function RecentActivity() {
    const { transactions } = useTransactions();
    const recent = transactions.slice(0, 4);

    return (
        <div style={styles.panel}>
            <div style={styles.header}>
                <h3 style={styles.title}>Recent Activity</h3>
                <span style={styles.seeAll}>See all</span>
            </div>

            {recent.length === 0 && <p style={styles.empty}>No transactions yet.</p>}

            {recent.map((t) => (
                <div key={t.id} style={styles.row}>
                    <div style={{
                        ...styles.iconWrap,
                        background: t.type === "income" ? "var(--green-soft)" : "var(--coral-soft)",
                    }}>
                        {t.type === "income" ? "↑" : "↓"}
                    </div>
                    <div style={styles.rowText}>
                        <p style={styles.rowTitle}>{t.description || t.category}</p>
                        <p style={styles.rowSub}>{t.category} · {t.date}</p>
                    </div>
                    <span style={{
                        ...styles.amount,
                        color: t.type === "income" ? "var(--green)" : "var(--coral)",
                    }}>
                        {t.type === "income" ? "+" : "-"}${t.amount}
                    </span>
                </div>
            ))}
        </div>
    );
}

const styles = {
    panel: {
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 20,
        padding: "24px",
    },
    header: { display: "flex", justifyContent: "space-between", marginBottom: 16 },
    title: { fontFamily: "var(--font-display)", fontSize: 16, margin: 0 },
    seeAll: { fontSize: 13, color: "var(--green)", cursor: "pointer" },
    empty: { color: "var(--muted)", fontSize: 14 },
    row: { display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid var(--line)" },
    iconWrap: {
        width: 36, height: 36, borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 700,
    },
    rowText: { flex: 1 },
    rowTitle: { margin: 0, fontSize: 14, fontWeight: 500 },
    rowSub: { margin: 0, fontSize: 12, color: "var(--muted)" },
    amount: { fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700 },
};