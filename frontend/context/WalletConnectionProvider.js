import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";

const connection =
  "https://proportionate-stylish-crater.solana-devnet.discover.quiknode.pro/cd5b2edfc782582e6947c145fe370d934d6242cc/";

const WalletConnectionProvider = ({ children }) => {
  const enpoint = useMemo(() => connection, []);

  const wallets = useMemo(() => [new PhantomWalletAdapter()]);

  return (
    <ConnectionProvider endpoint={enpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
