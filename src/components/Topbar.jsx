export default function Topbar({ onCreateClick }) {
    const today = new Date().toLocaleDateString("en-US", {
        day: "numeric", month: "long", year: "numeric",
    });

    return (
        <header style={styles.bar}>
            <div style={styles.searchWrap}>
                <i className="fa-solid fa-magnifying-glass" style={styles.searchIcon}></i>
                <input placeholder="Search..." style={styles.search} />
            </div>

            <div style={styles.dateBadge}>
                <i className="fa-regular fa-calendar" style={{ marginRight: 8, color: "#64748b" }}></i>
                {today}
            </div>

            <div style={styles.right}>
                <div style={styles.iconAction}><i className="fa-regular fa-message" style={styles.bell}></i></div>
                <div style={styles.bellWrap}>
                    <i className="fa-regular fa-bell" style={styles.bell}></i>
                    <span style={styles.dot} />
                </div>

                <div style={styles.profileBlock}>
                    <div style={styles.avatar}>S</div>
                    <div style={styles.profileText}>
                        <p style={styles.profileName}>Sophia</p>
                        <p style={styles.profileRole}>Executive manager</p>
                    </div>
                </div>

                <button style={styles.createBtn} onClick={onCreateClick}>
                    <i className="fa-solid fa-plus" style={{ marginRight: 6 }}></i>
                    Create new
                </button>
            </div>
        </header>
    );
}

const styles = {
    bar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 32px",
        background: "#f3f5f9",
    },
    searchWrap: { position: "relative", width: "240px" },
    searchIcon: {
        position: "absolute", left: 16, top: "50%",
        transform: "translateY(-50%)", color: "#94a3b8", fontSize: 14,
    },
    search: {
        border: "none",
        borderRadius: "16px",
        padding: "12px 16px 12px 42px",
        width: "100%",
        background: "#ffffff",
        fontSize: "14px",
        outline: "none",
        boxShadow: "0 2px 4px rgba(0,0,0,0.01)",
    },
    dateBadge: {
        background: "#ffffff",
        padding: "10px 18px",
        borderRadius: "16px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#334155",
        boxShadow: "0 2px 4px rgba(0,0,0,0.01)",
    },
    right: { display: "flex", alignItems: "center", gap: "16px" },
    iconAction: {
        background: "#ffffff", width: "40px", height: "40px", borderRadius: "14px",
        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
    },
    bellWrap: {
        position: "relative", background: "#ffffff", width: "40px", height: "40px", borderRadius: "14px",
        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
    },
    bell: { color: "#64748b", fontSize: "16px" },
    dot: { position: "absolute", top: 10, right: 10, width: 7, height: 7, borderRadius: "50%", background: "#f59e0b" },
    profileBlock: {
        display: "flex", alignItems: "center", gap: "10px", background: "#ffffff",
        padding: "6px 14px 6px 6px", borderRadius: "16px",
    },
    avatar: {
        width: "32px", height: "32px", borderRadius: "12px", background: "#fee2e2",
        color: "#991b1b", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px",
    },
    profileText: { display: "flex", flexDirection: "column" },
    profileName: { margin: 0, fontSize: "13px", fontWeight: "700", color: "#1e293b" },
    profileRole: { margin: 0, fontSize: "10px", color: "#94a3b8" },
    createBtn: {
        background: "#3b82f6", color: "#ffffff", border: "none", padding: "12px 20px",
        borderRadius: "16px", fontWeight: "600", fontSize: "13px", cursor: "pointer",
        boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
    }
};