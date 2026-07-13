import { useTransactions } from "../context/TransactionContext";

export default function TransactionList({ selectedCategory }) {
    const { transactions, deleteTransaction } = useTransactions();

    const filtered = selectedCategory === "All"
        ? transactions
        : transactions.filter((t) => t.category === selectedCategory);

    if (filtered.length === 0) {
        return <p style={styles.empty}>No line items correspond with this matching metric tab view.</p>;
    }

    return (
        <div style={styles.listStack}>
            {filtered.map((t) => (
                <div key={t.id} style={styles.itemRow}>
                    <div style={styles.left}>
                        <div style={{ ...styles.dotIndicator, backgroundColor: t.type === "income" ? "#10b981" : "#ef4444" }} />
                        <div>
                            <p style={styles.desc}>{t.description || t.category}</p>
                            <p style={styles.meta}>{`${t.category} · ${t.date}`}</p>
                        </div>
                    </div>
                    <div style={styles.right}>
                        <span style={{ ...styles.amount, color: t.type === "income" ? "#10b981" : "#ef4444" }}>
                            {t.type === "income" ? "+" : "-"}${t.amount.toLocaleString()}
                        </span>
                        <button onClick={() => deleteTransaction(t.id)} style={styles.delBtn}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    listStack: { display: "flex", flexDirection: "column", gap: "8px" },
    itemRow: {
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "12px 16px", background: "#f8fafc", borderRadius: "16px", border: "1px solid #f1f5f9",
    },
    left: { display: "flex", alignItems: "center", gap: "12px" },
    dotIndicator: { width: "6px", height: "6px", borderRadius: "50%" },
    desc: { margin: 0, fontSize: "13px", fontWeight: "600", color: "#334155" },
    meta: { margin: 0, fontSize: "11px", color: "#94a3b8", marginTop: "2px" },
    right: { display: "flex", alignItems: "center", gap: "16px" },
    amount: { fontSize: "13px", fontWeight: "700" },
    delBtn: {
        background: "transparent", border: "none", color: "#cbd5e1",
        cursor: "pointer", fontSize: "12px", transition: "color 0.2s",
    },
    empty: { color: "#94a3b8", fontSize: "12px", padding: "16px 0", textAlign: "center" },
};