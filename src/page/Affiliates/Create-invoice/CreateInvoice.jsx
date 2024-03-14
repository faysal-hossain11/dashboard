import { Icon } from "@iconify/react";
import { Headers } from "../../../components/Headers/Headers";
import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";
import SelectFiled from "../../../components/InputField/SelectFiled";
import BlackButton from "../../../components/Button/BlackButton";
import Textarea from "../../../components/InputField/Textarea";
import AddButton from "../../../components/Button/AddButton";

const CreateInvoice = () => {
  return (
    <div className="xl:pt-[115px] lg:pt-20 md:pt-10 pt-5">
      <div className="max-w-[1056px] mx-auto bg-white rounded-[15px] 2xl:px-[140px] xl:px-[120px] lg:px-[70px] md:px-10 px-5 md:py-8 py-5">
        <div className="mb-8 flex justify-center">
          <Headers text={{ heading: "New Invoice" }}></Headers>
        </div>
        <div>
          <form action="">
            <InputFieldSmall
              label={"Invoice Title"}
              bg={"#F6F6F6"}
              size={"base"}
              placeholder={"Invoice Title"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectFiled
                label={"Invoice To"}
                size={"base"}
                bg={"#F5F5F5"}
                name={"name"}
                select={[
                  { value: "TestOffer", option: "TestOffer" },
                  { value: "TestOffer", option: "TestOffer" },
                  { value: "TestOffer", option: "TestOffer" },
                  { value: "TestOffer", option: "TestOffer" },
                ]}
              />
              <SelectFiled
                label={"Currency"}
                size={"base"}
                bg={"#F5F5F5"}
                name={"name"}
                select={[
                  { value: "Currency", option: "Currency" },
                  { value: "TestOffer", option: "TestOffer" },
                  { value: "TestOffer", option: "TestOffer" },
                  { value: "TestOffer", option: "TestOffer" },
                ]}
              />
              <div>
                <label
                  htmlFor=""
                  className=" font-primaryFont text-primaryColor text-[16px] font-medium "
                >
                  Start Date
                </label>
                <p className="flex gap-3 items-center bg-[#F6F6F6] px-4 w-full py-2 mt-3 rounded-[10px]">
                  <Icon icon="uis:calender" />
                  02.06.2022{" "}
                </p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className=" font-primaryFont text-primaryColor text-[16px] font-medium "
                >
                  End Date
                </label>
                <p className="flex gap-3 items-center bg-[#F6F6F6] px-4 w-full py-2 mt-3 rounded-[10px]">
                  <Icon icon="uis:calender" />
                  02.06.2022{" "}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-primaryFont text-primaryColor text-[18px] font-medium mb-4">
                Invoice Item
              </h3>
              <div className="md:flex items-start gap-6 w-full">
                <div className="w-full">
                  <InputFieldSmall
                    label={"Offer/Adjustment"}
                    bg={"#F6F6F6"}
                    size={"base"}
                    placeholder={"Invoice Title"}
                    require={"require"}
                    type={"text"}
                    name={"name"}
                  />
                  <div className="mt-5">
                    <BlackButton text={"Delete"} icon={"mdi:plus"} />
                  </div>
                </div>
                <div className="sm:flex items-end gap-[22px] w-full md:mt-0 mt-5">
                  <div className="w-full">
                    <InputFieldSmall
                      label={"Offer/Adjustment"}
                      bg={"#F6F6F6"}
                      size={"base"}
                      placeholder={"Invoice Title"}
                      require={"require"}
                      type={"text"}
                      name={"name"}
                    />
                  </div>
                  <div>
                    <button className="font-secondaryFont font-bold text-white bg-[#F23B01] py-[10px] px-[32px] mt-4 md:mt-0 rounded-[10px]">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="mt-5">
                <p className=" font-primaryFont text-primaryColor  text-[16px]">
                  Sub total
                </p>
                <p className="mt-2 mb-2 font-primaryFont text-primaryColor  text-[16px]">
                  Tax
                </p>
              </div>
              <div className="mt-5">
                <p>$00.00</p>
                <p className="mt-2 mb-2">$00.00</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <h3 className=" font-primaryFont text-primaryColor font-semibold  text-[18px] mt-2">
                Total
              </h3>
              <h3 className=" font-primaryFont text-primaryColor font-semibold  text-[18px] mt-2">
                $00.00
              </h3>
            </div>
            <div className="mt-10 md:flex gap-5">
              <div className="md:w-[50%] w-[100%]">
                <Textarea
                  label={"Customer Note"}
                  name={"Name"}
                  bg={"#F6F6F6"}
                  size={"base"}
                />
              </div>
              <div className="md:w-[50%] w-[100%] md:mt-0 mt-5">
                <SelectFiled
                  label={"Invoice Status"}
                  size={"base"}
                  bg={"#F6F6F6"}
                  name={"name"}
                  select={[
                    { value: "Pending", option: "Pending" },
                    { value: "Active", option: "Active" },
                  ]}
                />
              </div>
            </div>
            <div className="lg:mt-[65px] md:mt-10 mt-5 max-w-[264px] mx-auto">
              <AddButton
                text={"Saved"}
                varient={"black"}
                icon={"material-symbols:chevron-right"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
