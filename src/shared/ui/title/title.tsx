type Props = {
  sectionTitle: string;
  text?: string | React.ReactNode;
  mbSize?: string;
};

export const Title = ({ sectionTitle, text }: Props) => {
  return (
    <>
      <h1 className="mb-2.5 text-[38px] font-semibold">{sectionTitle}</h1>
      <p className="text-[22px] font-normal">{text}</p>
    </>
  );
};

export const UniversalTitle = ({ sectionTitle, text, mbSize }: Props) => {
  return (
    <>
      <h1 className={`mb-${mbSize} text-[51px] font-semibold`}>
        {sectionTitle}
      </h1>
      <p className="text-[22px] font-normal">{text}</p>
    </>
  );
};
