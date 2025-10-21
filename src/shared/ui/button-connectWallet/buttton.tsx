type Props = {
  img: string;
  nameWallet: string;
};

export const Button = ({ img, nameWallet }: Props) => {
  return (
    <button className="h-18 border-purple-500 border-1 mb-5 flex w-80 cursor-pointer items-center rounded-[20px] border-solid bg-customgray text-[22px] font-semibold">
      <img
        src={img}
        alt="name wallet"
        className="ml-10 mr-5 max-w-full rounded-lg"
      />
      {nameWallet}
    </button>
  );
};
