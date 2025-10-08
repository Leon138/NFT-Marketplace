type Props = {
  count: string;
  namestatistics: string;
};

export const DashboardStats = ({ count, namestatistics }: Props) => {
  return (
    <div className="h-19 w-37.5">
      <p className="font-mono text-[28px] font-bold">{count}</p>
      <p className="font-work text-2xl font-normal">{namestatistics}</p>
    </div>
  );
};
