import { useTransactions } from "../context/TransactionContext";
import PeekingMascot from "./PeekingMascot"; 

export default function RecentActivity() {
    const { transactions } = useTransactions();
    const recent = transactions.slice(0, 2);

    return (
        <div style={styles.panel}>
            <div style={styles.header}>
                <h3 style={styles.title}>
                    <i className="fa-regular fa-bell" style={{ marginRight: 8, color: "#4f46e5" }}></i>
                    Notifications
                </h3>
                <span style={styles.seeAll}>See all</span>
            </div>

            {recent.length === 0 && (
                <div style={styles.row}>
                    <div style={{ ...styles.iconWrap, background: "#fef3c7", color: "#d97706" }}><i className="fa-solid fa-info"></i></div>
                    <p style={styles.rowTitle}>No transaction history alerts recorded yet.</p>
                </div>
            )}

            <div style={styles.listStack}>
                {recent.map((t, idx) => {
                    const themes = [
                        { bg: "#fef3c7", icon: "#d97706", element: "fa-briefcase" },
                        { bg: "#fee2e2", icon: "#dc2626", element: "fa-arrow-trend-up" }
                    ];
                    const choice = themes[idx % themes.length];

                    return (
                        <div key={t.id} style={styles.row}>
                            <div style={{ ...styles.iconWrap, background: choice.bg, color: choice.icon }}>
                                <i className={`fa-solid ${choice.element}`}></i>
                            </div>
                            <div style={styles.rowText}>
                                <p style={styles.rowTitle}>{t.description || t.category}</p>
                                <p style={styles.rowSub}>
                                    <span style={{ color: t.type === "income" ? "#10b981" : "#ef4444", fontWeight: "600" }}>
                                        {t.type === "income" ? "+" : "-"}Rs{t.amount}
                                    </span>
                                    {` · ${t.date}`}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const styles = {
    panel: { background: "#ffffff", borderRadius: "32px", padding: "32px 24px", display: "flex", flexDirection: "column" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" },
    title: { fontSize: "15px", fontWeight: "700", margin: 0, color: "#1e293b", display: "flex", alignItems: "center" },
    seeAll: { fontSize: "12px", color: "#4f46e5", cursor: "pointer", fontWeight: "600" },
    listStack: { display: "flex", flexDirection: "column", gap: "12px" },
    row: { display: "flex", alignItems: "center", gap: "14px", padding: "14px", background: "#f8fafc", borderRadius: "20px", border: "1px solid #f1f5f9" },
    iconWrap: { width: "36px", height: "36px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" },
    rowText: { flex: 1 },
    rowTitle: { margin: "0 0 2px 0", fontSize: "12px", fontWeight: "600", color: "#334155", lineHeight: "1.4" },
    rowSub: { margin: 0, fontSize: "11px", color: "#94a3b8" },
};