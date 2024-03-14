import AddButton from "../../../components/Button/AddButton";
import { AccountInfoCard } from "../../../components/Cards/AccountInfoCard";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";
import InputField from "../../../components/InputField/InputField";

const UserAccountDetails = () => {
  return (
    <>
      <AccountInfoCard
        heading={"#1 Jahid Rifat"}
        text={"Company ID: #1 | Jahid Rifat"}
        btn={true}
      />
      <div className="lg:mt-[86px] md:mt-10 mt-5">
        <div className="flex justify-center">
          <MiddleHeader heading={"Account Information"} />
        </div>
        <div className="max-w-[1032px] mx-auto">
          <div className="md:mt-10 mt-5 grid md:grid-cols-2 grid-cols-1 md:gap-y-10 gap-y-5 gap-x-6">
            <InputField
              bg={"#FFF"}
              placeholder={"PlaceHolder Name"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Title: Jahid"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Company: Albani NYC Street 32"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Status: Active"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Address: Jatrabari Dhaka"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Sign Up Date: 02. 10. 2021"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Last Modified: 2022. 05. 24"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Email: rifat12@gmail.com"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Phone: 01589646544"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              bg={"#FFF"}
              placeholder={"Password: Change Password"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div className="lg:mt-[60px] md:mt-10 mt-5">
            <AddButton text={"Login"} varient={"black"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccountDetails;
