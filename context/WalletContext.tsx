import { createContext } from "react";
import { App } from "interface";

export const contextDefaultValue: App = {
  isConnected: false,
  connectWallet: () => {},
  walletAddress: undefined,
  networkVersion: undefined,
}

export const AppContext = createContext<App>(contextDefaultValue);