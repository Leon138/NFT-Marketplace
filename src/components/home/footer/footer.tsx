import { Link } from 'react-router-dom'
import logoImg from '../../../shared/img/Logo.png'
import discord from '../../../shared/img/discord.png'
import youtube from '../../../shared/img/youtube.png'
import twitter from '../../../shared/img/twitter.png'
import instagram from '../../../shared/img/instagram.png'


export const Footer = () => {
  return (
    <footer className="h-83.5 bg-avatar pt-10 text-footer">
      <div className="h-48 px-8 container mx-auto w-262 flex mb-10">
        <div className='font-work font-normal text-base'>
          <img src={logoImg} alt="logo" className='max-w-full h-auto rounded-lg mb-7.5'/>
          <p className='mb-5 w-59.5'>NFT marketplace UI created with Anima for Figma.</p>
          <p className='mb-4'>Join our community</p>
          <div className='flex gap-2.5'>
            <img src={discord} alt={discord} />
            <img src={youtube} alt={youtube} />
            <img src={twitter} alt={twitter} />
            <img src={instagram} alt={instagram} />
          </div>
        </div>
        <div className='ml-21'>
          <h1 className='font-mono text-[22px] font-bold text-white mb-[25px]'>Explore</h1>
          <div className='flex flex-col w-34 font-work text-base font-normal gap-5'>
            <Link className='' to={'#'}>Marketplace</Link>
            <Link className='' to={'#'}>Rankings</Link>
            <Link className='' to={'#'}>Connect a wallet</Link>
          </div>
        </div>
        <div className='ml-28'>
          <h1 className='font-mono text-[22px] font-bold text-white mb-[25px]'>Join Our Weekly Digest</h1>
          <p className='mb-5 font-work text-base'>Get exclusive promotions & updates <br></br> straight to your inbox.</p>
          <div className='w-105 h-15 flex items-center relative font-work'>
            <input type="text" placeholder='Enter your email here'  className='w-106 h-15 bg-white focus:outline-none focus:ring-purple-500 focus:ring focus:border-purple-500 border-1 p-3 text-gray-700 rounded-[20px] font-normal text-base'/>
            <button className='w-45 h-15 text-white border-solid border-0 bg-link absolute left-60 flex items-center rounded-[20px] justify-center cursor-pointer my-7.5 text-base font-semibold transform-flat hover:h-14 hover:rotate-y-24 transition duration-500 ease-in-out '>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className='h-[1px] w-262 mx-auto mb-5' style={{ backgroundColor: '#858584'}}></div>
      <p className='font-work text-[12px] font-normal text-center'>Ⓒ NFT Market. Use this template freely.</p>
    </footer>
  )
}