import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import InputField from "../../../components/InputField/InputField";
import SelectFiled from "../../../components/InputField/SelectFiled";

const CreateAffilliates = () => {
  return (
    <div>
      <div>
        <div className="xl:mb-[50px] md:mb-10 mb-5">
          <Headers text={{ heading: "Create Affiliates" }}></Headers>
        </div>
        <div className="lg:p-[60px] md:p-10 p-5 rounded-[10px] bg-white">
          <div>
            <h3 className=" font-primaryFont text-center mb-8 text-primaryColor font-medium text-2xl">
              Company Details
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-6 gap-[24px]">
            <InputField
              label={"Company"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"https: //example.com/offer_preview .html"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              label={"Address"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"Japan"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              label={"City"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"68"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 gap-6">
            <InputField
              label={"Postal/Zip Code"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"1204"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputField
              label={"Region"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"Islam"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <SelectFiled
              label={"City"}
              size={"base"}
              bg={"#F5F5F5"}
              name={"name"}
              select={[
                { value: "Bangladesh", option: "Bangladesh" },
                { value: "UK", option: "UK" },
                { value: "India", option: "India" },
                { value: "US", option: "US" },
              ]}
            />
            <InputField
              label={"Phone"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"+880175642265"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div>
            <div>
              <h3 className=" font-primaryFont text-center mb-8 mt-8 text-primaryColor font-medium text-2xl">
                User Details
              </h3>
            </div>
            <form action="">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <InputField
                  label={"First name"}
                  bg={"#F5F5F5"}
                  size={"base"}
                  placeholder={"First Name"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputField
                  label={"Last name"}
                  bg={"#F5F5F5"}
                  size={"base"}
                  placeholder={"Last Name"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputField
                  label={"Title"}
                  bg={"#F5F5F5"}
                  size={"base"}
                  placeholder={"Job Title"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputField
                  label={"Email"}
                  bg={"#F5F5F5"}
                  size={"base"}
                  placeholder={"example@mail.com"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <SelectFiled
                  label={"IM Details"}
                  size={"base"}
                  bg={"#F5F5F5"}
                  name={"name"}
                  select={[
                    { value: "Select IM Type", option: "Select IM Type" },
                    { value: "UK", option: "UK" },
                    { value: "India", option: "India" },
                    { value: "US", option: "US" },
                  ]}
                />
                <InputField
                  label={" Enter IM ID"}
                  bg={"#F5F5F5"}
                  size={"base"}
                  placeholder={" Enter IM ID"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputField
                  label={"Password"}
                  bg={"#F5F5F5"}
                  size={"base"}
                  placeholder={"Password"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <InputField
                  label={"Confirm Password"}
                  bg={"#F5F5F5"}
                  size={"base"}
                  placeholder={"Confirm Password"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
              </div>
            </form>
            <div>
              <div>
                <h3 className=" font-primaryFont text-center mb-8 mt-8 text-primaryColor font-medium text-2xl">
                  Settings
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
                <SelectFiled
                  label={"Account Manager"}
                  size={"base"}
                  bg={"#F5F5F5"}
                  name={"name"}
                  select={[
                    { value: "Rifat", option: "Rifat" },
                    { value: "UK", option: "UK" },
                    { value: "India", option: "India" },
                    { value: "US", option: "US" },
                  ]}
                />
                <SelectFiled
                  label={"Account Status"}
                  size={"base"}
                  bg={"#F5F5F5"}
                  name={"name"}
                  select={[
                    { value: "Active", option: "Active" },
                    { value: "UK", option: "UK" },
                    { value: "India", option: "India" },
                    { value: "US", option: "US" },
                  ]}
                />
                <SelectFiled
                  label={"Manually Approve Conversions"}
                  size={"base"}
                  bg={"#F5F5F5"}
                  name={"name"}
                  select={[
                    { value: "Disable", option: "Disable" },
                    { value: "UK", option: "UK" },
                    { value: "India", option: "India" },
                    { value: "US", option: "US" },
                  ]}
                />
                <SelectFiled
                  label={"Trafficback URL"}
                  size={"base"}
                  bg={"#F5F5F5"}
                  name={"name"}
                  select={[
                    {
                      value: "Eg: http/affiliate.duysgudi",
                      option: "Eg: http/affiliate.duysgudi",
                    },
                    { value: "UK", option: "UK" },
                    { value: "India", option: "India" },
                    { value: "US", option: "US" },
                  ]}
                />
                <SelectFiled
                  label={"Payout Tier"}
                  size={"base"}
                  bg={"#F5F5F5"}
                  name={"name"}
                  select={[
                    { value: "None", option: "None" },
                    { value: "UK", option: "UK" },
                    { value: "India", option: "India" },
                    { value: "US", option: "US" },
                  ]}
                />
              </div>
              <div className=" max-w-[500px] mt-8 m-auto">
                <AddButton text={"Save"} varient={"black"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAffilliates;
