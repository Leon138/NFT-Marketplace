import type {
  AvatarsArray,
  CardsArray,
  CategoriesArray,
  TrendingNftsArray,
  TrendingCollectionArray,
} from '@/components/interfaces/main';

export const trendingColletcion: TrendingCollectionArray = [
  {
    nftBigImage: '/src/shared/img/photodog.png',
    nftSmallImage1: '/src/shared/img/photocat.png',
    nftSmallImage2: '/src/shared/img/photobear.png',
    imgCount: '/src/shared/img/photo1025.png',
    nameNft: 'DSGN Animals',
    avatar: '/src/shared/img/avatarfox.png',
    nickname: 'MrFox',
  },
  {
    nftBigImage: '/src/shared/img/bigmushrooms.png',
    nftSmallImage1: '/src/shared/img/nftmushrooms1.png',
    nftSmallImage2: '/src/shared/img/nftmushrooms2.png',
    imgCount: '/src/shared/img/photo1025.png',
    nameNft: 'Magic Mushrooms',
    avatar: '/src/shared/img/avatarman.png',
    nickname: 'Shroomie',
  },
  {
    nftBigImage: '/src/shared/img/bigrobot.png',
    nftSmallImage1: '/src/shared/img/nftrobot1.png',
    nftSmallImage2: '/src/shared/img/nftrobot2.png',
    imgCount: '/src/shared/img/photo1025.png',
    nameNft: 'Disco Machines',
    avatar: '/src/shared/img/avatarrobot.png',
    nickname: 'BeKind2Robots',
  },
];

export const avatars: AvatarsArray = [
  {
    name: 'Keepitreal',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatarkeepitreal.png',
  },
  {
    name: 'DigiLab',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatardigilab.png',
  },
  {
    name: 'GravityOne',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatargravityone.png',
  },
  {
    name: 'Juanie',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatarjuanie.png',
  },
  {
    name: 'BlueWhale',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatarbluewhale.png',
  },
  {
    name: 'Mr Fox',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatarmrfox.png',
  },
  {
    name: 'Shroomie',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatarshroomie.png',
  },
  {
    name: 'Robotica',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatarrobotica.png',
  },
  {
    name: 'RustyRobot',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatarrustyrobot.png',
  },
  {
    name: 'Animakid',
    sales: '34.53 ETH',
    image: '/src/shared/img/avataranimakid.png',
  },
  {
    name: 'Dotgu',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatardotgu.png',
  },
  {
    name: 'Ghiblier',
    sales: '34.53 ETH',
    image: '/src/shared/img/avatarghiblier.png',
  },
];

export const categories: CategoriesArray = [
  { name: 'Art', image: '/src/shared/img/artcategories.png' },
  { name: 'Collectibles', image: '/src/shared/img/collectiblescategories.png' },
  { name: 'Music', image: '/src/shared/img/musiccategories.png' },
  { name: 'Photography', image: '/src/shared/img/photocategories.png' },
  { name: 'Video', image: '/src/shared/img/videocategories.png' },
  { name: 'Utility', image: '/src/shared/img/utilitycategories.png' },
  { name: 'Sport', image: '/src/shared/img/sportcategories.png' },
  { name: 'Virtual Worlds', image: '/src/shared/img/virtualcategories.png' },
];

export const trendingNfts: TrendingNftsArray = [
  {
    name: 'Distant Galaxy',
    avatarImg: '/src/shared/img/avatarmoondancer.png',
    image: '/src/shared/img/distantgalaxy.png',
    nickname: 'MoonDancer',
    price: '1.63 ETH',
    priceBid: '0.33 wETH',
  },
  {
    name: 'Life On Edena',
    avatarImg: '/src/shared/img/avatarnebula.png',
    image: '/src/shared/img/lifeonedena.png',
    nickname: 'NebulaKid',
    price: '1.63 ETH',
    priceBid: '0.33 wETH',
  },
  {
    name: 'AstroFiction',
    avatarImg: '/src/shared/img/avatarspaceone.png',
    image: '/src/shared/img/astrofiction.png',
    nickname: 'Spaceone',
    price: '1.63 ETH',
    priceBid: '0.33 wETH',
  },
];

export const cards: CardsArray = [
  {
    name: 'Setup Your Wallet',
    text: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    image: '/src/shared/img/yourwallet.png',
  },
  {
    name: 'Create Collection',
    text: 'Upload your work and setup your collection. Add a description, social links and floor price.',
    image: '/src/shared/img/collection.png',
  },
  {
    name: 'Start Earning',
    text: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    image: '/src/shared/img/earning.png',
  },
];
