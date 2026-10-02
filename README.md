# @elizaos/plugin-para 👛

Para SDK (formerly Capsule) embedded wallet integration for ElizaOS autonomous agents.

This plugin allows ElizaOS agents to autonomously:
1. **Provision secure MPC embedded wallets** using Para Server SDK.
2. **Read wallet states & balances** across Base, Ethereum, and EVM L2s.
3. **Sign and execute onchain transactions & transfers** autonomously without exposing raw private keys.

---

## ⚙️ Configuration

Add the following environment variables to your `.env` or agent character settings:

```bash
PARA_API_KEY="your-para-developer-api-key"
PARA_ENVIRONMENT="BETA" # or "PROD"
PARA_WALLET_ADDRESS="0x..." # Optional pre-existing wallet
```

---

## 🚀 Usage in ElizaOS Character

```json
{
  "name": "DeFiAgent",
  "plugins": ["@elizaos/plugin-para"],
  "settings": {
    "secrets": {
      "PARA_API_KEY": "para_live_xxxxxx"
    }
  }
}
```

---

## 📦 Actions & Providers

### Actions
- `CREATE_PARA_WALLET`: Initializes a new embedded wallet for the agent.
- `PARA_TRANSFER`: Transfers native ETH or ERC-20 tokens autonomously.

### Providers
- `paraWalletProvider`: Injects wallet address, network, and operational status directly into the agent's context prompt.

---

## 👨‍💻 Author & Contribution
- Author: [@Ayoola-tech2024](https://github.com/Ayoola-tech2024)
- Contributed per ElizaOS Contribution Guidelines
