import { useState, useEffect } from "react";

export default function GreetingCard({ onAddClick }) {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    // Initialize state to "wave" for the login welcome sequence
    const [mood, setMood] = useState("wave"); // wave, idle, hover, happy
    const [bubble, setBubble] = useState("Hello! Welcome back! 👋");
    const [isJumping, setIsJumping] = useState(false);

    // Run the greeting wave animation automatically on mount (login)
    useEffect(() => {
        const timer = setTimeout(() => {
            setMood("idle");
            setBubble("Watching your wallet...");
        }, 3000); // Waves for 3 seconds before going idle

        return () => clearTimeout(timer);
    }, []);

    const phrases = [
        "Chomp those expenses! 🦈",
        "Budget shark on duty!",
        "No unnecessary spending! 😤",
        "Savings secured. Good.",
        "Looking sharp! ✨",
        "Keep that ledger clean!"
    ];

    const handleClick = () => {
        setIsJumping(true);
        setMood("happy");

        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        setBubble(randomPhrase);

        setTimeout(() => {
            setIsJumping(false);
            setMood("hover");
        }, 600);
    };

    return (
        <div style={styles.card}>
            {/* Custom keyframes for body bobbing, clicking jumps, and arm waving */}
            <style>{`
                @keyframes sharkBob {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes sharkJump {
                    0% { transform: translateY(0) scale(1, 1); }
                    30% { transform: translateY(-22px) scale(0.95, 1.05); }
                    60% { transform: translateY(4px) scale(1.05, 0.9); }
                    100% { transform: translateY(0) scale(1, 1); }
                }
                @keyframes armWave {
                    0%, 100% { transform: rotate(0deg); }
                    33% { transform: rotate(-28deg); }
                    66% { transform: rotate(5deg); }
                }
                .shark-idle { animation: sharkBob 3.5s ease-in-out infinite; }
                .shark-jump { animation: sharkJump 0.6s ease-out; }
                .shark-arm-wave { animation: armWave 0.5s ease-in-out infinite; }
            `}</style>

            {/* Left Content Column */}
            <div style={styles.textContainer}>
                <h1 style={styles.heading}>Let's check your money.</h1>
                <p style={styles.sub}>{greeting}! Here's a quick look at where things stand today.</p>

                <div style={styles.linkGrid}>
                    <div style={styles.checkItem} onClick={onAddClick}>
                        <span style={{ ...styles.bullet, backgroundColor: "#3b82f6" }} />
                        Add Expense
                    </div>
                    <div style={styles.checkItem} onClick={onAddClick}>
                        <span style={{ ...styles.bullet, backgroundColor: "#10b981" }} />
                        Add Income
                    </div>
                    <div style={styles.checkItem}>
                        <span style={{ ...styles.bullet, backgroundColor: "#ef4444" }} />
                        View Report
                    </div>
                    <div style={styles.checkItem}>
                        <span style={{ ...styles.bullet, backgroundColor: "#f59e0b" }} />
                        Categories
                    </div>
                </div>
            </div>

            {/* Right Column: Interactive Shark Suit Cat Mascot */}
            <div style={styles.mascotContainer}>
                {/* Dynamic Speech Bubble */}
                <div style={{
                    ...styles.speechBubble,
                    opacity: mood !== "idle" ? 1 : 0.85,
                    transform: mood !== "idle" ? "translateY(0)" : "translateY(4px)"
                }}>
                    {bubble}
                    <div style={styles.bubbleArrow} />
                </div>

                {/* SVG Character Model */}
                <div
                    className={isJumping ? "shark-jump" : "shark-idle"}
                    style={{ cursor: "pointer", display: "flex", justifyContent: "center", width: "140px" }}
                    onMouseEnter={() => { if (!isJumping && mood !== "wave") { setMood("hover"); setBubble("Hmph. Hello."); } }}
                    onMouseLeave={() => { if (!isJumping && mood !== "wave") { setMood("idle"); setBubble("Watching your wallet..."); } }}
                    onClick={handleClick}
                >
                    <svg width="130" height="130" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Ground Shadow */}
                        <ellipse cx="60" cy="112" rx="38" ry="5" fill="#cbd5e1" opacity="0.7" />

                        {/* Shark Tail / Back Fins */}
                        <path d="M22 96C12 96 8 104 12 106C18 108 30 102 32 98Z" fill="#78899a" />
                        <path d="M98 96C108 96 112 104 108 106C102 108 90 102 88 98Z" fill="#78899a" />

                        {/* Top Shark Fin */}
                        <path d="M60 22C60 22 54 6 62 2C66 6 66 22 66 22Z" fill="#78899a" stroke="#5a6a7b" strokeWidth="2.5" strokeLinejoin="round" />

                        {/* Main Body Onesie */}
                        <path d="M26 90C24 60 30 24 60 24C90 24 96 60 94 90C94 106 85 110 60 110C35 110 26 106 26 90Z" fill="#8293a4" stroke="#5a6a7b" strokeWidth="3" strokeLinejoin="round" />

                        {/* Side Shark Gills */}
                        <path d="M29 52H34M28 57H33M29 62H34" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
                        <path d="M91 52H86M92 57H87M91 62H86" stroke="#475569" strokeWidth="2" strokeLinecap="round" />

                        {/* Inner White Face Opening */}
                        <path d="M36 56C36 40 44 38 60 38C76 38 84 40 84 56C84 72 74 76 60 76C44 76 36 72 36 56Z" fill="#ffffff" />

                        {/* Shark Costume Teeth Structure */}
                        <path d="M36 44L41 50L46 44L51 50L56 44L61 50L66 44L71 50L76 44L81 50L84 44" fill="#ffffff" stroke="#5a6a7b" strokeWidth="2" strokeLinejoin="round" />

                        {/* White Costume Tummy Overlay */}
                        <path d="M34 92C34 82 42 78 60 78C78 78 86 82 86 92C86 102 74 108 60 108C42 108 34 102 34 92Z" fill="#f8fafc" />

                        {/* Interactive Character Face Elements */}
                        {(mood === "idle" || mood === "wave") && (
                            <>
                                {/* Determined / Attentive Eyes */}
                                <path d="M44 56C44 52 49 51 51 54C53 57 48 60 44 56Z" fill="#1e293b" />
                                <path d="M76 56C76 52 71 51 69 54C67 57 72 60 76 56Z" fill="#1e293b" />
                                <path d="M42 49L52 52" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                                <path d="M78 49L68 52" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                                {/* Slight smile curve if welcoming, otherwise frown */}
                                <path d={mood === "wave" ? "M56 63Q60 66 64 63" : "M57 62Q60 60 63 62"} stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                            </>
                        )}

                        {mood === "hover" && (
                            <>
                                <circle cx="47" cy="55" r="4.5" fill="#1e293b" />
                                <circle cx="73" cy="55" r="4.5" fill="#1e293b" />
                                <path d="M44 48Q48 47 51 49" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
                                <path d="M76 48Q72 47 69 49" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
                                <circle cx="60" cy="62" r="2" fill="#1e293b" />
                                <circle cx="40" cy="63" r="3" fill="#fda4af" opacity="0.6" />
                                <circle cx="80" cy="63" r="3" fill="#fda4af" opacity="0.6" />
                            </>
                        )}

                        {mood === "happy" && (
                            <>
                                <path d="M42 56C45 52 49 52 52 56" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                                <path d="M78 56C75 52 71 52 68 56" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                                <path d="M56 61C56 61 57 67 60 67C63 67 64 61 64 61H56Z" fill="#1e293b" />
                                <circle cx="39" cy="62" r="5" fill="#f43f5e" opacity="0.6" />
                                <circle cx="81" cy="62" r="5" fill="#f43f5e" opacity="0.6" />
                            </>
                        )}

                        {/* Center Tiny Pink Nose */}
                        <polygon points="59,57 61,57 60,59" fill="#f43f5e" />
                        {/* Whiskers */}
                        <path d="M38 59H42M39 63H43" stroke="#fda4af" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M82 59H78M81 63H77" stroke="#fda4af" strokeWidth="1.5" strokeLinecap="round" />

                        {/* Arm Logic: Unfold and animate left arm up when waving */}
                        {mood === "wave" ? (
                            <>
                                {/* Waving Raised Left Paw */}
                                <path
                                    className="shark-arm-wave"
                                    d="M32 75C24 60 36 46 44 54C42 66 36 72 32 75Z"
                                    fill="#8293a4"
                                    stroke="#5a6a7b"
                                    strokeWidth="2"
                                    style={{ transformOrigin: "32px 75px" }}
                                />
                                {/* Tucked Right Arm */}
                                <path d="M88 75C78 75 64 74 58 77C66 83 84 83 88 75Z" fill="#8293a4" stroke="#5a6a7b" strokeWidth="2" />
                            </>
                        ) : (
                            <>
                                {/* Standard Cross-Armed Stance */}
                                <path d="M32 75C42 75 56 68 64 76C54 84 36 84 32 75Z" fill="#8293a4" stroke="#5a6a7b" strokeWidth="2" />
                                <path d="M88 75C78 75 64 68 56 76C66 84 84 84 88 75Z" fill="#8293a4" stroke="#5a6a7b" strokeWidth="2" />
                            </>
                        )}

                        {/* Outstretched Front Sitting Feet */}
                        <circle cx="42" cy="103" r="9" fill="#ffffff" stroke="#5a6a7b" strokeWidth="2" />
                        <ellipse cx="42" cy="104" rx="5" ry="4" fill="#fb7185" />
                        <circle cx="37" cy="98" r="2" fill="#fb7185" />
                        <circle cx="42" cy="96" r="2" fill="#fb7185" />
                        <circle cx="47" cy="98" r="2" fill="#fb7185" />

                        <circle cx="78" cy="103" r="9" fill="#ffffff" stroke="#5a6a7b" strokeWidth="2" />
                        <ellipse cx="78" cy="104" rx="5" ry="4" fill="#fb7185" />
                        <circle cx="73" cy="98" r="2" fill="#fb7185" />
                        <circle cx="78" cy="96" r="2" fill="#fb7185" />
                        <circle cx="83" cy="98" r="2" fill="#fb7185" />
                    </svg>
                </div>
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
        gap: "40px",
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
    },
    bullet: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
    },
    mascotContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "180px",
        justifyContent: "center",
    },
    speechBubble: {
        background: "#1e293b",
        color: "#ffffff",
        padding: "8px 14px",
        borderRadius: "14px",
        fontSize: "12px",
        fontWeight: "600",
        position: "absolute",
        top: "-24px",
        whiteSpace: "nowrap",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "all 0.2s ease-in-out",
        pointerEvents: "none",
        zIndex: 2,
    },
    bubbleArrow: {
        position: "absolute",
        bottom: "-4px",
        left: "50%",
        transform: "translateX(-50%) rotate(45deg)",
        width: "8px",
        height: "8px",
        background: "#1e293b",
    }
};