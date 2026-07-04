"use client";

import { useAlerts } from "@/context/alerts-state";
import { GenericAlert } from "./generic-alert";

export function AlertsContainer() {
  const { listOfActiveAlerts, showAlert, removeAlert } = useAlerts();

  return (
    <div className="fixed top-20 right-2 z-50 max-w-lg w-1/2">
      {listOfActiveAlerts.map((alert) => (
        <GenericAlert
          key={alert.id}
          {...alert}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
      {/* <button className="btn btn-primary" onClick={() => showAlert('info', "testmessage")}>test alert</button> */}
    </div>
  );
}
