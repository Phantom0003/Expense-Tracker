import { useTransactions } from "../context/TransactionContext";

export default function TransactionList({ selectedCategory }) {
    const { transactions, deleteTransaction } = useTransactions();

    const filtered =
        selectedCategory === "All"
            ? transactions
            : transactions.filter((t) => t.category === selectedCategory);

    return (
        <ul>
            {filtered.map((t) => (
                <li key={t.id}>
                    <span>{t.date}</span> —{" "}
                    <span>{t.description || t.category}</span> —{" "}
                    <span style={{ color: t.type === "income" ? "green" : "red" }}>
                        {t.type === "income" ? "+" : "-"}${t.amount}
                    </span>
                    <button onClick={() => deleteTransaction(t.id)}>x</button>
                </li>
            ))}
        </ul>
    );
}