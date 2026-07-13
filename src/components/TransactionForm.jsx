import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

const categories = ["Food", "Transport", "Utilities", "Entertainment", "Salary", "Other"];

export default function TransactionForm({ onClose }) {
    const { addTransaction } = useTransactions();
    const [form, setForm] = useState({
        type: "expense", amount: "", category: "Food", date: "", description: "",
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.amount || !form.date) return;
        addTransaction({ ...form, amount: parseFloat(form.amount) });
        onClose();
    };

    return (
        <div style={styles.backdrop}>
            <div style={styles.modalCard}>
                <div style={styles.header}>
                    <h3 style={styles.title}>Add Transaction</h3>
                    <button style={styles.closeX} onClick={onClose}>&times;</button>
                </div>
                <form onSubmit={handleSubmit} style={styles.formElement}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Type</label>
                        <select name="type" value={form.type} onChange={handleChange} style={styles.field}>
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Amount ($)</label>
                        <input type="number" name="amount" placeholder="0.00" value={form.amount} onChange={handleChange} required style={styles.field} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Category</label>
                        <select name="category" value={form.category} onChange={handleChange} style={styles.field}>
                            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Date</label>
                        <input type="date" name="date" value={form.date} onChange={handleChange} required style={styles.field} />
                    </div>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Description</label>
                        <input type="text" name="description" placeholder="Optional notes..." value={form.description} onChange={handleChange} style={styles.field} />
                    </div>
                    <button type="submit" style={styles.submitButton}>Save Entry</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    backdrop: {
        position: "fixed", inset: 0, background: "rgba(15, 23, 42, 0.15)",
        backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyValue: "center",
        display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
    },
    modalCard: { background: "#ffffff", width: "400px", borderRadius: "28px", padding: "32px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05)" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" },
    title: { margin: 0, fontSize: "16px", fontWeight: "700", color: "#1e293b" },
    closeX: { border: "none", background: "transparent", fontSize: "22px", color: "#94a3b8", cursor: "pointer" },
    formElement: { display: "flex", flexDirection: "column", gap: "16px" },
    inputGroup: { display: "flex", flexDirection: "column", gap: "6px" },
    label: { fontSize: "11px", fontWeight: "600", color: "#64748b", textTransform: "uppercase" },
    field: {
        border: "1px solid #e2e8f0", padding: "10px 14px", borderRadius: "12px",
        fontSize: "13px", outline: "none", color: "#334155", background: "#f8fafc",
    },
    submitButton: {
        background: "#4f46e5", color: "#ffffff", border: "none", padding: "12px",
        borderRadius: "14px", fontWeight: "600", fontSize: "13px", cursor: "pointer", marginTop: "8px",
    },
};