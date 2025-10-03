type Props = {
  sectionTitle: string;
  text?: string;
};

export const Title = ({ sectionTitle, text }: Props) => {
  return (
    <>
      <h1 className="mb-2.5 text-[38px] font-semibold">{sectionTitle}</h1>
      <p className="text-[22px] font-normal">{text}</p>
    </>
  );
};
