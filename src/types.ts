export interface ParaConfig {
  apiKey: string;
  environment: "BETA" | "PROD";
  network?: string;
  defaultChainId?: number;
}

export interface ParaWalletInfo {
  id: string;
  address: string;
  type: string;
  chain: string;
}

export interface ParaTransferParams {
  toAddress: string;
  amount: string;
  tokenAddress?: string; // Optional for native token (ETH)
}
