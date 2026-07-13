export default function Sidebar() {
    const icons = ["fa-grid-2", "fa-plus", "fa-folder-open", "fa-gear"];
    return (
        <aside style={styles.sidebar}>
            <div style={styles.logo}>
                <i className="fa-solid fa-wallet"></i>
            </div>
            <nav style={styles.nav}>
                {icons.map((icon, i) => (
                    <button key={i} style={{ ...styles.navBtn, ...(i === 0 ? styles.navActive : {}) }}>
                        <i className={`fa-solid ${icon}`}></i>
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
        fontSize: 16,
        cursor: "pointer",
    },
    navActive: {
        background: "var(--navy-light)",
        color: "var(--green)",
    },
};