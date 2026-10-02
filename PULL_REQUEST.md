# Pull Request Template for `elizaOS/eliza`

## Description
This PR introduces `@elizaos/plugin-para`, integrating Para (fka Capsule) embedded wallet SDK into the ElizaOS agent ecosystem.

Addresses Bountycaster bounty by @adeets-22.

## Features Added
- `@elizaos/plugin-para`: Complete plugin package under `packages/plugin-para`
- **Actions**:
  - `CREATE_PARA_WALLET`: Provisions MPC embedded wallets autonomously
  - `PARA_TRANSFER`: Enables autonomous transfers of ETH and ERC-20 tokens on Base & Ethereum
- **Providers**:
  - `paraWalletProvider`: Injects wallet address and state into agent prompt context
- **Configuration**:
  - Supports `PARA_API_KEY` and `PARA_ENVIRONMENT` (BETA / PROD)

## Deliverables Checklist
- [x] Add Para as a dependency in the Eliza project
- [x] Create/update wallet modules and components within Eliza
- [x] Error handling & logging per Eliza contribution guide
- [x] Documentation & setup instructions added
- [x] Prepared PR for `getpara/awesome-para`

---

## Awesome-Para Submission
Repository / Folder entry:
- Title: `ElizaOS Para Wallet Plugin`
- Description: Para SDK embedded wallet plugin enabling autonomous AI agents on ElizaOS to create MPC wallets and transact onchain.
- URL: `https://github.com/Ayoola-tech2024/elizaos-plugin-para`
