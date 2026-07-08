"use client";

import { showConstructionAlert } from "@/lib/constants";
import React from "react";

type alert = {
  id: number;
  type: string;
  message: React.ReactNode;
  isExiting: boolean;
};

interface AlertContextType {
  listOfActiveAlerts: Array<alert>;

  showAlert: (
    type: string,
    message: React.ReactNode,
    autoDismissSeconds?: number,
  ) => void;

  removeAlert: (id: number) => void;
}

const AlertContext = React.createContext<AlertContextType | undefined>(
  undefined,
);

export function AlertsProvider({ children }: { children: React.ReactNode }) {
  const [listOfActiveAlerts, setListOfActiveAlerts] = React.useState<
    Array<alert>
  >([]);

  React.useEffect(() => {
    /*  make an alert appear after 3 seconds, and disappear after 3 seconds again */
    if (showConstructionAlert) {
      setTimeout(
        () =>
          showAlert(
            "info",
            "Note, this site is under construction and might not be complete.",
            3,
          ),
        3000,
      );
    }
  }, []);

  // Remove an alert (triggers fade-out animation first)
  function removeAlert(id: number) {
    setListOfActiveAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isExiting: true } : a)),
    );
    // Wait for fade-out animation to complete before removing
    setTimeout(() => {
      setListOfActiveAlerts((prev) => prev.filter((a) => a.id !== id));
    }, 500);
  }

  // Add an alert
  const showAlert = (
    type: string = "info",
    message: React.ReactNode,
    autoDismissSeconds: number = 8,
  ) => {
    const id = Date.now() + Math.random();
    setListOfActiveAlerts((prev) => [
      ...prev,
      { id, type, message, isExiting: false },
    ]);
    // Auto-dismiss after X seconds:
    setTimeout(() => removeAlert(id), autoDismissSeconds * 1000);
  };

  return (
    <AlertContext.Provider
      value={{ listOfActiveAlerts, showAlert, removeAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export function useAlerts() {
  const context = React.useContext(AlertContext);
  if (!context) {
    throw new Error("'useAlerts' must be used within an 'AlertsProvider'!");
  }
  return context;
}
