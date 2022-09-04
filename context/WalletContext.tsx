import { createContext } from "react";
import { Window } from "interface";

export const contextDefaultValue: Window = {
  klaytn: undefined
}

export const WalletContext = createContext<Window>(contextDefaultValue);