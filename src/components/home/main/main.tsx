import { Title } from '@/shared/ui/title/title';
import { Timer } from '../timer/timer';
import { DashboardStats } from '@/shared/ui/dashboard-stats/dashboard-stats';
import {
  trendingColletcion,
  avatars,
  categories,
  trendingNfts,
  cards,
} from '@/shared/constants/main.const';
import plane from '@/shared/img/RocketLaunch.png';
import planePurple from '@/shared/img/planepurple.png';
import placeholder from '@/shared/img/Image Placeholder.png';
import avatar from '@/shared/img/Avatar.png';
import purpleEye from '@/shared/img/purpleeye.png';
import avatarShroomie from '@/shared/img/avatarshroomie.png';
import astronaut from '@/shared/img/astronaut.png';
import mail from '@/shared/img/mail.png';

export const Main = () => {
  return (
    <>
      <section className="mb-40 mt-20 flex justify-between text-white">
        <div className="mr-7.5 h-136 w-lg">
          <h1 className="mb-5 font-work text-[67px] font-semibold leading-[1.2]">
            Discover <br></br> Digital Art & <br></br> Collect NFTs
          </h1>
          <p className="font-work text-2xl font-normal">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k NFT Artists.
          </p>
          <button className="my-7.5 h-15 flex w-56 cursor-pointer items-center justify-center rounded-[20px] bg-purple font-work text-base font-semibold">
            <img
              src={plane}
              alt="logo"
              className="mr-3 h-auto max-w-full rounded-lg"
            />
            Get Started
          </button>
          <div className="gap-7.5 flex">
            <DashboardStats count={'240k+'} namestatistics={'Total Sale'} />
            <DashboardStats count={'100k+'} namestatistics={'Auctionse'} />
            <DashboardStats count={'240k+'} namestatistics={'Artists'} />
          </div>
        </div>
        <div className="w-lg">
          <img src={placeholder} alt="placeholder" />
          <div className="h-27 rounded-b-[20px] bg-customgray p-5">
            <p className="mb-2.5 font-work text-[22px] font-semibold">
              Space Walking
            </p>
            <div className="flex">
              <img src={avatar} alt="avatar" />
              <p className="pl-3 font-work text-base font-normal">Animakid</p>
            </div>
          </div>
        </div>
      </section>

      <section className="font-work text-white">
        <div className="mb-15 mt-20">
          <Title
            sectionTitle={'Trending Collection'}
            text={'Checkout Our Weekly Updated Trending Collection.'}
          />
        </div>
        <div className="gap-7.5 flex">
          {trendingColletcion.map((item, index) => (
            <div key={index}>
              <img src={item.nftBigImage} alt="picture dog" />
              <div className="my-4 flex gap-4">
                <img src={item.nftSmallImage1} alt="picture cat" />
                <img src={item.nftSmallImage2} alt="picture bear" />
                <img src={item.imgCount} alt="picture count" />
              </div>
              <div>
                <p className="mb-2.5 text-2xl font-semibold">{item.nameNft}</p>
                <div className="flex">
                  <img src={item.avatar} alt="avatar" />
                  <span className="ml-2.5 text-base font-normal">
                    {item.nickname}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-40 mt-36 text-white">
        <div className="mb-15 h-23 flex justify-between">
          <div className="font-work">
            <Title
              sectionTitle={'Top Creators'}
              text={'Checkout Top Rated Creators On The NFT Marketplace'}
            />
          </div>
          <button className="w-62 my-7.5 h-15 border-purple-500 flex cursor-pointer items-center justify-center rounded-[20px] border-2 border-solid font-work text-base font-semibold">
            <img
              src={planePurple}
              alt="plane"
              className="mr-3 h-auto max-w-full rounded-lg"
            />
            View Rankings
          </button>
        </div>
        <div className="gap-7.5 grid grid-cols-4 font-work">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="relative flex h-60 w-60 flex-col items-center rounded-[20px] bg-customgray pt-5 text-white">
              <div className="top-4.5 h-7.5 w-7.5 absolute left-5 flex items-center justify-center rounded-[20px] bg-gray2B font-mono text-base text-[#858584]">
                {index + 1}
              </div>
              <img
                src={avatar.image}
                alt={avatar.name}
                className="h-30 w-30 mb-5 rounded-full"
              />
              <h2 className="text-[22px] font-semibold">{avatar.name}</h2>
              <p className="font-mono text-base">
                {' '}
                <span className="text-base text-[#858584]">Total Sales: </span>
                {avatar.sales}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-40 font-work text-white">
        <Title sectionTitle={'Browse Categories'} />
        <div className="mt-12.5 gap-7.5 grid grid-cols-4">
          {categories.map((categories, index) => (
            <div key={index} className="h-79 w-60">
              <img src={categories.image} alt={categories.name} />
              <div className="h-19 px-7.5 rounded-b-[20px] bg-customgray py-5">
                <h2 className="text-[22px] font-semibold">{categories.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="font-work text-white">
        <div className="mb-15 h-23 flex justify-between">
          <div className="font-work">
            <Title
              sectionTitle={'Discover More NFTs'}
              text={'Explore New Trending NFTs'}
            />
          </div>
          <button className="my-7.5 h-15 w-47 border-purple-500 flex cursor-pointer items-center justify-center rounded-[20px] border-2 border-solid text-base font-semibold">
            <img
              src={purpleEye}
              alt="plane"
              className="mr-3 h-auto max-w-full rounded-lg"
            />
            See All
          </button>
        </div>
        <div className="gap-7.5 mb-20 flex">
          {trendingNfts.map((trending, index) => (
            <div key={index}>
              <img src={trending.image} alt={trending.name} />
              <div className="h-43 px-7.5 rounded-b-[20px] bg-customgray pt-5">
                <h1 className="text-[22px] font-semibold">{trending.name}</h1>
                <div className="mb-6 mt-1.5 flex">
                  <img src={trending.avatarImg} alt={trending.nickname} />
                  <p className="ml-3 font-mono text-base">
                    {trending.nickname}
                  </p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div>
                      <p className="font-mono text-xs font-normal text-[#858584]">
                        Price
                      </p>
                      <p className="font-mono text-base font-normal">
                        {trending.price}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-xs font-normal text-[#858584]">
                        Highest Bid
                      </p>
                      <p className="font-mono text-base font-normal">
                        {trending.priceBid}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="h-160 mb-20">
        <div className="h-160 absolute left-1/2 mb-20 flex w-full -translate-x-1/2 transform flex-col bg-[url('/src/shared/img/bigmashroom.png')] bg-cover bg-center object-cover">
          <div className="pb-160 bg-gradient-purple"></div>
        </div>
        <div className="top-3/5 relative flex justify-between text-white">
          <div className="flex flex-col font-work font-semibold">
            <div className="w-37.5 mb-5 flex h-11 items-center justify-center rounded-[20px] bg-customgray">
              <img src={avatarShroomie} alt="avatar" className="h-6 w-6" />
              <p className="ml-3 text-base font-normal">Shroomie</p>
            </div>
            <h1 className="text-[51px] leading-none">Magic Mashrooms</h1>
            <button className="my-7.5 h-15 w-49.5 border-purple-500 flex cursor-pointer items-center justify-center rounded-[20px] border-2 border-solid bg-white font-work text-base font-semibold text-black">
              <img
                src={purpleEye}
                alt="eye"
                className="mr-3 h-auto max-w-full rounded-lg"
              />
              See NFT
            </button>
          </div>
          <div className="h-52.5 w-73.5">
            <div
              className="mt-15 flex h-36 items-center justify-center rounded-[20px]"
              style={{ backgroundColor: '#3b3b3b80' }}>
              <Timer initialSeconds={216000} />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-30 font-work text-white">
        <div className="mb-12.5">
          <h1 className="mb-2.5 text-4xl font-semibold">How It Works</h1>
          <p className="text-[22px] font-normal">Find Out How To Get Started</p>
        </div>
        <div className="flex justify-between">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-109.5 w-82.5 gap-7.5 flex flex-wrap justify-center rounded-[20px] bg-customgray pt-4">
              <img src={card.image} alt={card.name} className="h-62.5" />
              <h1 className="relative top-[-20px] text-[22px] font-semibold">
                {card.name}
              </h1>
              <p className="w-67.5 relative top-[-40px] text-center text-base font-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="h-107.5 mb-20 flex items-center justify-center rounded-[20px] bg-customgray font-work text-white">
        <div className="flex">
          <div>
            <img src={astronaut} alt={astronaut} />
          </div>
          <div className="h-68 w-106 ml-20 mt-5">
            <h1 className="mb-2.5 text-[38px] font-semibold leading-[1.2]">
              Join Our Weekly <br></br> Digest
            </h1>
            <p className="mb-10 text-[22px] font-normal">
              Get Exclusive Promotions & Updates Straight To Your Inbox.
            </p>
            <div className="h-15 w-106 relative flex items-center">
              <input
                type="text"
                placeholder="Enter your email here"
                className="h-15 w-106 border-1 focus:border-purple-500 focus:ring-purple-500 rounded-[20px] bg-white p-3 text-gray-700 focus:outline-none focus:ring"
              />
              <button className="left-3/6 my-7.5 h-15 w-53 transform-flat hover:rotate-y-24 absolute flex cursor-pointer items-center justify-center rounded-[20px] border-0 border-solid bg-purple text-base font-semibold transition duration-500 ease-in-out hover:h-14">
                <img
                  src={mail}
                  alt="plane"
                  className="mr-3 h-auto max-w-full rounded-lg"
                />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
