import { useState } from "react";
import GreetingCard from "./GreetingCard";
import StatsRow from "./StatsRow";
import OverviewChart from "./OverviewChart";
import CategoriesPage from "./CategoriesPage";

// Placeholder layout shells for the remaining tabs
function TransactionsPage() {
    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.pageTitle}>Transactions Ledger</h1>
            <p style={styles.pageSubtitle}>Review, filter, and audit your recorded income and expenses.</p>
            <div style={styles.placeholderCard}>Transaction List & Filters Come Here 📋</div>
        </div>
    );
}

function ReportsPage() {
    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.pageTitle}>Financial Reports</h1>
            <p style={styles.pageSubtitle}>Deep-dive analytics and structural spending breakdowns.</p>
            <div style={styles.placeholderCard}>Advanced Analytics Charts Come Here 📊</div>
        </div>
    );
}

export default function MainLayout() {
    const [activePage, setActivePage] = useState("dashboard");

    const menuItems = [
        { id: "dashboard", label: "Dashboard", icon: "fa-gauge-high" },
        { id: "transactions", label: "Transactions", icon: "fa-list-check" },
        { id: "reports", label: "Reports", icon: "fa-chart-pie" },
        { id: "categories", label: "Categories", icon: "fa-tags" },
    ];

    const renderPageContent = () => {
        switch (activePage) {
            case "dashboard":
                return (
                    <>
                        <GreetingCard onAddClick={() => setActivePage("transactions")} />
                        <StatsRow />
                        <OverviewChart />
                    </>
                );
            case "transactions":
                return <TransactionsPage />;
            case "reports":
                return <ReportsPage />;
            case "categories":
                return <CategoriesPage />;
            default:
                return <p>Page not found</p>;
        }
    };

    return (
        <div style={styles.appWrapper}>
            {/* Embedded Sidebar Mascot Keyframe System */}
            <style>{`
                /* LOGO AREA: Continuous Bobbing & Hover Flip Spin */
                @keyframes logoBob {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                @keyframes logoSpin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .brand-container { cursor: pointer; }
                .brand-container .logo-brand-icon {
                    display: inline-block;
                    animation: logoBob 2.5s ease-in-out infinite;
                }
                .brand-container:hover .logo-brand-icon {
                    animation: logoSpin 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                /* NAVIGATION BUTTONS: Side Peeking Menu Mascot */
                @keyframes menuMascotIn {
                    0% { transform: translateX(35px) scaleY(0.9); opacity: 0; }
                    100% { transform: translateX(0) scaleY(1); opacity: 1; }
                }
                .sidebar-nav-button {
                    position: relative;
                    overflow: hidden;
                }
                .sidebar-nav-button:hover .menu-peek-mascot {
                    animation: menuMascotIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            {/* Left Sidebar Panel Navigation */}
            <aside style={styles.sidebar}>
                <div className="brand-container" style={styles.logoArea}>
                    <span className="logo-brand-icon" style={styles.logoIcon}>🦈</span>
                    <span style={styles.logoText}>FinShark</span>
                </div>

                <nav style={styles.navMenu}>
                    {menuItems.map((item) => {
                        const isActive = activePage === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActivePage(item.id)}
                                className="sidebar-nav-button"
                                style={{
                                    ...styles.navLink,
                                    backgroundColor: isActive ? "#eff6ff" : "transparent",
                                    color: isActive ? "#2563eb" : "#64748b",
                                    fontWeight: isActive ? "700" : "500",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                    <i className={`fa-solid ${item.icon}`} style={{
                                        ...styles.navIcon,
                                        color: isActive ? "#2563eb" : "#94a3b8"
                                    }} />
                                    {item.label}
                                </div>

                                {/* Menu Item Side Peeking Masked Mascot */}
                                <div className="menu-peek-mascot" style={styles.menuMascotContainer}>
                                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Horizontal Sideways Profile coming from right layout border edge */}
                                        <path d="M30 5C22 5 14 10 14 16C14 22 22 25 30 25V5Z" fill={isActive ? "#2563eb" : "#8293a4"} />
                                        <path d="M30 9C26 9 22 12 22 16C22 20 26 21 30 21V9Z" fill="#ffffff" />
                                        {/* Tiny observation eye focal dot */}
                                        <circle cx="25" cy="13" r="1.5" fill="#1e293b" />
                                    </svg>
                                </div>
                            </button>
                        );
                    })}
                </nav>

                <div style={styles.sidebarFooter}>
                    <div style={styles.userBadge}>
                        <div style={styles.avatar}>U</div>
                        <div>
                            <p style={styles.userName}>Developer Account</p>
                            <p style={styles.userRole}>Premium Access</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Right Main Content Application Panel */ }
    <main style={styles.mainContent}>
        {renderPageContent()}
    </main>
        </div >
    );
}

const styles = {
    appWrapper: {
        display: "flex",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f8fafc",
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
    },
    sidebar: {
        width: "260px",
        height: "100%",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        padding: "32px 16px",
        boxSizing: "border-box",
    },
    logoArea: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "0 12px 32px 12px",
        borderBottom: "1px solid #f1f5f9",
    },
    logoIcon: {
        fontSize: "26px",
    },
    logoText: {
        fontSize: "18px",
        fontWeight: "800",
        color: "#1e293b",
        letterSpacing: "-0.03em",
    },
    navMenu: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        marginTop: "32px",
        flex: 1,
    },
    navLink: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        borderRadius: "14px",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        width: "100%",
        fontSize: "14px",
        transition: "all 0.2s ease-in-out",
    },
    navIcon: {
        fontSize: "16px",
        width: "20px",
        textAlign: "center",
    },
    menuMascotContainer: {
        height: "24px",
        width: "24px",
        display: "flex",
        alignItems: "center",
        transform: "translateX(35px)", // Completely hidden off-button until row item hover hook maps
        pointerEvents: "none",
        opacity: 0,
    },
    sidebarFooter: {
        marginTop: "auto",
        paddingTop: "16px",
        borderTop: "1px solid #f1f5f9",
    },
    userBadge: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "4px 8px",
    },
    avatar: {
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "700",
        color: "#475569",
    },
    userName: {
        fontSize: "13px",
        fontWeight: "600",
        color: "#1e293b",
        margin: 0,
    },
    userRole: {
        fontSize: "11px",
        color: "#94a3b8",
        margin: 0,
    },
    mainContent: {
        flex: 1,
        height: "100%",
        padding: "40px",
        boxSizing: "border-box",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
    },
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    pageTitle: {
        fontSize: "28px",
        fontWeight: "700",
        color: "#1e293b",
        margin: "0 0 6px 0",
        letterSpacing: "-0.02em",
    },
    pageSubtitle: {
        fontSize: "14px",
        color: "#94a3b8",
        margin: "0 0 24px 0",
    },
    placeholderCard: {
        background: "#ffffff",
        border: "1px dashed #cbd5e1",
        borderRadius: "24px",
        padding: "60px",
        textAlign: "center",
        color: "#94a3b8",
        fontWeight: "500",
        fontSize: "15px",
    },
};