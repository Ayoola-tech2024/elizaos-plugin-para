import { createWalletAction } from "./actions/createWallet.js";
import { transferAction } from "./actions/transfer.js";
import { paraWalletProvider } from "./providers/walletProvider.js";

export * from "./types.js";
export * from "./actions/createWallet.js";
export * from "./actions/transfer.js";
export * from "./providers/walletProvider.js";

export const paraPlugin = {
  name: "para",
  description: "Para SDK (fka Capsule) embedded wallet integration for ElizaOS autonomous agents",
  actions: [
    createWalletAction,
    transferAction
  ],
  providers: [
    paraWalletProvider
  ],
  evaluators: []
};

export default paraPlugin;
