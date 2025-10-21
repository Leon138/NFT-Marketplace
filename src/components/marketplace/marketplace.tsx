import { useState } from 'react';
import { marketplace } from '@/shared/constants/marketplace.const';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { UniversalTitle } from '@/shared/ui/title/title';

export const Marketplace = () => {
  const [count] = useState<number>(67);
  const [selectedTab, setSelectedTab] = useState('nfts');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMarketplace = searchTerm.trim()
    ? marketplace.filter(
        nft =>
          nft.nameNft.toLowerCase().includes(searchTerm.toLowerCase()) ||
          nft.nickname.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : marketplace;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section>
      <div className="mb-7.5 mt-20 font-work text-white">
        <UniversalTitle
          sectionTitle={'Browse Marketplace'}
          text={'Browse through more than 50k NFTs on the NFT Marketplace.'}
          mbSize="2.5"
        />
      </div>
      <div className="relative mb-20 flex flex-col">
        <input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search your favourite NFTs"
          className="h-15 border-purple-500 focus:border-purple-500 border-1 w-full rounded-[20px] border-solid bg-gray2B py-5 pl-5 pr-12 text-[#858584] outline-0 transition-colors duration-300 focus:border-2"
        />
        <SearchRoundedIcon
          fontSize="large"
          className="left-250 absolute top-1/4"
          sx={{ color: 'white' }}
        />
      </div>
      <div className="mb-2.5 h-[1px] w-full bg-customgray"></div>
      <div className="mb-15 flex">
        <div
          className={`${selectedTab === 'nfts' ? 'border-b-1 border-white text-white' : 'text-gray-400'} h-15 transition-discrete ease-initial flex w-1/2 cursor-pointer items-center justify-center duration-150`}
          onClick={() => setSelectedTab('nfts')}>
          <p className="mr-4 font-work text-[22px] font-semibold">NFTs</p>
          <div className="w-12.5 flex h-8 items-center justify-center rounded-[20px] bg-[#858584] font-mono text-base font-normal">
            {filteredMarketplace.length}
          </div>
        </div>
        <div
          className={`${selectedTab === 'collections' ? 'border-b-1 border-white text-white' : 'text-gray-400'} h-15 ease-initial transition-discrete flex w-1/2 cursor-pointer items-center justify-center duration-150`}
          onClick={() => setSelectedTab('collections')}>
          <p className="mr-4 font-work text-[22px] font-semibold">
            Collections
          </p>
          <div className="w-12.5 flex h-8 items-center justify-center rounded-[20px] bg-[#858584] font-mono text-base font-normal">
            {count}
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gap-7.5 mb-20 grid grid-cols-3 text-white">
          {filteredMarketplace.map((nft, index) => (
            <div
              className="transform cursor-pointer transition-transform duration-300 ease-in-out hover:scale-95"
              key={index}>
              <img src={nft.nftImage} alt={nft.nameNft} />
              <div className="h-43 px-7.5 rounded-b-[20px] bg-customgray pt-5">
                <h1 className="text-[22px] font-semibold">{nft.nameNft}</h1>
                <div className="mb-6 mt-1.5 flex">
                  <img src={nft.avatar} alt={nft.nickname} />
                  <p className="ml-3 font-mono text-base">{nft.nickname}</p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-mono text-xs font-normal text-[#858584]">
                        Price
                      </p>
                      <p className="font-mono text-base font-normal">
                        1.63 ETH
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-xs font-normal text-[#858584]">
                        Highest Bid
                      </p>
                      <p className="font-mono text-base font-normal">
                        0.33 wETH
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredMarketplace.length === 0 && searchTerm && (
          <div className="py-10 text-center text-white">
            <p className="text-xl">No NFTs found for "{searchTerm}"</p>
            <p className="mt-2 text-gray-400">
              Try adjusting your search terms
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
