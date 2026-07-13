import { useTransactions } from "../context/TransactionContext";
import PeekingMascot from "./PeekingMascot";

export default function StatsRow() {
    const { transactions } = useTransactions();

    // Financial calculations
    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expenses;

    const categoryTotals = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => {
            if (t.category) {
                acc[t.category] = (acc[t.category] || 0) + t.amount;
            }
            return acc;
        }, {});

    const topCategory = Object.keys(categoryTotals).reduce(
        (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
        "None"
    );

    return (
        <div style={styles.grid}>
            {/* Custom Interactive CSS Keyframes for Stats Cards */}
            <style>{`
                /* INCOME CARD: Joyful Tail Wag & Jump */
                @keyframes happyTail {
                    0%, 100% { transform: rotate(0deg); }
                    50% { transform: rotate(-20deg); }
                }
                @keyframes happyJump {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px) scaleY(1.05); }
                }
                .income-tile:hover .shark-tail { 
                    animation: happyTail 0.25s ease-in-out infinite; 
                    transform-origin: 28px 38px;
                }
                .income-tile:hover .income-mascot { 
                    animation: happyJump 0.5s ease-in-out infinite; 
                }

                /* EXPENSE CARD: Pure Tantrum Shiver & Red Alert Fuming */
                @keyframes intenseFume {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    20% { transform: translate(-1.5px, 1px) scale(1.02); }
                    40% { transform: translate(1.5px, -1px) scale(1.02); }
                    60% { transform: translate(-1px, -1.5px) scale(0.99); }
                    80% { transform: translate(1px, 1.5px) scale(1.01); }
                }
                @keyframes angerPulse {
                    0%, 100% { fill: #8293a4; }
                    50% { fill: #ef4444; } /* Suit turns warning red */
                }
                .expense-tile:hover .expense-mascot { 
                    animation: intenseFume 0.1s linear infinite; 
                }
                .expense-tile:hover .anger-suit {
                    animation: angerPulse 0.4s ease-in-out infinite;
                }
                .expense-tile:hover .anger-vein { opacity: 1 !important; transform: scale(1) translateY(-2px); }

                /* TOP CATEGORY CARD: Sleek Horizontal Border Peek */
                @keyframes sidePeekIn {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0); }
                }
                .category-tile:hover .side-mascot { 
                    animation: sidePeekIn 0.25s ease-out forwards; 
                }
            `}</style>

            {/* CARD 1: Current Balance */}
            <div style={styles.tile}>
                <div style={{ ...styles.iconWrapper, backgroundColor: "#eff6ff" }}>
                    <i className="fa-solid fa-wallet" style={{ ...styles.icon, color: "#3b82f6" }} />
                </div>
                <p style={styles.label}>Current Balance</p>
                <h2 style={styles.value}>Rs. {balance.toLocaleString()}</h2>
                <PeekingMascot />
            </div>

            {/* CARD 2: Total Income (Happy Mascot Variant) */}
            <div className="income-tile" style={styles.tile}>
                <div style={{ ...styles.iconWrapper, backgroundColor: "#ecfdf5" }}>
                    <i className="fa-solid fa-arrow-trend-up" style={{ ...styles.icon, color: "#10b981" }} />
                </div>
                <p style={styles.label}>Total Income</p>
                <h2 style={styles.value}>Rs. {income.toLocaleString()}</h2>

                <div className="income-mascot" style={styles.cornerMascotContainer}>
                    <svg width="52" height="48" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="shark-tail" d="M12 36C4 34 2 40 4 42C8 44 16 40 16 38Z" fill="#78899a" />
                        <path d="M30 12C30 12 26 2 31 0C33 2 34 12 34 12Z" fill="#78899a" stroke="#5a6a7b" strokeWidth="1.5" />
                        <path d="M14 50C12 30 18 14 34 14C50 14 56 30 54 50Z" fill="#8293a4" stroke="#5a6a7b" strokeWidth="2" />
                        <path d="M21 50C21 38 26 30 34 30C42 30 47 38 47 50Z" fill="#ffffff" />
                        <path d="M21 34L25 39L29 34L33 39L37 34L41 39L45 34" fill="#ffffff" stroke="#5a6a7b" strokeWidth="1.5" />
                        {/* Always Happy Inverted Sparkle Eyes */}
                        <path d="M24 44Q27 40 30 44" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M44 44Q41 40 38 44" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M32 46C32 46 33 49 34 49C35 49 36 46 36 46H32Z" fill="#1e293b" />
                        <circle cx="22" cy="46" r="2.5" fill="#f43f5e" opacity="0.8" />
                        <circle cx="46" cy="46" r="2.5" fill="#f43f5e" opacity="0.8" />
                    </svg>
                </div>
            </div>

            {/* CARD 3: Total Expenses (Anger Mascot Variant) */}
            <div className="expense-tile" style={styles.tile}>
                <div style={{ ...styles.iconWrapper, backgroundColor: "#fef2f2" }}>
                    <i className="fa-solid fa-arrow-trend-down" style={{ ...styles.icon, color: "#ef4444" }} />
                </div>
                <p style={styles.label}>Total Expenses</p>
                <h2 style={styles.value}>Rs. {expenses.toLocaleString()}</h2>

                <div className="expense-mascot" style={styles.cornerMascotContainer}>
                    <svg width="52" height="48" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 12C30 12 26 2 31 0C33 2 34 12 34 12Z" fill="#5a6a7b" />
                        {/* The body suit changes to flashing crimson red color states during hover animation */}
                        <path className="anger-suit" d="M14 50C12 30 18 14 34 14C50 14 56 30 54 50Z" fill="#8293a4" stroke="#475569" strokeWidth="2" />
                        <path d="M21 50C21 38 26 30 34 30C42 30 47 38 47 50Z" fill="#ffffff" />
                        <path d="M21 34L25 39L29 34L33 39L37 34L41 39L45 34" fill="#ffffff" stroke="#475569" strokeWidth="1.5" />

                        {/* Deep Angled Mad Eyebrows & Glaring Frown Eyes */}
                        <path d="M22 40L29 43" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M46 40L39 43" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M24 45C25 43 28 43 28 45" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                        <path d="M44 45C43 43 40 43 40 45" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                        <path d="M31 48Q34 45 37 48" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />

                        {/* Hidden Cross/Pop Vein Highlight Accent */}
                        <path className="anger-vein" d="M46 22H52M49 19V25" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" style={{ opacity: 0, transition: "all 0.2s", transformOrigin: "49px 22px" }} />
                    </svg>
                </div>
            </div>

            {/* CARD 4: Top Category */}
            <div className="category-tile" style={styles.tile}>
                <div style={{ ...styles.iconWrapper, backgroundColor: "#fffbeb" }}>
                    <i className="fa-solid fa-tag" style={{ ...styles.icon, color: "#f59e0b" }} />
                </div>
                <p style={styles.label}>Top Category</p>
                <h2 style={styles.value}>{topCategory !== "None" ? topCategory : "N/A"}</h2>

                <div className="side-mascot" style={styles.sideMascotContainer}>
                    <svg width="45" height="50" viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 34C16 32 30 26 30 10C30 -6 16 -12 0 -10Z" fill="#8293a4" stroke="#5a6a7b" strokeWidth="2" />
                        <path d="M0 27C10 27 16 22 16 14C16 6 10 1 0 1Z" fill="#ffffff" />
                        <circle cx="10" cy="10" r="2" fill="#1e293b" />
                        <circle cx="10" cy="19" r="2" fill="#1e293b" />
                        <path d="M14 7L9 11" stroke="#1e293b" strokeWidth="1.5" />
                        <path d="M14 22L9 18" stroke="#1e293b" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

const styles = {
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginTop: "24px", width: "100%" },
    tile: {
        background: "#ffffff",
        border: "1px solid #f1f5f9",
        borderRadius: "24px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
        position: "relative",
        overflow: "hidden",
    },
    iconWrapper: { width: "40px", height: "40px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" },
    icon: { fontSize: "16px" },
    label: { fontSize: "12px", fontWeight: "600", color: "#94a3b8", margin: "0 0 6px 0", textTransform: "uppercase", letterSpacing: "0.05em" },
    value: { fontSize: "24px", fontWeight: "700", color: "#1e293b", margin: 0, letterSpacing: "-0.02em", zIndex: 2 },
    cornerMascotContainer: { position: "absolute", bottom: "-4px", right: "12px", pointerEvents: "none", zIndex: 1 },
    sideMascotContainer: { position: "absolute", right: 0, bottom: "16px", pointerEvents: "none", zIndex: 1, transform: "translateX(100%)" }
};