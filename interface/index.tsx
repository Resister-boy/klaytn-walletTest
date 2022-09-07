declare global {
  interface Window {
    klaytn: any;
  }
}
export interface App {
  isConnected: boolean;
  connectWallet: () => void;
  walletAddress: string;
  networkVersion: number;
}