import { Link } from 'react-router-dom';
import logoImg from '@/shared/img/Logo.png';
import discord from '@/shared/img/discord.png';
import youtube from '@/shared/img/youtube.png';
import twitter from '@/shared/img/twitter.png';
import instagram from '@/shared/img/instagram.png';

export const Footer = () => {
  return (
    <footer className="h-83.5 bg-customgray pt-10 text-footer">
      <div className="w-262 container mx-auto mb-10 flex h-48 px-8">
        <div className="font-work text-base font-normal">
          <img
            src={logoImg}
            alt="logo"
            className="mb-7.5 h-auto max-w-full rounded-lg"
          />
          <p className="w-59.5 mb-5">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="mb-4">Join our community</p>
          <div className="flex gap-2.5">
            <img src={discord} alt={discord} />
            <img src={youtube} alt={youtube} />
            <img src={twitter} alt={twitter} />
            <img src={instagram} alt={instagram} />
          </div>
        </div>
        <div className="ml-21">
          <h1 className="mb-[25px] font-mono text-[22px] font-bold text-white">
            Explore
          </h1>
          <div className="w-34 flex flex-col gap-5 font-work text-base font-normal">
            <Link className="" to={'/marketplace'}>
              Marketplace
            </Link>
            <Link className="" to={'#'}>
              Rankings
            </Link>
            <Link className="" to={'/connect-wallet'}>
              Connect a wallet
            </Link>
          </div>
        </div>
        <div className="ml-28">
          <h1 className="mb-[25px] font-mono text-[22px] font-bold text-white">
            Join Our Weekly Digest
          </h1>
          <p className="mb-5 font-work text-base">
            Get exclusive promotions & updates <br></br> straight to your inbox.
          </p>
          <div className="h-15 w-105 relative flex items-center font-work">
            <input
              type="text"
              placeholder="Enter your email here"
              className="h-15 w-106 border-1 focus:border-purple-500 focus:ring-purple-500 rounded-[20px] bg-white p-3 text-base font-normal text-gray-700 focus:outline-none focus:ring"
            />
            <button className="my-7.5 h-15 w-45 transform-flat hover:rotate-y-24 absolute left-60 flex cursor-pointer items-center justify-center rounded-[20px] border-0 border-solid bg-purple text-base font-semibold text-white transition duration-500 ease-in-out hover:h-14">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-262 mx-auto mb-5 h-[1px]"
        style={{ backgroundColor: '#858584' }}></div>
      <p className="text-center font-work text-[12px] font-normal">
        Ⓒ NFT Market. Use this template freely.
      </p>
    </footer>
  );
};
