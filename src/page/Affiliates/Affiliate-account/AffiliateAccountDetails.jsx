import { Icon } from "@iconify/react";
import AddButton from "../../../components/Button/AddButton";
import BlackButton from "../../../components/Button/BlackButton";
import { BlockBtn } from "../../../components/Button/MarcosBtn";
import { AccountInfoCard } from "../../../components/Cards/AccountInfoCard";
import {
  MiddleHeader,
  SmallHeader,
} from "../../../components/Headers/MiddleHeader";
import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";

const AffiliateAccountDetails = () => {
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <AccountInfoCard
          heading={"#1 Jahid Rifat"}
          text={"Company ID: #1 | Jahid Rifat"}
          btn={true}
        />
        <div className="flex flex-wrap gap-6">
          <div className="w-[160px]">
            <BlockBtn text={"Block"} icon={"ion:lock-closed"} bg={"#F23B01"} />
          </div>
          <BlackButton
            text={"Manage Billing"}
            icon={"fluent:document-text-16-filled"}
            contentReverse={true}
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center">
          <SmallHeader heading={"Account Information"} />
        </div>
        <div className="max-w-[1164px] mx-auto">
          <div className="md:mt-[30px] mt-5 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Name: Rifat Jahid"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Address: Albani NYC Street 32"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Trafficback URL: N/A"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Skype ID: Rifat12"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Status: Active"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Phone: +9981548415452021"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Email: rifat12@gmail.com"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Sign Up Date: 02. 10. 2021"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Payout Tier: None"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
        </div>
        <div className="max-w-[1032px] mx-auto md:mt-10 mt-5">
          <div className="flex justify-center">
            <MiddleHeader heading={"Account Manager"} />
          </div>
          <div className="md:mt-[30px] mt-5 grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="relative">
              <InputFieldSmall
                bg={"#FFF"}
                placeholder={"Name: Rifat Jahid"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <div className="flex gap-[6px] items-center absolute top-2 right-3">
                <Icon
                  className="text-[18px] text-[#6A6A6A]"
                  icon="material-symbols:edit"
                />
                <p className="text-[#6A6A6A] text-sm font-normal">Change</p>
              </div>
            </div>
            <InputFieldSmall
              bg={"#FFF"}
              placeholder={"Approve Conversion Manually: No"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div className="md:mt-10 mt-5">
            <AddButton
              text={"Login to Affiliate Dashboard"}
              varient={"black"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateAccountDetails;
