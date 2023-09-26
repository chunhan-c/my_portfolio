"use client";

import React, { createContext, useState, useContext } from "react";
import { CurrentStateType } from '../../lib/type';

// Define the context type
type CurrentSectionContextType = {
  currentSection: CurrentStateType;
  setCurrentSection: React.Dispatch<React.SetStateAction<CurrentStateType>>;
  lastTimeClick: number;
  setLastTimeClick: React.Dispatch<React.SetStateAction<number>>;
};

type CurrentSectionContextProviderType = {
  children: React.ReactNode;
};

// Create the context
export const CurrentSectionContext = createContext<CurrentSectionContextType | null>(null);

export default function CurrentSectionContextProvider({ children }: CurrentSectionContextProviderType) {
  // Initialize state variables
  const [currentSection, setCurrentSection] = useState<CurrentStateType>("Home");
  const [lastTimeClick, setLastTimeClick] = useState(0);

  return (
    <CurrentSectionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        lastTimeClick,
        setLastTimeClick,
      }}
    >
      {children}
    </CurrentSectionContext.Provider>
  );
}

// Custom hook for accessing the context
export function useActiveSectionContext() {
  const context = useContext(CurrentSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
