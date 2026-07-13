export default function Topbar() {
    const today = new Date().toLocaleDateString("en-US", {
        day: "numeric", month: "long", year: "numeric",
    });

    return (
        <header style={styles.bar}>
            <input placeholder="Search transactions…" style={styles.search} />
            <div style={styles.right}>
                <span style={styles.date}>{today}</span>
                <div style={styles.avatar}>U</div>
            </div>
        </header>
    );
}

const styles = {
    bar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 32px",
    },
    search: {
        border: "1px solid var(--line)",
        borderRadius: 10,
        padding: "10px 16px",
        width: 260,
        background: "var(--card)",
        fontFamily: "var(--font-body)",
    },
    right: { display: "flex", alignItems: "center", gap: 16 },
    date: { color: "var(--muted)", fontSize: 14, fontFamily: "var(--font-mono)" },
    avatar: {
        width: 36, height: 36, borderRadius: "50%",
        background: "var(--navy)", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontWeight: 700,
    },
};