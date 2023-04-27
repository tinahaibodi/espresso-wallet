import { PageSEO } from "@/common/PageSEO";
import { WalletCreation } from "@/components/WalletCreation";

export default function CreateWallet() {
  return (
    <>
      <PageSEO
        ogTitle={"Cape | Wallet Creation"}
        ogDescription={
          "Create a new wallet to start using CAPE. Users can create new tokens and wrap existing Ethereum tokens to give them the desired privacy properties."
        }
      />
      <WalletCreation />
    </>
  );
}
