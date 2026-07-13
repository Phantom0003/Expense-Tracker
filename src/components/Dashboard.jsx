import GreetingCard from "./GreetingCard";
import RecentActivity from "./RecentActivity";
import StatsRow from "./StatsRow";

export default function Dashboard({ onAddClick }) {
    return (
        <div style={{ padding: "0 32px 32px" }}>
            <div style={styles.hero}>
                <GreetingCard onAddClick={onAddClick} />
                <RecentActivity />
            </div>
            <StatsRow />
        </div>
    );
}

const styles = {
    hero: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr",
        gap: 20,
    },
};