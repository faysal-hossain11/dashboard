import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import InputField from "../../../components/InputField/InputField";
import SelectFiled from "../../../components/InputField/SelectFiled";

const AffiliateFeature = () => {
  return (
    <div>
      <Headers text={{ heading: "Manage Affiliate Features" }}></Headers>
      <div className="xl:mt-[30px] mt-5 2xl:pt-10 2xl:pb-[46px] 2xl:pl-32 2xl:pr-[133px] md:py-10 py-5 xl:px-20 md:px-5 px-5 bg-white rounded-[10px]">
        <h3 className="text-primaryColor font-primaryFont text-[20px] font-semibold mb-[45px] text-center max-[767px]:mb-5 max-[340px]:text-[18px]">
          Manage Affiliate Features
        </h3>
        <form>
          <div className="grid 2xl:grid-cols-4 gap-5 xl:grid-cols-3 md:grid-cols-2">
            <SelectFiled
              label={"Allow affiliate self signups?"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
            <SelectFiled
              label={"Affiliate Dashboard Theme"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Default", option: "Default" },
                { value: "Default", option: "Default" },
              ]}
            />
            <SelectFiled
              label={"Affiliate Default Offers List"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Card View", option: "Card View" },
                { value: "Card View", option: "Card View" },
              ]}
            />
            <InputField
              label={"Affiliate Sign up Page Text"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"Sign up to see Interesting Offers"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <SelectFiled
              label={"Auto Approve Affiliate Account"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Disable", option: "Disable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
            <SelectFiled
              label={"Allow Affiliate Managers To Approve Pending Accounts"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "No", option: "No" },
                { value: "Yes", option: "Yes" },
              ]}
            />
            <SelectFiled
              label={"Default Affiliate Managers"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "None", option: "No" },
                { value: "None", option: "None" },
              ]}
            />
            <SelectFiled
              label={"Hide Advertisers Fom Affiliate Managers"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "No", option: "No" },
                { value: "Yes", option: "Yes" },
              ]}
            />
            <SelectFiled
              label={"Hide Inactive Conversions From Affiliate Managers"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "No", option: "No" },
                { value: "Yes", option: "Yes" },
              ]}
            />
            <SelectFiled
              label={"Hide Live Monitoring Dasboard From Affiliate Managers"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "No", option: "No" },
                { value: "Yes", option: "Yes" },
              ]}
            />
            <SelectFiled
              label={"Affiliate Multiple Users Account"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "No", option: "No" },
                { value: "Yes", option: "Yes" },
              ]}
            />
            <SelectFiled
              label={"Show Default Smart Link"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "No", option: "No" },
                { value: "Yes", option: "Yes" },
              ]}
            />
            <SelectFiled
              label={"Hide Offer Caps"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Disable", option: "Disable" },
                { value: "Enable", option: "Enable" },
              ]}
            />
            <SelectFiled
              label={"Show Sale Amount"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Disable", option: "Disable" },
                { value: "Enable", option: "Enable" },
              ]}
            />
            <SelectFiled
              label={"Conversions Access"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Approved Only", option: "Approved Only" },
                { value: "Approved Only", option: "Approved Only" },
              ]}
            />
            <SelectFiled
              label={"Allow Affiliate To Access"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
            <SelectFiled
              label={"Affiliate Referral Commission"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
            <SelectFiled
              label={"Enable Affiliate Billing"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
          </div>
          <div className="mt-[31px] max-[576px]:mt-5 max-w-[506px] mx-auto">
            <AddButton text={"Update"} varient={"black"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AffiliateFeature;
