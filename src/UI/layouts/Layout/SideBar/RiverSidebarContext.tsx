import { createContext, useContext, useState, type ReactNode } from "react";

interface RiverSidebarContextType {
  riverName: string | null;
  riverId: string | null;
  setRiverContext: (name: string | null, id: string | null) => void;
  clearRiverContext: () => void;
}

const RiverSidebarContext = createContext<RiverSidebarContextType | undefined>(
  undefined
);

export const RiverSidebarProvider = ({ children }: { children: ReactNode }) => {
  const [riverName, setRiverName] = useState<string | null>(null);
  const [riverId, setRiverId] = useState<string | null>(null);

  const setRiverContext = (name: string | null, id: string | null) => {
    setRiverName(name);
    setRiverId(id);
  };

  const clearRiverContext = () => {
    setRiverName(null);
    setRiverId(null);
  };

  return (
    <RiverSidebarContext.Provider
      value={{ riverName, riverId, setRiverContext, clearRiverContext }}
    >
      {children}
    </RiverSidebarContext.Provider>
  );
};

export const useRiverSidebar = () => {
  const context = useContext(RiverSidebarContext);
  if (context === undefined) {
    throw new Error(
      "useRiverSidebar must be used within a RiverSidebarProvider"
    );
  }
  return context;
};
