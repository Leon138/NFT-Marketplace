import { Title } from '../title/title'
import { trendingColletcion, avatars, categories, trendingNfts, cards } from '../../../shared/constants/main.const'
import plane from '../../../shared/img/RocketLaunch.png'
import planePurple from '../../../shared/img/planepurple.png'
import placeholder from '../../../shared/img/Image Placeholder.png'
import avatar from '../../../shared/img/Avatar.png'
import purpleEye from '../../../shared/img/purpleeye.png'
import avatarShroomie from '../../../shared/img/avatarshroomie.png'
import astronaut from '../../../shared/img/astronaut.png'
import mail from '../../../shared/img/mail.png'
import { Timer } from '../timer/timer'

export const Main = () => {

  return (
    <>
      <section className='flex justify-between text-amber-50 mt-20 mb-40'>
        <div className='w-lg h-136 mr-7.5'>
          <h1 className='text-[67px] font-semibold font-work mb-5 leading-[1.2]'>Discover <br></br> Digital Art & <br></br> Collect NFTs</h1>
          <p className='text-2xl font-work font-normal'>NFT Marketplace UI Created With Anima For Figma. 
            Collect, Buy And Sell Art From More Than 20k NFT Artists.
          </p>
          <button className='w-56 h-15 bg-link flex items-center rounded-[20px] justify-center cursor-pointer my-7.5 font-work text-base font-semibold'>
            <img src={plane} alt="logo" className='max-w-full h-auto rounded-lg mr-3'/>
            Get Started
          </button>
          <div className='flex gap-7.5'>
            <div className='w-37.5 h-19'>
              <p className='text-[28px] font-mono font-bold'>240k+</p>
              <p className='text-2xl font-normal font-work'>Total Sale</p>
            </div>
            <div className='w-37.5 h-19'>
              <p className='text-[28px] font-mono font-bold'>100k+</p>
              <p className='text-2xl font-normal font-work'>Auctions</p>
            </div>
            <div className='w-37.5 h-19'>
              <p className='text-[28px] font-mono font-bold'>240k+</p>
              <p className='text-2xl font-normal font-work'>Artists</p>
            </div>
          </div>
        </div>
        <div className='w-lg'>
          <img src={placeholder} alt="placeholder" />
          <div className='h-27 bg-avatar rounded-b-[20px] p-5'>
            <p className='font-work font-semibold text-[22px] mb-2.5'>Space Walking</p>
            <div className='flex'>
              <img src={avatar} alt="avatar" />
              <p className='font-work font-normal text-base pl-3'>Animakid</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className='text-amber-50 font-work' >
        <div className='mt-20 mb-15'>
          <Title sectionTitle={'Trending Collection'} text={'Checkout Our Weekly Updated Trending Collection.'} />
        </div>
        <div className='flex gap-7.5'>
          {trendingColletcion.map((item, index) => (  
            <div key={index}>
              <img src={item.nftBigImage} alt="picture dog" />
              <div className='flex my-4  gap-4'>
                <img src={item.nftSmallImage1} alt="picture cat" />
                <img src={item.nftSmallImage2} alt="picture bear" />
                <img src={item.imgCount} alt="picture count" />
              </div>
              <div>
                <p className='font-semibold text-2xl mb-2.5'>{item.nameNft}</p>
                <div className='flex'>
                  <img src={item.avatar} alt="avatar" />
                  <span className='font-normal text-base ml-2.5'>{item.nickname}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='text-amber-50 mt-36 mb-40'>
        <div className='flex justify-between h-23 mb-15'>
          <div className='font-work'>
            <Title sectionTitle={'Top Creators'} text={'Checkout Top Rated Creators On The NFT Marketplace'} />
          </div>
          <button className='w-62 h-15 border-solid border-2 border-purple-500  flex items-center rounded-[20px] justify-center cursor-pointer my-7.5 text-base font-work font-semibold'>
            <img src={planePurple} alt="plane" className='max-w-full h-auto rounded-lg mr-3'/>
            View Rankings
          </button>
        </div>
        <div className='grid grid-cols-4 gap-7.5 font-work'>
          {avatars.map((avatar, index) => (
            <div key={index} className="w-60 h-60 relative bg-avatar text-white rounded-[20px] pt-5 flex flex-col items-center">
              <div className='w-7.5 h-7.5 top-4.5 left-5 flex justify-center items-center rounded-[20px] absolute text-[#858584] font-mono text-base bg-[#2B2B2B]'>{index+1}</div>
              <img src={avatar.image} alt={avatar.name} className="w-30 h-30 rounded-full mb-5" />
              <h2 className="font-semibold text-[22px]">{avatar.name}</h2>
              <p className="text-base font-mono"> <span className='text-[#858584] text-base'>Total Sales: </span>{avatar.sales}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className='font-work text-amber-50 mb-40'>
        <Title sectionTitle={'Browse Categories'}  />
        <div className='grid grid-cols-4 gap-7.5 mt-12.5'>
          {categories.map((categories, index) => (
            <div key={index} className='w-60 h-79'>
              <img src={categories.image} alt={categories.name} />
              <div className='h-19 bg-avatar rounded-b-[20px] px-7.5 py-5'>
                <h2 className='text-[22px] font-semibold'>{categories.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='text-amber-50 font-work'>
        <div className='flex justify-between h-23 mb-15'>
          <div className='font-work'>
            <Title sectionTitle={'Discover More NFTs'} text={'Explore New Trending NFTs'} />
          </div>
          <button className='w-47 h-15 border-solid border-2 border-purple-500 flex items-center rounded-[20px] justify-center cursor-pointer my-7.5 text-base font-semibold'>
            <img src={purpleEye} alt="plane" className='max-w-full h-auto rounded-lg mr-3'/>
            See All
          </button>
        </div>
        <div className='flex gap-7.5 mb-20'>
          {trendingNfts.map((trending, index) => (
            <div key={index}>
              <img src={trending.image} alt={trending.name} />
              <div className='h-43 bg-avatar rounded-b-[20px] px-7.5 pt-5'>
                <h1 className='text-[22px] font-semibold'>{trending.name}</h1>
                <div className='flex mb-6 mt-1.5'>
                  <img src={trending.avatarImg} alt={trending.nickname} />
                  <p className='font-mono text-base ml-3'>{trending.nickname}</p>
                </div>
                <div>
                  <div className='flex justify-between'>
                  <div>
                    <p className='text-[12px] text-[#858584] font-mono font-normal'>Price</p>
                    <p className='text-base font-mono font-normal'>{trending.price}</p>
                  </div>
                  <div>
                    <p className='text-[13px] text-[#858584] font-mono font-normal'>Highest Bid</p>
                    <p className='text-base font-mono font-normal'>{trending.priceBid}</p>
                  </div>
                  </div>  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='h-160 mb-20'> 
        <div className="w-full h-160 bg-center mb-20 bg-cover object-cover absolute left-1/2 transform -translate-x-1/2 flex flex-col bg-[url('/src/shared/img/bigmashroom.png')]">
            <div className='pb-160' style={{ background: 'linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, rgb(162, 89, 255) 100%)'}}></div>
        </div>
        <div className='flex justify-between relative top-3/5 text-white'>
          <div className='flex flex-col font-work font-semibold'>
            <div className='flex justify-center items-center rounded-[20px] bg-avatar w-37.5 h-11 mb-5'>
              <img src={avatarShroomie} alt="avatar" className='w-6 h-6'/>
              <p className='text-base font-normal ml-3'>Shroomie</p>
            </div>
            <h1 className='text-[51px] leading-none'>Magic Mashrooms</h1>
            <button className='w-49.5 h-15 border-solid border-2 bg-white text-black border-purple-500 flex items-center rounded-[20px] justify-center cursor-pointer my-7.5 text-base font-work font-semibold'>
              <img src={purpleEye} alt="eye" className='max-w-full h-auto rounded-lg mr-3'/>
              See NFT
            </button>
          </div>
          <div className='w-73.5 h-52.5'>
            <div className='mt-15 h-36 flex justify-center items-center rounded-[20px]' style={{ backgroundColor: '#3b3b3b80'}}>
              <Timer initialSeconds={216000} /> 
            </div>
          </div>
        </div>
      </section>

      <section className='font-work text-amber-50 mb-30'>
        <div className='mb-12.5'>
          <h1 className='text-4xl  font-semibold mb-2.5'>How It Works</h1>
          <p className='text-[22px] font-normal'>Find Out How To Get Started</p>
        </div>
        <div className='flex justify-between'>
          {cards.map((card, index) => (
            <div key={index} className='w-82.5 h-109.5 gap-7.5 pt-4 flex justify-center flex-wrap bg-avatar rounded-[20px]'>
              <img src={card.image} alt={card.name} className='h-62.5'/>
              <h1 className='text-[22px] font-semibold relative top-[-20px]'>{card.name}</h1>
              <p className='text-center w-67.5 relative top-[-40px] text-base font-normal'>{card.text}</p>
            </div>
            ))}
        </div>
      </section>

      <section className='font-work mb-20 text-amber-50 h-107.5 flex justify-center items-center rounded-[20px] bg-avatar'>
        <div className='flex'>
          <div>
            <img src={astronaut} alt={astronaut} />
          </div>
          <div className='w-106 h-68 ml-20 mt-5'>
            <h1 className='text-[38px] font-semibold mb-2.5 leading-[1.2]'>Join Our Weekly <br></br> Digest</h1>
            <p className='text-[22px] font-normal mb-10'>Get Exclusive Promotions & Updates Straight To Your Inbox.</p>
            <div className='w-106 h-15 flex items-center relative'>
              <input type="text" placeholder='Enter your email here'  className='w-106 h-15 bg-white focus:outline-none focus:ring-purple-500 focus:ring focus:border-purple-500 border-1 p-3 text-gray-700 rounded-[20px]'/>
              <button className='w-53 h-15 border-solid border-0 bg-link absolute left-3/6 flex items-center rounded-[20px] justify-center cursor-pointer my-7.5 text-base font-semibold transform-flat hover:h-14 hover:rotate-y-24 transition duration-500 ease-in-out '>
                <img src={mail} alt="plane" className='max-w-full h-auto rounded-lg mr-3'/>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}