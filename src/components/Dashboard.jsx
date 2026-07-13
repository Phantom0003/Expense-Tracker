import { useTransactions } from "../context/TransactionContext";

export default function Dashboard() {
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

    return (
        <div style={{ padding: "0 32px 32px" }}>
            {/* Signature receipt card */}
            <div style={styles.receiptCard}>
                <p style={styles.eyebrow}>CURRENT BALANCE</p>
                <h1 style={styles.balance}>${balance.toFixed(2)}</h1>
                <div style={styles.perforation} />
            </div>

            {/* Stat tiles */}
            <div style={styles.grid}>
                <Tile label="Total Income" value={income} tone="green" />
                <Tile label="Total Expenses" value={expenses} tone="coral" />
                <Tile label="Top Category" value={topCategory} isText />
                <Tile label="Transactions" value={transactions.length} isText />
            </div>
        </div>
    );
}

function Tile({ label, value, tone, isText }) {
    return (
        <div style={styles.tile}>
            <p style={styles.tileLabel}>{label}</p>
            <p style={{
                ...styles.tileValue,
                color: tone === "green" ? "var(--green)" : tone === "coral" ? "var(--coral)" : "var(--ink)",
            }}>
                {isText ? value : `$${Number(value).toFixed(2)}`}
            </p>
        </div>
    );
}

const styles = {
    receiptCard: {
        position: "relative",
        background: "var(--navy)",
        color: "#fff",
        borderRadius: "20px 20px 0 0",
        padding: "32px 32px 40px",
        marginBottom: 28,
        overflow: "hidden",
    },
    eyebrow: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: 2,
        color: "rgba(255,255,255,0.5)",
        margin: 0,
    },
    balance: {
        fontFamily: "var(--font-display)",
        fontSize: 48,
        fontWeight: 800,
        margin: "8px 0 0",
    },
    perforation: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 12,
        background: "repeating-linear-gradient(90deg, var(--paper) 0 10px, transparent 10px 20px)",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16,
    },
    tile: {
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 14,
        padding: "18px 20px",
    },
    tileLabel: {
        fontSize: 13,
        color: "var(--muted)",
        margin: 0,
    },
    tileValue: {
        fontFamily: "var(--font-mono)",
        fontSize: 22,
        fontWeight: 700,
        margin: "6px 0 0",
    },
};