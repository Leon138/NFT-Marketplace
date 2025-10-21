import { Button } from '@/shared/ui/button-connectWallet/buttton';
import connectWalletImg from '@/shared/img/connectwallet.png';
import metamaskImg from '@/shared/img/metamask.png';
import walletConnectImg from '@/shared/img/walletConnect.png';
import coinbaseImg from '@/shared/img/coinbase.png';
import { UniversalTitle } from '@/shared/ui/title/title';

export const ConnectWallet = () => {
  return (
    <section className="flex">
      <div className="mr-15 w-1/2">
        <img
          src={connectWalletImg}
          alt="space image"
          className="max-h-190 h-auto w-full rounded-r-[20px] object-cover"
        />
      </div>
      <div className="top-25 relative flex flex-col font-work text-white">
        <div className="mb-10">
          <UniversalTitle
            sectionTitle={'Connect Wallet'}
            text={
              <>
                Choose a wallet you want to connect.
                <br />
                There are several wallet providers.
              </>
            }
            mbSize="5"
          />
        </div>
        <div>
          <Button img={metamaskImg} nameWallet={'Metamask'} />
          <Button img={walletConnectImg} nameWallet={'Wallet Connect'} />
          <Button img={coinbaseImg} nameWallet={'Coinbase'} />
        </div>
      </div>
    </section>
  );
};
