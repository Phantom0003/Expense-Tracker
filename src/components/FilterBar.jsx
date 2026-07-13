const categories = ["All", "Food", "Transport", "Utilities", "Entertainment", "Salary", "Other"];

export default function FilterBar({ selectedCategory, setSelectedCategory }) {
    return (
        <div>
            {categories.map((c) => (
                <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    style={{
                        fontWeight: selectedCategory === c ? "bold" : "normal",
                    }}
                >
                    {c}
                </button>
            ))}
        </div>
    );
}