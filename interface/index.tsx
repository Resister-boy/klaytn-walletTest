export interface Klaytn {
  on: (eventName: string, callback: () => void) => void;
  enable: () => Promise<Array<string>>;
  selectedAddress: string;
  networkVersion: number;
  publicConfigStore: Store;
}

export interface State {
  isEnabled: boolean
  isUnlocked: boolean;
  networkVersion: number;
  onboardingcomplete: boolean;
}

export interface Store {
  subscribe: (callback: () => void) => void;
  getState: () => State;
}

export declare interface Window {
  klaytn?: Klaytn;
}