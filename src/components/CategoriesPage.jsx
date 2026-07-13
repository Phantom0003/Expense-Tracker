import { useState } from "react";

export default function CategoriesPage() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const categories = [
        {
            id: "food",
            name: "Food & Dining",
            budget: 20000,
            spent: 12000,
            color: "#3b82f6",
            bg: "#eff6ff",
            icon: "fa-utensils",
            status: "safe"
        },
        {
            id: "shopping",
            name: "Shopping",
            budget: 15000,
            spent: 16500,
            color: "#ef4444",
            bg: "#fef2f2",
            icon: "fa-bag-shopping",
            status: "over" // Triggers panic animation
        },
        {
            id: "entertainment",
            name: "Entertainment",
            budget: 12000,
            spent: 10800,
            color: "#f59e0b",
            bg: "#fffbeb",
            icon: "fa-film",
            status: "warning" // Triggers nervous animation
        },
        {
            id: "transport",
            name: "Transportation",
            budget: 10000,
            spent: 3500,
            color: "#10b981",
            bg: "#ecfdf5",
            icon: "fa-car",
            status: "safe"
        }
    ];

    // Total calculations
    const totalBudget = categories.reduce((sum, c) => sum + c.budget, 0);
    const totalSpent = categories.reduce((sum, c) => sum + c.spent, 0);
    const totalPercentage = Math.min(Math.round((totalSpent / totalBudget) * 100), 100);

    return (
        <div style={styles.pageContainer}>
            {/* Embedded mascot engine configurations for the budget rules */}
            <style>{`
                /* TOP BANNER: Smooth Mascot Peeking & Nodding */
                @keyframes coachPeek {
                    0% { transform: translateY(100%); }
                    100% { transform: translateY(15px); }
                }
                @keyframes coachNod {
                    0%, 100% { transform: translateY(15px) rotate(0deg); }
                    50% { transform: translateY(10px) rotate(2deg); }
                }
                .summary-card:hover .coach-mascot {
                    animation: coachPeek 0.3s ease-out forwards, coachNod 1.5s ease-in-out infinite alternate 0.3s;
                }

                /* CATEGORY BAR: Chill Relaxed Floating (Safe Status) */
                @keyframes chillFloat {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-4px) rotate(3deg); }
                }
                .category-tile:hover .mascot-safe {
                    animation: chillFloat 0.8s ease-in-out infinite;
                }

                /* CATEGORY BAR: Severe Panic / Shaking (Over/Warning Status) */
                @keyframes barPanicPop {
                    0% { transform: translateY(100%); }
                    100% { transform: translateY(0); }
                }
                @keyframes rapidShiver {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(-1.5px, 1px); }
                    75% { transform: translate(1.5px, -1px); }
                }
                .category-tile:hover .mascot-panic {
                    animation: barPanicPop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, rapidShiver 0.1s linear infinite 0.2s;
                }
                .category-tile:hover .sweat-drop {
                    opacity: 1 !important;
                    transition: opacity 0.2s 0.2s;
                }
            `}</style>

            <div style={styles.header}>
                <h1 style={styles.pageTitle}>Category Budgets</h1>
                <p style={styles.pageSubtitle}>Monitor monthly thresholds and keep spending categories healthy.</p>
            </div>

            {/* Master Summary Card with Coach Mascot */}
            <div className="summary-card" style={styles.summaryCard}>
                <div style={styles.summaryTextContent}>
                    <span style={styles.summaryBadge}>Overall Budget Health</span>
                    <h2 style={styles.summaryVolume}>Rs. {totalSpent.toLocaleString()} / Rs. {totalBudget.toLocaleString()}</h2>
                    <div style={styles.overallTrack}>
                        <div style={{ ...styles.overallFill, width: `${totalPercentage}%` }} />
                    </div>
                    <p style={styles.summaryFeedback}>You have consumed {totalPercentage}% of your aggregate allowance.</p>
                </div>

                {/* Coach Mascot: Hidden inside bottom line framework until wrapper hover occurs */}
                <div className="coach-mascot" style={styles.coachMascotWrapper}>
                    <svg width="70" height="70" viewBox="0 0 60 50" fill="none">
                        <path d="M30 12C30 12 26 2 31 0C33 2 34 12 34 12Z" fill="#64748b" />
                        <path d="M14 50C12 30 18 14 34 14C50 14 56 30 54 50Z" fill="#8293a4" stroke="#475569" strokeWidth="2" />
                        <path d="M21 50C21 38 26 30 34 30C42 30 47 38 47 50Z" fill="#ffffff" />
                        {/* Wearing cute round reading/coaching glasses */}
                        <circle cx="27" cy="42" r="5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
                        <circle cx="41" cy="42" r="5" stroke="#1e293b" strokeWidth="1.5" fill="none" />
                        <line x1="32" y1="42" x2="36" y2="42" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M31 48Q34 46 37 48" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    </svg>
                </div>
            </div>

            {/* Grid of Dynamic Category Budget Cards */}
            <div style={styles.grid}>
                {categories.map((cat) => {
                    const ratio = Math.min(cat.spent / cat.budget, 1.2);
                    const percent = Math.round((cat.spent / cat.budget) * 100);
                    const isOver = cat.status === "over";
                    const isWarning = cat.status === "warning";

                    return (
                        <div
                            key={cat.id}
                            className="category-tile"
                            style={styles.tile}
                            onMouseEnter={() => setHoveredCard(cat.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div style={styles.cardHeader}>
                                <div style={{ ...styles.iconWrapper, backgroundColor: cat.bg }}>
                                    <i className={`fa-solid ${cat.icon}`} style={{ ...styles.icon, color: cat.color }} />
                                </div>
                                <div style={styles.titleBlock}>
                                    <h4 style={styles.catName}>{cat.name}</h4>
                                    <span style={{
                                        ...styles.statusBadge,
                                        color: isOver ? "#ef4444" : isWarning ? "#f59e0b" : "#10b981",
                                        backgroundColor: isOver ? "#fef2f2" : isWarning ? "#fffbeb" : "#ecfdf5"
                                    }}>
                                        {percent}% Spent
                                    </span>
                                </div>
                            </div>

                            <div style={styles.financialsRow}>
                                <div>
                                    <p style={styles.fineLabel}>Spent</p>
                                    <p style={styles.fineValue}>Rs. {cat.spent.toLocaleString()}</p>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <p style={styles.fineLabel}>Limit</p>
                                    <p style={{ ...styles.fineValue, color: "#64748b" }}>Rs. {cat.budget.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* Progress Track Window */}
                            <div style={styles.progressBarTrack}>
                                <div style={{
                                    ...styles.progressBarFill,
                                    width: `${Math.min(percent, 100)}%`,
                                    backgroundColor: cat.color
                                }} />

                                {/* MASCOT DEPLOYMENT SITE: Anchored tightly right context line above progress tracks */}
                                {(isOver || isWarning) ? (
                                    <div className="mascot-panic" style={styles.panicMascotContainer}>
                                        <svg width="40" height="36" viewBox="0 0 60 50" fill="none">
                                            <path d="M14 50C12 30 18 14 34 14C50 14 56 30 54 50Z" fill={isOver ? "#ef4444" : "#f59e0b"} stroke="#1e293b" strokeWidth="2" />
                                            <path d="M21 50C21 38 26 30 34 30C42 30 47 38 47 50Z" fill="#ffffff" />
                                            {/* Panicked wide shock lines or cross eyes */}
                                            <path d="M24 40L30 44M30 40L24 44" stroke="#1e293b" strokeWidth="2" />
                                            <path d="M44 40L38 44M38 40L44 44" stroke="#1e293b" strokeWidth="2" />
                                            <circle className="sweat-drop" cx="50" cy="22" r="2" fill="#38bdf8" style={{ opacity: 0 }} />
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="mascot-safe" style={styles.safeMascotContainer}>
                                        <svg width="38" height="34" viewBox="0 0 60 50" fill="none">
                                            <path d="M14 50C12 30 18 14 34 14C50 14 56 30 54 50Z" fill="#8293a4" stroke="#475569" strokeWidth="1.5" />
                                            <path d="M21 50C21 38 26 30 34 30C42 30 47 38 47 50Z" fill="#ffffff" />
                                            <path d="M24 43Q27 40 30 43" stroke="#1e293b" strokeWidth="2" fill="none" />
                                            <path d="M44 43Q41 40 38 44" stroke="#1e293b" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const styles = {
    pageContainer: { display: "flex", flexDirection: "column", width: "100%" },
    header: { marginBottom: "28px" },
    pageTitle: { fontSize: "28px", fontWeight: "700", color: "#1e293b", margin: "0 0 6px 0", letterSpacing: "-0.02em" },
    pageSubtitle: { fontSize: "14px", color: "#94a3b8", margin: 0 },
    summaryCard: {
        background: "#1e293b",
        borderRadius: "24px",
        padding: "32px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "32px",
        boxShadow: "0 10px 25px -5px rgba(30, 41, 59, 0.1)"
    },
    summaryTextContent: { width: "70%", zIndex: 2 },
    summaryBadge: { fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "#38bdf8", letterSpacing: "0.05em" },
    summaryVolume: { fontSize: "26px", fontWeight: "700", color: "#ffffff", margin: "8px 0 16px 0", letterSpacing: "-0.02em" },
    overallTrack: { width: "100%", height: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "99px", overflow: "hidden", marginBottom: "12px" },
    overallFill: { height: "100%", background: "#38bdf8", borderRadius: "99px" },
    summaryFeedback: { fontSize: "13px", color: "#94a3b8", margin: 0 },
    coachMascotWrapper: { position: "absolute", bottom: 0, right: "40px", width: "70px", height: "70px", transform: "translateY(100%)", pointerEvents: "none" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", width: "100%" },
    tile: {
        background: "#ffffff",
        border: "1px solid #f1f5f9",
        borderRadius: "24px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
        position: "relative",
        overflow: "hidden"
    },
    cardHeader: { display: "flex", gap: "14px", alignItems: "center", marginBottom: "20px" },
    iconWrapper: { width: "44px", height: "44px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" },
    icon: { fontSize: "18px" },
    titleBlock: { display: "flex", flexDirection: "column", gap: "2px" },
    catName: { fontSize: "15px", fontWeight: "700", color: "#1e293b", margin: 0 },
    statusBadge: { fontSize: "11px", fontWeight: "700", padding: "2px 8px", borderRadius: "6px", width: "fit-content" },
    financialsRow: { display: "flex", justifyContent: "space-between", marginBottom: "14px" },
    fineLabel: { fontSize: "11px", color: "#94a3b8", margin: "0 0 2px 0", fontWeight: "500" },
    fineValue: { fontSize: "14px", fontWeight: "700", color: "#1e293b", margin: 0 },
    progressBarTrack: { width: "100%", height: "6px", background: "#f1f5f9", borderRadius: "99px", position: "relative", marginTop: "12px" },
    progressBarFill: { height: "100%", borderRadius: "99px" },
    panicMascotContainer: { position: "absolute", right: "12px", top: "-36px", width: "40px", height: "36px", transform: "translateY(100%)", pointerEvents: "none" },
    safeMascotContainer: { position: "absolute", right: "12px", top: "-14px", width: "38px", height: "34px", pointerEvents: "none" }
};