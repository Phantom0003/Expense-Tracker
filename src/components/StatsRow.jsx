import { useTransactions } from "../context/TransactionContext";

// Change this variable to your preferred currency type (e.g., "Rs.", "LKR", "$", "€")
const CURRENCY = "Rs. ";

export default function StatsGrid() {
    const { transactions } = useTransactions();

    const totalIncome = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalBalance = totalIncome - totalExpenses;

    const expenseTotals = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
        }, {});

    let topCategory = "None";
    let maxExpense = 0;
    Object.entries(expenseTotals).forEach(([category, amount]) => {
        if (amount > maxExpense) {
            maxExpense = amount;
            topCategory = category;
        }
    });

    return (
        <div style={styles.gridContainer}>
            {/* Card 1: Total Balance */}
            <div style={styles.card}>
                <div style={{ ...styles.iconWrapper, backgroundColor: "#eff6ff" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        <path d="M23 12h-4a2 2 0 0 0 0 4h4" />
                    </svg>
                </div>
                <span style={styles.label}>Total Balance</span>
                <h2 style={styles.value}>{CURRENCY}{totalBalance.toLocaleString()}</h2>
            </div>

            {/* Card 2: Total Income */}
            <div style={styles.card}>
                <div style={{ ...styles.iconWrapper, backgroundColor: "#dcfce7" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                    </svg>
                </div>
                <span style={styles.label}>Total Income</span>
                <h2 style={{ ...styles.value, color: "#10b981" }}>
                    +{CURRENCY}{totalIncome.toLocaleString()}
                </h2>
            </div>

            {/* Card 3: Total Expenses */}
            <div style={styles.card}>
                <div style={{ ...styles.iconWrapper, backgroundColor: "#fee2e2" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                        <polyline points="17 18 23 18 23 12" />
                    </svg>
                </div>
                <span style={styles.label}>Total Expenses</span>
                <h2 style={{ ...styles.value, color: "#ef4444" }}>
                    -{CURRENCY}{totalExpenses.toLocaleString()}
                </h2>
            </div>

            {/* Card 4: Top Expense Category */}
            <div style={styles.card}>
                <div style={{ ...styles.iconWrapper, backgroundColor: "#fef3c7" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                </div>
                <span style={styles.label}>Top Expense Category</span>
                <h2 style={styles.value}>{topCategory}</h2>
            </div>
        </div>
    );
}

const styles = {
    gridContainer: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", margin: "24px 0" },
    card: { background: "#ffffff", borderRadius: "24px", padding: "24px", display: "flex", flexDirection: "column", alignItems: "flex-start", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)" },
    iconWrapper: { width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" },
    label: { fontSize: "12px", fontWeight: "600", color: "#94a3b8", marginBottom: "6px" },
    value: { fontSize: "26px", fontWeight: "700", color: "#1e293b", margin: 0, letterSpacing: "-0.03em" },
};