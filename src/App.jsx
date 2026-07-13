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
  const [showForm, setShowForm] = useState(false);

  return (
    <TransactionProvider>
      <div className="app-shell">
        <Sidebar />
        <div>
          <Topbar />
          <Dashboard onAddClick={() => setShowForm(true)} />

          <div style={{ padding: "0 32px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              <TransactionList selectedCategory={selectedCategory} />
            </div>
            <SpendingChart />
          </div>

          {showForm && (
            <div style={overlayStyles.backdrop} onClick={() => setShowForm(false)}>
              <div style={overlayStyles.modal} onClick={(e) => e.stopPropagation()}>
                <button style={overlayStyles.close} onClick={() => setShowForm(false)}>✕</button>
                <TransactionForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </TransactionProvider>
  );
}

const overlayStyles = {
  backdrop: {
    position: "fixed", inset: 0,
    background: "rgba(20,33,61,0.4)",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  modal: {
    background: "var(--card)", borderRadius: 16,
    padding: 28, width: 360, position: "relative",
  },
  close: {
    position: "absolute", top: 12, right: 12,
    border: "none", background: "transparent", fontSize: 16, cursor: "pointer",
  },
};

export default App;