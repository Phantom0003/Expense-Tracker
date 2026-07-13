import { useTransactions } from "../context/TransactionContext";

// Keep this matching your chosen currency symbol (e.g., "Rs. ", "LKR ", "$")
const CURRENCY = "Rs. ";

export default function TransactionList({ selectedCategory }) {
    const { transactions } = useTransactions();

    // Filter transactions based on the selected category from the filter bar
    const filteredTransactions = transactions.filter((t) => {
        if (selectedCategory === "All") return true;
        return t.category.toLowerCase() === selectedCategory.toLowerCase();
    });

    if (filteredTransactions.length === 0) {
        return (
            <div style={styles.emptyState}>
                No transactions found for this category.
            </div>
        );
    }

    return (
        <div style={styles.listWrapper}>
            {filteredTransactions.map((t) => {
                const isIncome = t.type === "income";

                return (
                    <div key={t.id} style={styles.row}>
                        <div style={styles.leftSection}>
                            {/* Visual status indicator indicator */}
                            <span
                                style={{
                                    ...styles.statusDot,
                                    backgroundColor: isIncome ? "#10b981" : "#ef4444"
                                }}
                            />
                            <div>
                                <div style={styles.description}>{t.description}</div>
                                <div style={styles.meta}>
                                    {t.category} · {t.date}
                                </div>
                            </div>
                        </div>

                        {/* Updated Currency Display */}
                        <span
                            style={{
                                ...styles.amount,
                                color: isIncome ? "#10b981" : "#dc2626"
                            }}
                        >
                            {isIncome ? "+" : "-"}{CURRENCY}{t.amount.toLocaleString()}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

const styles = {
    listWrapper: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginTop: "16px",
    },
    row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.01)",
        border: "1px solid #f1f5f9",
    },
    leftSection: {
        display: "flex",
        alignItems: "center",
        gap: "14px",
    },
    statusDot: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
    },
    description: {
        fontSize: "14px",
        fontWeight: "600",
        color: "#1e293b",
        marginBottom: "2px",
    },
    meta: {
        fontSize: "12px",
        color: "#94a3b8",
    },
    amount: {
        fontSize: "14px",
        fontWeight: "700",
        fontFamily: "monospace",
    },
    emptyState: {
        textAlign: "center",
        padding: "32px",
        color: "#94a3b8",
        fontSize: "13px",
        fontWeight: "500",
    },
};