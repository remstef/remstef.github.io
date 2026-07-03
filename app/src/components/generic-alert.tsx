import {
  AlertErrorIcon,
  AlertInfoIcon,
  AlertSuccessIcon,
  AlertWarningIcon,
} from "@/lib/utils";
import React from "react";

export function GenericAlert({
  id,
  type = "info",
  message,
  onClose,
  isExiting = false,
}: Readonly<{
  id: number;
  type: string;
  message: React.ReactNode;
  onClose: (id: number) => void;
  isExiting: boolean;
}>) {
  const typeClass =
    {
      info: "alert-info",
      warning: "alert-warning",
      error: "alert-error",
      success: "alert-success",
    }[type] || "alert-info";
  const typeIcon = {
    info: <AlertInfoIcon />,
    warning: <AlertWarningIcon />,
    error: <AlertErrorIcon />,
    success: <AlertSuccessIcon />,
  }[type] || <AlertInfoIcon />;

  return (
    <div
      className={`alert ${typeClass} shadow-lg max-w-lg w-full pointer-events-auto ${
        isExiting ? "alert-fade-out" : "alert-slide-in"
      }`}
      role="alert"
      title="Dismiss"
      onClick={() => onClose(id)}
    >
      {typeIcon}
      <span className="flex-1">{message}</span>
    </div>
  );
}
