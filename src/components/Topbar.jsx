export default function Topbar() {
    const today = new Date().toLocaleDateString("en-US", {
        day: "numeric", month: "long", year: "numeric",
    });

    return (
        <header style={styles.bar}>
            <div style={styles.searchWrap}>
                <i className="fa-solid fa-magnifying-glass" style={styles.searchIcon}></i>
                <input placeholder="Search transactions…" style={styles.search} />
            </div>
            <div style={styles.right}>
                <span style={styles.date}>
                    <i className="fa-regular fa-calendar" style={{ marginRight: 6 }}></i>
                    {today}
                </span>
                <div style={styles.bellWrap}>
                    <i className="fa-regular fa-bell" style={styles.bell}></i>
                    <span style={styles.dot} />
                </div>
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
    searchWrap: { position: "relative", width: 260 },
    searchIcon: {
        position: "absolute", left: 14, top: "50%",
        transform: "translateY(-50%)", color: "var(--muted)", fontSize: 13,
    },
    search: {
        border: "1px solid var(--line)",
        borderRadius: 10,
        padding: "10px 16px 10px 36px",
        width: "100%",
        background: "var(--card)",
        fontFamily: "var(--font-body)",
    },
    right: { display: "flex", alignItems: "center", gap: 20 },
    date: { color: "var(--muted)", fontSize: 14, fontFamily: "var(--font-mono)" },
    bellWrap: { position: "relative", fontSize: 17 },
    bell: { cursor: "pointer", color: "var(--ink)" },
    dot: {
        position: "absolute", top: -3, right: -3,
        width: 8, height: 8, borderRadius: "50%",
        background: "var(--coral)", border: "2px solid var(--paper)",
    },
    avatar: {
        width: 36, height: 36, borderRadius: "50%",
        background: "var(--navy)", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontWeight: 700,
    },
};