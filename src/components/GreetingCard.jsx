export default function GreetingCard({ onAddClick }) {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    return (
        <div style={styles.card}>
            <div style={styles.textContainer}>
                {/* Your original expense tracking headline, styled cleanly */}
                <h1 style={styles.heading}>Let's check your money.</h1>
                <p style={styles.sub}>{greeting}! Here's a quick look at where things stand today.</p>

                {/* Expense tracking actions styled to match the checklist layout */}
                <div style={styles.linkGrid}>
                    <div style={styles.checkItem} onClick={onAddClick}>
                        <span style={{ ...styles.bullet, backgroundColor: "#3b82f6" }}></span>
                        Add Expense
                    </div>
                    <div style={styles.checkItem} onClick={onAddClick}>
                        <span style={{ ...styles.bullet, backgroundColor: "#f59e0b" }}></span>
                        Add Income
                    </div>
                    <div style={styles.checkItem}>
                        <span style={{ ...styles.bullet, backgroundColor: "#ef4444" }}></span>
                        View Report
                    </div>
                    <div style={styles.checkItem}>
                        <span style={{ ...styles.bullet, backgroundColor: "#10b981" }}></span>
                        Categories
                    </div>
                </div>
            </div>

            {/* Right side graphic container using a relevant financial icon */}
            <div style={styles.graphicWrap}>
                <div style={styles.avatarCircle}><image src="./public/Mascot.jfif" alt="Financial Icon" /></div>
            </div>
        </div>
    );
}

const styles = {
    card: {
        background: "#ffffff",
        borderRadius: "32px",
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
        position: "relative",
        overflow: "hidden",
    },
    textContainer: { flex: 1 },
    heading: {
        fontSize: "32px",
        fontWeight: "700",
        margin: "0 0 8px 0",
        color: "#1e293b",
        letterSpacing: "-0.02em",
    },
    sub: {
        color: "#94a3b8",
        margin: "0 0 32px 0",
        fontSize: "14px"
    },
    linkGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px 24px",
    },
    checkItem: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        fontSize: "14px",
        fontWeight: "500",
        color: "#334155",
        cursor: "pointer",
        transition: "opacity 0.2s ease",
    },
    bullet: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
    },
    graphicWrap: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "20px",
    },
    avatarCircle: {
        width: "130px",
        height: "130px",
        background: "#f8fafc",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "46px",
        border: "1px dashed #cbd5e1",
    }
};