import { useState } from "react";
import { TransactionProvider } from "./context/TransactionContext";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import FilterBar from "./components/FilterBar";
import TransactionList from "./components/TransactionList";
import SpendingChart from "./components/SpendingChart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <TransactionProvider>
      <div className="app-shell">
        <Sidebar />
        <div>
          <Topbar />
          <Dashboard />
          <div style={{ padding: "0 32px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <TransactionForm />
              <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              <TransactionList selectedCategory={selectedCategory} />
            </div>
            <SpendingChart />
          </div>
        </div>
      </div>
    </TransactionProvider>
  );
}

export default App;
