const categories = ["All", "Food", "Transport", "Utilities", "Entertainment", "Salary", "Other"];

export default function FilterBar({ selectedCategory, setSelectedCategory }) {
    return (
        <div style={styles.container}>
            {categories.map((c) => {
                const isActive = selectedCategory === c;
                return (
                    <button
                        key={c}
                        onClick={() => setSelectedCategory(c)}
                        style={{
                            ...styles.pill,
                            background: isActive ? "#4f46e5" : "#f1f5f9",
                            color: isActive ? "#ffffff" : "#64748b",
                            fontWeight: isActive ? "600" : "500",
                        }}
                    >
                        {c}
                    </button>
                );
            })}
        </div>
    );
}

const styles = {
    container: { display: "flex", gap: "8px", flexWrap: "wrap", paddingBottom: "4px" },
    pill: {
        border: "none", padding: "6px 14px", borderRadius: "12px",
        fontSize: "12px", cursor: "pointer", transition: "all 0.2s ease",
    },
};