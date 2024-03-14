import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";
import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";
import SelectFiled from "../../../components/InputField/SelectFiled";

const CreateAdvertiser = () => {
  return (
    <div>
      <h1 className="text-semibold text-2xl text-primaryColor"></h1>
      <Headers text={{ heading: "Create Advertiser" }}></Headers>
      <div className="mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5">
        <form>
          <div className="2xl:pl-[264px] pt-10 2xl:pr-[131px] pb-[77px] xl:px-20 md:px-10 px-5 bg-white rounded-[10px] max-[1100px]:py-10 max-[576px]:py-5">
            <MiddleHeader heading={" Company Details"} />
            <div className="mt-10 max-[576px]:mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 max-[767px]:gap-y-5">
              <InputFieldSmall
                label={"Company"}
                bg={"#F6F6F6"}
                size={"base"}
                placeholder={"https: //example.com/offer_preview .html"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <InputFieldSmall
                label={"Country"}
                bg={"#F6F6F6"}
                size={"base"}
                placeholder={"Japan"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <InputFieldSmall
                label={"Postal/Zip Code"}
                bg={"#F6F6F6"}
                size={"base"}
                placeholder={"85"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <InputFieldSmall
                label={"City"}
                bg={"#F6F6F6"}
                size={"base"}
                placeholder={"Tokyo"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <InputFieldSmall
                label={"Region"}
                bg={"#F6F6F6"}
                size={"base"}
                placeholder={"Islam"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <InputFieldSmall
                label={"Phone"}
                bg={"#F6F6F6"}
                size={"base"}
                placeholder={"+880175642265"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
            </div>
            <div className="mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5">
              <h1 className="text-semibold text-2xl text-primaryColor text-center">
                User Details
              </h1>
              <div className="mt-10 max-[576px]:mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 max-[767px]:gap-y-5">
                <InputFieldSmall
                  label={"First name"}
                  bg={"#F6F6F6"}
                  size={"base"}
                  placeholder={"Jhon"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputFieldSmall
                  label={"Last Name"}
                  bg={"#F6F6F6"}
                  size={"base"}
                  placeholder={"Wick"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputFieldSmall
                  label={"Title"}
                  bg={"#F6F6F6"}
                  size={"base"}
                  placeholder={"CEO"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputFieldSmall
                  label={"Email"}
                  bg={"#F6F6F6"}
                  size={"base"}
                  placeholder={"abc@gmail.com"}
                  require={"require"}
                  type={"email"}
                  name={"name"}
                />
                <SelectFiled
                  label={"IM Details"}
                  size={"base"}
                  bg={"#F6F6F6"}
                  name={"name"}
                  select={[
                    {
                      value: "Current report date range",
                      option: "Current report date range",
                    },
                    {
                      value: "Current report date range",
                      option: "Current report date range",
                    },
                  ]}
                />
                <InputFieldSmall
                  label={"Enter IM ID"}
                  bg={"#F6F6F6"}
                  size={"base"}
                  placeholder={"Current report date range"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputFieldSmall
                  label={"Strong Password"}
                  bg={"#F6F6F6"}
                  size={"base"}
                  placeholder={"Strong Password"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputFieldSmall
                  label={"Confirm Password"}
                  bg={"#F6F6F6"}
                  size={"base"}
                  placeholder={"Confirm Password"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
              </div>
            </div>
            <div className="mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5">
              <h1 className="text-semibold text-2xl text-primaryColor text-center">
                Settings
              </h1>
              <div className="mt-10 max-[576px]:mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 max-[767px]:gap-y-5">
                <div className="md:max-w-[372px] max-w-full">
                  <label className="text-base font-medium text-primaryColor">
                    Account Manager
                  </label>
                  <select
                    className="mt-[10px] px-[10px] py-[7px] h-[37px] bg-[#F6F6F6] rounded-[10px] w-full"
                    name=""
                    id=""
                  >
                    <option value="">Rifat</option>
                    <option value="">Rifat</option>
                  </select>
                </div>
                <SelectFiled
                  label={"Account Manager"}
                  size={"base"}
                  bg={"#F6F6F6"}
                  name={"name"}
                  select={[
                    { value: "Rifat", option: "Rifat" },
                    { value: "Rifat", option: "Rifat" },
                  ]}
                />
                <SelectFiled
                  label={"Account Status"}
                  size={"base"}
                  bg={"#F6F6F6"}
                  name={"name"}
                  select={[
                    { value: "Active", option: "Active" },
                    { value: "Pending", option: "Pending" },
                  ]}
                />
                <SelectFiled
                  label={"Manually Approve Conversions"}
                  size={"base"}
                  bg={"#F6F6F6"}
                  name={"name"}
                  select={[
                    { value: "Disable", option: "Disable" },
                    { value: "Enable", option: "Enable" },
                  ]}
                />
                <SelectFiled
                  label={"Trafficback URL"}
                  size={"base"}
                  bg={"#F6F6F6"}
                  name={"name"}
                  select={[
                    {
                      value: "Eg: http/affiliate.duysgudi",
                      option: "Eg: http/affiliate.duysgudi",
                    },
                    {
                      value: "Eg: http/affiliate.duysgudi",
                      option: "Eg: http/affiliate.duysgudi",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5 max-w-[504px] mx-auto">
              <AddButton text={"Save"} varient={"black"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAdvertiser;
