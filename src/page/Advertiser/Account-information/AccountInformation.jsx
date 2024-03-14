import { Icon } from "@iconify/react";
import { BlockBtn } from "../../../components/Button/MarcosBtn";
import { AccountInfoCard } from "../../../components/Cards/AccountInfoCard";
import {
  MiddleHeader,
  SmallHeader,
} from "../../../components/Headers/MiddleHeader";
import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";
import AddButton from "../../../components/Button/AddButton";

const AccountInformation = () => {
  return (
    <>
      <div className="sm:flex justify-between items-center">
        <div>
          <AccountInfoCard
            heading={"#1 Jahid Rifat"}
            text={"Company ID: #1 | Jahid Rifat"}
            btn={true}
          />
        </div>
        <div className="w-[160px] sm:mt-0 mt-5">
          <BlockBtn text={"Block"} icon={"ion:lock-closed"} bg={"#F23B01"} />
        </div>
      </div>
      <div className="lg:mt-[60px] md:mt-10 mt-8">
        <div className="flex justify-center">
          <SmallHeader heading={"Account Information"} />
        </div>
        <form>
          <div className="md:mt-10 mt-5 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-6 gap-x-6">
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
              placeholder={"Phone: +998154841545"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div className="md:flex gap-6 md:mt-10 mt-5">
            <div className="xl:w-[32.5%] lg:w-[50%] md:w-[50%] w-[100%]">
              <InputFieldSmall
                bg={"#FFF"}
                placeholder={"Email: rifat12@gmail.com"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
            </div>
            <div className="xl:w-[66.66%] lg:w-[50%] md:w-[50%] w-[100%] md:mt-0 mt-5">
              <InputFieldSmall
                bg={"#FFF"}
                placeholder={"Sign Up Date: 02. 10. 2021"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
            </div>
          </div>
          <div className="max-w-[1032px] mx-auto lg:mt-[60px] md:mt-10 mt-8">
            <div className="flex justify-center">
              <MiddleHeader heading={"Account Manager"} />
            </div>
            <div className="md:mt-10 mt-5 grid md:grid-cols-2 gap-6">
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
            <div className="lg:mt-[60px] md:mt-10 mt-5">
              <AddButton
                text={"Login to Affiliate Dashboard"}
                varient={"black"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountInformation;
