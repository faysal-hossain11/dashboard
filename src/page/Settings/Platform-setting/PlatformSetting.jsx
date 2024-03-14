import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import InputField from "../../../components/InputField/InputField";
import SelectFiled from "../../../components/InputField/SelectFiled";
import IMTypes from "./IMTypes";

const PlatformSetting = () => {
  return (
    <div>
      <Headers
        text={{ heading: "Manage Your Environmental Defaults" }}
      ></Headers>
      <div className="xl:mt-[30px] md:mt-5 mt-5 xl:pt-10 xl:pb-[76px] md:py-5 py-5 2xl:pr-[133px] 2xl:pl-32 xl:px-20 md:px-10 px-5  bg-white rounded-[10px]">
        <h3 className=" text-primaryColor font-primaryFont text-[20px] font-semibold mb-[45px] text-center max-[767px]:mb-5">
          Brand COnfiguration
        </h3>
        <form>
          <div className="grid 2xl:grid-cols-4 gap-5 xl:grid-cols-3 md:grid-cols-2">
            <SelectFiled
              label={"Default TImezone"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Universal Time UTC", option: "Universal Time UTC" },
                { value: "Universal Time UTC", option: "Universal Time UTC" },
              ]}
            />
            <SelectFiled
              label={"Enable Multi Currency"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Yes", option: "Yes" },
                { value: "No", option: "No" },
              ]}
            />
            <InputField
              label={"Global Redirect URL"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"www.examopeldkd"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              label={"Network Postback URL"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"www.examopeldkd"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <SelectFiled
              label={"Mail Validation Required"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Yes", option: "Yes" },
                { value: "No", option: "No" },
              ]}
            />
            <SelectFiled
              label={"Enable Terms & Conditions"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Yes", option: "Yes" },
                { value: "No", option: "No" },
              ]}
            />
            <SelectFiled
              label={"EU Cookie Complience"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
            <SelectFiled
              label={"Allow to change impreesion"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Enable", option: "Enable" },
                { value: "Disable", option: "Disable" },
              ]}
            />
            <SelectFiled
              label={"Generate Impression tracker"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                {
                  value: "HTML Hidden image pixel",
                  option: "HTML Hidden image pixel",
                },
                {
                  value: "HTML Hidden image pixel",
                  option: "HTML Hidden image pixel",
                },
              ]}
            />
            <SelectFiled
              label={"Cap Exceed Alert Level"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "80%", option: "80%" },
                { value: "90%", option: "90%" },
              ]}
            />
            <SelectFiled
              label={"Offer Expire Alert Level"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "O3 days early", option: "O3 days early" },
                { value: "O4 days early", option: "O4 days early" },
              ]}
            />
            <SelectFiled
              label={"Generate featured offer list"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Conversion Rate", option: "Conversion Rate" },
                { value: "Conversion Rate", option: "Conversion Rate" },
              ]}
            />
          </div>
          <div className="mt-5 grid 2xl:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
            <SelectFiled
              label={"Allow Search Bots"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Disable", option: "Disable" },
                { value: "Enable Rate", option: "Enable Rate" },
              ]}
            />
            <div>
              <label className="font-primaryFont text-primaryColor font-medium text-base">
                Accepted IM Types
              </label>
              <div className="mt-[10px] flex flex-wrap gap-[10px]">
                <IMTypes name={"Skype"} />
                <IMTypes name={"Google Hangouts"} />
                <IMTypes name={"Telegram"} />
                <IMTypes name={"Linkdin"} />
              </div>
            </div>
            <SelectFiled
              label={"Click ID Generation Sequence"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "System Default", option: "System Default" },
                { value: "System Default", option: "System Default" },
              ]}
            />
          </div>
          <div className="mt-5 grid 2xl:grid-cols-4 gap-5 xl:grid-cols-3 md:grid-cols-2">
            <SelectFiled
              label={"Click Model For Formulas"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Gross Click", option: "Gross Click" },
                { value: "Gross Click", option: "Gross Click" },
              ]}
            />
            <SelectFiled
              label={"Tracking Link Redirection"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "302 Header Redirect", option: "302 Header Redirect" },
                { value: "302 Header Redirect", option: "302 Header Redirect" },
              ]}
            />
            <SelectFiled
              label={"Enable reCAPTCHA"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "System Default", option: "System Default" },
                { value: "System Default", option: "System Default" },
              ]}
            />
            <SelectFiled
              label={"Fraud Checking"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Disable", option: "Disable" },
                { value: "Enable", option: "Enable" },
              ]}
            />
            <SelectFiled
              label={"Strict Conversion Country"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Disable", option: "Disable" },
                { value: "Enable", option: "Enable" },
              ]}
            />
          </div>
          <div className="mt-[37px] max-[576px]:mt-5 max-w-[506px] mx-auto">
            <AddButton text={"Update"} varient={"black"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlatformSetting;
