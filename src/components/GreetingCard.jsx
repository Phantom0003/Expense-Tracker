export default function GreetingCard({ onAddClick }) {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    return (
        <div style={styles.card}>
            <p style={styles.eyebrow}>{greeting.toUpperCase()}</p>
            <h1 style={styles.heading}>Let's check your money.</h1>
            <p style={styles.sub}>Here's a quick look at where things stand today.</p>

            <div style={styles.linkGrid}>
                <button style={styles.link} onClick={onAddClick}>
                    <i className="fa-solid fa-circle-plus" style={styles.linkIcon}></i> Add Expense
                </button>
                <button style={styles.link} onClick={onAddClick}>
                    <i className="fa-solid fa-sack-dollar" style={styles.linkIcon}></i> Add Income
                </button>
                <button style={styles.link}>
                    <i className="fa-solid fa-chart-column" style={styles.linkIcon}></i> View Report
                </button>
                <button style={styles.link}>
                    <i className="fa-solid fa-tags" style={styles.linkIcon}></i> Categories
                </button>
            </div>
        </div>
    );
}

const styles = {
    card: {
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 20,
        padding: "32px",
    },
    eyebrow: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: 2,
        color: "var(--green)",
        margin: 0,
    },
    heading: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        fontWeight: 700,
        margin: "8px 0 4px",
    },
    sub: { color: "var(--muted)", margin: "0 0 24px", fontSize: 14 },
    linkGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
    },
    link: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        border: "1px solid var(--line)",
        background: "var(--paper)",
        borderRadius: 10,
        padding: "10px 14px",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        cursor: "pointer",
        textAlign: "left",
    },
    linkIcon: { fontSize: 14, color: "var(--green)", width: 16 },
};