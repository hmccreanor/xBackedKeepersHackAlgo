import { Account, Vault, convertFromMicroUnits } from '@xbacked-dao/xbacked-sdk';

const acc = new Account({
    network: process.env.NETWORK,
    mnemonic: process.env.SEED_PHRASE
});

const addr = await acc.getBalance({ tokenId: 0 });
console.log(addr);