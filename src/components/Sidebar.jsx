export default function Sidebar() {
    const icons = ["◧", "＋", "📁", "⚙"];
    return (
        <aside style={styles.sidebar}>
            <div style={styles.logo}>₭</div>
            <nav style={styles.nav}>
                {icons.map((icon, i) => (
                    <button key={i} style={{ ...styles.navBtn, ...(i === 0 ? styles.navActive : {}) }}>
                        {icon}
                    </button>
                ))}
            </nav>
        </aside>
    );
}

const styles = {
    sidebar: {
        background: "var(--navy)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 0",
    },
    logo: {
        color: "var(--green)",
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 22,
        marginBottom: 48,
    },
    nav: { display: "flex", flexDirection: "column", gap: 16 },
    navBtn: {
        width: 44,
        height: 44,
        borderRadius: 12,
        border: "none",
        background: "transparent",
        color: "rgba(255,255,255,0.5)",
        fontSize: 18,
        cursor: "pointer",
    },
    navActive: {
        background: "var(--navy-light)",
        color: "var(--green)",
    },
};