import { createContext } from "react";

interface AppContextType {
  currency: "USD" | "VND";
  theme: "light" | "dark";
  currencySymbol: string;
  total: number;
  setCurrency: (currency: "USD" | "VND") => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
