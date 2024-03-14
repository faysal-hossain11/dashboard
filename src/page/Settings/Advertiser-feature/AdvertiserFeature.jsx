import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { SmallHeader } from "../../../components/Headers/MiddleHeader";
import InputField from "../../../components/InputField/InputField";
import SelectFiled from "../../../components/InputField/SelectFiled";

const AdvertiserFeature = () => {
  return (
    <div>
      <Headers text={{ heading: "Manage Advertiser Feature" }}></Headers>
      <div className="xl:mt-[30px] mt-5 2xl:py-10 2xl:pl-32 2xl:pr-[133px] xl:px-20 md:px-10 px-5 md:py-10 py-5 bg-white rounded-[10px]">
        <div className="flex justify-center">
          <SmallHeader heading={"Manage Advertiser Feature"} />
        </div>
        <form>
          <div className="lg:mt-[45px] md:mt-8 mt-5 grid 2xl:grid-cols-4 gap-5 xl:grid-cols-3 md:grid-cols-2">
            <InputField
              label={"Advertiser Signup Page Text"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"All Best to Find Here"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <SelectFiled
              label={"Enable Advertiser Plartform"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
            <SelectFiled
              label={"Advertiser Signup"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
            <SelectFiled
              label={"Allow Advertisers Managers To Approve Pending Accounts"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Yes", option: "Yes" },
                { value: "No", option: "No" },
              ]}
            />
            <SelectFiled
              label={"Advertiser Multi User Account"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Disable", option: "Disable" },
                { value: "Enable", option: "Enable" },
              ]}
            />
            <SelectFiled
              label={"Conversation Access"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Approved Only", option: "Approved Only" },
                { value: "Approved Only", option: "Approved Only" },
              ]}
            />
            <SelectFiled
              label={"Enable Advertiser Billing"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
          </div>
          <div className="mt-20 max-[767]:mt-10 max-[576px]:mt-5 max-w-[506px] mx-auto">
            <AddButton text={"Update"} varient={"black"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvertiserFeature;