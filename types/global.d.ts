interface Window {
    getOfflineSigner?: any;
    keplr?: {
      enable: (chainId: string) => Promise<void>;
      getOfflineSigner: (chainId: string) => any;
    };
  }

  interface Proof {
    taskId: string;
    // Add other properties if necessary
  }
  
  