import { useState } from "react";
import GreetingCard from "./GreetingCard";
import RecentActivity from "./RecentActivity";
import StatsRow from "./StatsRow";
import SpendingChart from "./SpendingChart";
import FilterBar from "./FilterBar";
import TransactionList from "./TransactionList";

export default function Dashboard({ onAddClick }) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div style={styles.wrapper}>
            {/* Top Level Hero Content Module Block */}
            <div style={styles.heroGrid}>
                <GreetingCard onAddClick={onAddClick} />
                <RecentActivity />
            </div>

            {/* Central Main Financial Bento Metric Row Strip */}
            <StatsRow />

            {/* Bottom Comprehensive Data Analysis Ledger Section */}
            <div style={styles.dataSectionGrid}>
                {/* Visual Chart Card Display */}
                <div style={styles.dataCard}>
                    <h3 style={styles.cardTitle}>Expense Allocation</h3>
                    <div style={styles.chartFlexSpacer}>
                        <SpendingChart />
                    </div>
                </div>

                {/* Interactive Transaction History Window */}
                <div style={styles.dataCard}>
                    <div style={styles.listHeaderContainer}>
                        <h3 style={styles.cardTitle}>Transactions Ledger</h3>
                        <FilterBar
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory} 
                        />
                    </div>
                    <div style={styles.scrollableContent}>
                        <TransactionList selectedCategory={selectedCategory} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: {
        background: "#f3f5f9",
        padding: "0 32px 32px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
    },
    heroGrid: {
        display: "grid",
        gridTemplateColumns: "1.7fr 1fr",
        gap: "24px",
    },
    dataSectionGrid: {
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: "24px",
        alignItems: "stretch",
    },
    dataCard: {
        background: "#ffffff",
        borderRadius: "28px",
        padding: "24px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.01)",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #f8fafc",
    },
    cardTitle: {
        fontSize: "15px",
        fontWeight: "700",
        margin: "0 0 16px 0",
        color: "#1e293b",
    },
    listHeaderContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginBottom: "16px",
    },
    chartFlexSpacer: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "260px",
    },
    scrollableContent: {
        maxHeight: "320px",
        overflowY: "auto",
        paddingRight: "4px",
    },
};