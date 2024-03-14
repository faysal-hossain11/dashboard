import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";
import {
  MiddleHeader,
  SmallHeader,
} from "../../../components/Headers/MiddleHeader";
import { AccountInfoCard } from "../../../components/Cards/AccountInfoCard";
import InputField from "../../../components/InputField/InputField";

const AccountInformatins = () => {
  return (
    <>
      <div>
        <AccountInfoCard
          heading={"#1 Jahid Rifat"}
          text={"Company ID: #1 | Jahid Rifat"}
          btn={true}
        />
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
              placeholder={"Title: Manager"}
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
              placeholder={"Phone: +998154841545"}
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
              placeholder={"Last Modified: 2023-08-28 03:59:42"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div className="max-w-[1032px] mx-auto lg:mt-[60px] md:mt-10 mt-8">
            <div className="flex justify-center">
              <MiddleHeader heading={"Referral Links"} />
            </div>
            <div className="md:mt-10 mt-5 grid md:grid-cols-2 gap-6">
              <InputField
                label={"Affiliate Referral Link:"}
                size={"sm"}
                bg={"#FFF"}
                placeholder={"Name: Rifat Jahid"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <InputField
                label={"Advertiser Referral Link"}
                size={"sm"}
                bg={"#FFF"}
                placeholder={
                  "https://hello.offershub.com/register/affiliate?manager_refid=1"
                }
                require={"require"}
                type={"text"}
                name={"name"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountInformatins;
