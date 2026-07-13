import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TransactionContext = createContext();

export function TransactionProvider({ children }) {
    const [transactions, setTransactions] = useState(() => {
        const saved = localStorage.getItem("transactions");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    const addTransaction = (transaction) => {
        setTransactions((prev) => [
            { ...transaction, id: uuidv4() },
            ...prev,
        ]);
    };

    const deleteTransaction = (id) => {
        setTransactions((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <TransactionContext.Provider
            value={{ transactions, addTransaction, deleteTransaction }}
        >
            {children}
        </TransactionContext.Provider>
    );
}

export const useTransactions = () => useContext(TransactionContext);