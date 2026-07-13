import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

const categories = ["Food", "Transport", "Utilities", "Entertainment", "Salary", "Other"];

export default function TransactionForm() {
    const { addTransaction } = useTransactions();
    const [form, setForm] = useState({
        type: "expense",
        amount: "",
        category: "Food",
        date: "",
        description: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.amount || !form.date) return;

        addTransaction({
            ...form,
            amount: parseFloat(form.amount),
        });

        setForm({ type: "expense", amount: "", category: "Food", date: "", description: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <select name="type" value={form.type} onChange={handleChange}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>

            <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={form.amount}
                onChange={handleChange}
                required
            />

            <select name="category" value={form.category} onChange={handleChange}>
                {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>

            <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
            />

            <button type="submit">Add</button>
        </form>
    );
}