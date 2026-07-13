import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTransactions } from "../context/TransactionContext";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

export default function SpendingChart() {
    const { transactions } = useTransactions();

    const expenseTotals = transactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + t.amount;
            return acc;
        }, {});

    const data = Object.entries(expenseTotals).map(([name, value]) => ({ name, value }));

    if (data.length === 0) {
        return <p style={{ color: "#94a3b8", fontSize: "13px" }}>No expense item matrix data configured yet.</p>;
    }

    return (
        <ResponsiveContainer width="100%" height={220}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={85}
                    innerRadius={50}
                    paddingAngle={4}
                >
                    {data.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} style={{ outline: "none" }} />
                    ))}
                </Pie>
                <Tooltip
                    contentStyle={{ background: "#fff", border: "none", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", fontSize: "12px" }}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}