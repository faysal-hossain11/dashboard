import DashboardCard from "../Cards/DashboardCard";

const Card = () => {
  const data = [
    {
      id: 1,
      header: "Total Clicks",
      amount: "325,748",
    },
    {
      id: 2,
      header: "Counter Card",
      amount: "325,748",
    },
    {
      id: 3,
      header: "CR",
      amount: "325,748",
    },
    {
      id: 4,
      header: "Revenue",
      amount: "325,748",
    },
    {
      id: 5,
      header: "Payout",
      amount: "325,748",
    },
    {
      id: 6,
      header: "TotaProfitl Clicks",
      amount: "325,748",
    },
  ];
  return (
    <div className="grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-6 gap-[24px]">
      {data?.map((e, i) => (
        <>
          <DashboardCard e={e} i={i} />
        </>
      ))}
    </div>
  );
};

export default Card;
