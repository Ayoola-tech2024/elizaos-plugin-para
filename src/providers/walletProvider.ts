import { ParaConfig } from "../types.js";

export const paraWalletProvider = {
  get: async (runtime: any, message: any, state?: any) => {
    try {
      const apiKey = runtime.getSetting("PARA_API_KEY");
      const environment = (runtime.getSetting("PARA_ENVIRONMENT") || "BETA").toUpperCase();

      if (!apiKey) {
        return "Para SDK: Missing PARA_API_KEY environment configuration.";
      }

      const cachedAddress = runtime.getSetting("PARA_WALLET_ADDRESS");
      if (cachedAddress) {
        return `Agent Para Embedded Wallet is active.\nAddress: ${cachedAddress}\nNetwork: Base / Ethereum\nEnvironment: ${environment}`;
      }

      return `Agent Para Wallet Service is configured (${environment} environment). Ready to generate or access autonomous agent wallets.`;
    } catch (error: any) {
      console.error("[ParaWalletProvider] Error resolving wallet status:", error);
      return `Para Wallet Provider Error: ${error.message}`;
    }
  },
};
