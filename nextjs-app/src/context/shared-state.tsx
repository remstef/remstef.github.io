"use client";

import { createContext, useContext } from "react";

const SharedStateContext = createContext({
  test: "this is just a test variable",
});

export function SharedStateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const sharedState = {
    /* whatever you want */
    test: "this is just a test variable that was changed in the provider",
  };

  return (
    <SharedStateContext.Provider value={sharedState}>
      {children}
    </SharedStateContext.Provider>
  );
}

export function useSharedStateContext() {
  return useContext(SharedStateContext);
}
