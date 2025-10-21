import { useState } from 'react';
import { creators } from './../../shared/constants/creators.const';
import { UniversalTitle } from '@/shared/ui/title/title';

export const Rankings = () => {
  const [selectedTab, setSelectedTab] = useState('Today');

  return (
    <section>
      <div className="my-20 font-work text-white">
        <UniversalTitle
          sectionTitle={'Top Creators'}
          text={'Check out top ranking NFT artists on the NFT Marketplace.'}
          mbSize="5"
        />
      </div>
      <div className="mb-15 flex">
        <div
          className={`${selectedTab === 'Today' ? 'border-b-1 border-white text-white' : 'text-gray-400'} h-15 transition-discrete ease-initial flex w-1/2 cursor-pointer items-center justify-center duration-150`}
          onClick={() => setSelectedTab('Today')}>
          <p className="mr-4 font-work text-[22px] font-semibold">Today</p>
        </div>
        <div
          className={`${selectedTab === 'This Week' ? 'border-b-1 border-white text-white' : 'text-gray-400'} h-15 ease-initial transition-discrete flex w-1/2 cursor-pointer items-center justify-center duration-150`}
          onClick={() => setSelectedTab('This Week')}>
          <p className="mr-4 font-work text-[22px] font-semibold">This Week</p>
        </div>
        <div
          className={`${selectedTab === 'This Month' ? 'border-b-1 border-white text-white' : 'text-gray-400'} h-15 transition-discrete ease-initial flex w-1/2 cursor-pointer items-center justify-center duration-150`}
          onClick={() => setSelectedTab('This Month')}>
          <p className="mr-4 font-work text-[22px] font-semibold">This Month</p>
        </div>
        <div
          className={`${selectedTab === 'All Time' ? 'border-b-1 border-white text-white' : 'text-gray-400'} h-15 transition-discrete ease-initial flex w-1/2 cursor-pointer items-center justify-center duration-150`}
          onClick={() => setSelectedTab('All Time')}>
          <p className="mr-4 font-work text-[22px] font-semibold">All Time</p>
        </div>
      </div>
      <div className="h-11.5 flex rounded-[20px] border border-customgray px-5 font-mono text-base font-normal text-[#858584]">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-[430px]">
            <p className="ml-2 mr-10 text-xl">#</p>
            <p>Artist</p>
          </div>
          <div className="flex w-[520px] gap-5">
            <p className="w-40">Change</p>
            <p className="w-40">NFTs Sold</p>
            <p className="w-40">Volume</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-20 text-white">
          {creators.map((creator, index) => (
            <div
              className="h-21 my-5 flex transform cursor-pointer items-center rounded-[20px] bg-customgray px-5 transition-transform duration-300 ease-in-out hover:scale-95"
              key={index}>
              <div className="flex w-[430px] items-center">
                <div className="w-7.5 h-7.5 flex items-center justify-center rounded-[20px] bg-gray2B font-mono text-[#858584]">
                  {index + 1}
                </div>
                <img
                  src={creator.avatar}
                  alt={creator.nickname}
                  className="w-15 h-15 mx-5"
                />
                <p className="font-work text-[22px] font-semibold">
                  {creator.nickname}
                </p>
              </div>
              <div className="flex w-[520px] justify-around font-mono text-base font-normal">
                <p className="text-[#00AC4F]">{creator.change}</p>
                <p className="relative left-1.5">{creator.sold}</p>
                <p className="relative left-10">{creator.volume}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
