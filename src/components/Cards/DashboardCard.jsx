import { Icon } from "@iconify/react";

const DashboardCard = ({ e, i }) => {
  return (
    <div
      key={i}
      className="flex flex-col gap-[10px] bg-white px-[20px] py-[16px] rounded-[15px] hover:bg-primaryColor transition-all duration-300 group h-[86px]"
    >
      <div className="flex justify-between items-center">
        <p className=" font-normal font-primaryFont text-[14px] text-tartiaryColor leading-[15px] group-hover:text-white transition duration-300">
          {e?.header}
        </p>
        <Icon
          className="text-xl text-[#4C9962] group-hover:text-white transition duration-300"
          icon="ion:trending-up"
        />
      </div>
      <h2 className="font-secondaryFont text-primaryColor text-[24px] font-bold group-hover:text-white transition duration-300">
        {e?.amount}
      </h2>
    </div>
  );
};

export default DashboardCard;
