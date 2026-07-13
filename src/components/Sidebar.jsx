export default function Sidebar() {
    const icons = ["fa-grid-2", "fa-wallet", "fa-folder-open", "fa-gear"];
    return (
        <aside style={styles.sidebar}>
            <div style={styles.logo}>
                <div style={styles.logoIcon}>A</div>
            </div>
            <nav style={styles.nav}>
                {icons.map((icon, i) => (
                    <button key={i} style={{ ...styles.navBtn, ...(i === 0 ? styles.navActive : {}) }}>
                        <i className={`fa-solid ${icon}`}></i>
                    </button>
                ))}
            </nav>
            <div style={{ marginTop: "auto" }}>
                <button style={styles.navBtn}>
                    <i className="fa-solid fa-gear"></i>
                </button>
            </div>
        </aside>
    );
}

const styles = {
    sidebar: {
        background: "#ffffff",
        width: "85px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 0",
        borderRight: "1px solid #eef2f6",
        position: "sticky",
        top: 0,
    },
    logo: { marginBottom: "48px" },
    logoIcon: {
        width: "42px",
        height: "42px",
        background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
        borderRadius: "14px",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "18px",
        boxShadow: "0 4px 12px rgba(79, 70, 229, 0.15)",
    },
    nav: { display: "flex", flexDirection: "column", gap: "20px" },
    navBtn: {
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        border: "none",
        background: "transparent",
        color: "#a3b1cc",
        fontSize: "18px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
    },
    navActive: { background: "#f0f4ff", color: "#4f46e5" },
};