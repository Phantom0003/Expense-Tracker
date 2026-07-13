import { useState } from "react";
import { TransactionProvider } from "./context/TransactionContext";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <TransactionProvider>
      <div className="app-shell">
        <Sidebar />
        <div>
          <Topbar />
          {/* Dashboard internally manages your charts and ledger cards */}
          <Dashboard onAddClick={() => setShowForm(true)} />

          {/* Form Overlay Modal */}
          {showForm && (
            <div style={overlayStyles.backdrop} onClick={() => setShowForm(false)}>
              <div style={overlayStyles.modal} onClick={(e) => e.stopPropagation()}>
                <button style={overlayStyles.close} onClick={() => setShowForm(false)}>✕</button>
                <TransactionForm onClose={() => setShowForm(false)} />
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
    zIndex: 999,
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