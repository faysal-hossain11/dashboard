import { Headers } from "../../../components/Headers/Headers";
import { SmallHeader } from "../../../components/Headers/MiddleHeader";

const AutomatedMailAlerts = () => {
  return (
    <div className="px-5">
      <div className=" mb-[60px] md:text-left text-center">
        <Headers text={{ heading: "Automated Mail Alerts" }}></Headers>
        <SmallHeader
          heading={"Automatically send email notifications to your affiliates."}
        />
      </div>
      <div className="mb-[60px] lg:pt-[60px] md:pt-[40px] pt-[30px] lg:px-[130px] md:px-[70px] px-[30px] pb-[70px] bg-primaryColor rounded-[10px] text-white text-center">
        <p className=" font-primaryFont text-primaryColor font-semibold text-[18px] py-3 max-w-[868px] m-auto rounded-[10px] bg-white">
          Get Add-on - $19/Month
        </p>
        <p className=" font-primaryFont mt-10 text-[18px] font-medium text-white">
          Mail alerts addon automatically sends daily, weekly and monthly emails
          to your affiliates about new, top and featured offers on your
          affiliate networks to increase their engagement.
        </p>
      </div>
      <div className="mb-[60px] lg:pt-[60px] md:pt-[40px] pt-[30px] lg:px-[130px] md:px-[70px] px-[30px] pb-[80px] bg-primaryColor rounded-[10px] text-white text-center">
        <p className=" font-primaryFont text-primaryColor font-semibold text-[18px] py-3 max-w-[868px] m-auto rounded-[10px] bg-white">
          How to activate?
        </p>
        <p className=" font-primaryFont mt-10 text-[18px] font-medium text-white">
          To activate the add-on, Please Contact OffersHub support or your
          account manager.
        </p>
      </div>
    </div>
  );
};

export default AutomatedMailAlerts;
