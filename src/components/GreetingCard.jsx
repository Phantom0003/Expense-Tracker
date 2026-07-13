export default function GreetingCard({ onAddClick }) {
    return (
        <div style={styles.card}>
            <div style={styles.textContainer}>
                <h1 style={styles.heading}>Hi, George!</h1>
                <p style={styles.sub}>What are we doing today?</p>

                <div style={styles.linkGrid}>
                    <div style={styles.checkItem} onClick={onAddClick}>
                        <span style={{ ...styles.bullet, backgroundColor: "#3b82f6" }}></span>
                        Check Calendar
                    </div>
                    <div style={styles.checkItem} onClick={onAddClick}>
                        <span style={{ ...styles.bullet, backgroundColor: "#f59e0b" }}></span>
                        Manage Wallet
                    </div>
                    <div style={styles.checkItem} onClick={onAddClick}>
                        <span style={{ ...styles.bullet, backgroundColor: "#ef4444" }}></span>
                        Manage Workers
                    </div>
                    <div style={styles.checkItem} onClick={onAddClick}>
                        <span style={{ ...styles.bullet, backgroundColor: "#10b981" }}></span>
                        Manage Projects
                    </div>
                </div>
            </div>

            <div style={styles.graphicWrap}>
                <div style={styles.avatarCircle}>P</div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        background: "#ffffff", borderRadius: "32px", padding: "40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)", position: "relative", overflow: "hidden",
    },
    textContainer: { flex: 1 },
    heading: { fontSize: "36px", fontWeight: "700", margin: "0 0 8px 0", color: "#1e293b" },
    sub: { color: "#94a3b8", margin: "0 0 32px 0", fontSize: "15px" },
    linkGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 24px" },
    checkItem: { display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", fontWeight: "500", color: "#334155", cursor: "pointer" },
    bullet: { width: "8px", height: "8px", borderRadius: "50%" },
    graphicWrap: { display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "20px" },
    avatarCircle: {
        width: "130px", height: "130px", background: "#f8fafc", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "42px",
        border: "1px dashed #cbd5e1", fontWeight: "700", color: "#6366f1"
    }
};