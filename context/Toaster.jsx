/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

const ToastContext = createContext();

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onRemove={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

const Toast = ({ id, message, type, duration, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onRemove]);

  return (
    <div className={`alert alert-${type} flex justify-between mb-2`}>
      <span>{message}</span>
      <button className="btn btn-xs btn-circle" onClick={() => onRemove(id)}>
        ✕
      </button>
    </div>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
