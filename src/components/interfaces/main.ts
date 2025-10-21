interface ITrendingCollection {
  nftBigImage: string;
  nftSmallImage1: string;
  nftSmallImage2: string;
  imgCount: string;
  nameNft: string;
  avatar: string;
  nickname: string;
  className: string;
}

export type TrendingCollectionArray = Array<ITrendingCollection>;

interface IAvatars {
  name: string;
  sales: string;
  image: string;
}

export type AvatarsArray = Array<IAvatars>;

export type CategoriesArray = Omit<IAvatars, 'sales'>[];

interface ITrendingNfts {
  name: string;
  avatarImg: string;
  image: string;
  nickname: string;
  price: string;
  priceBid: string;
}

export type TrendingNftsArray = Array<ITrendingNfts>;

export type CardsArray = (Pick<IAvatars, 'name' | 'image'> & {
  text: string;
})[];
