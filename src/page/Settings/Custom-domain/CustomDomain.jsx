import CustomDomainModal from "./CustomDomainModal";
import { Headers } from "../../../components/Headers/Headers";
import AddButton from "../../../components/Button/AddButton";
import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";
import ReportBlackButton from "../../../components/Button/ReportBlackButton";

const CustomDomain = () => {
  return (
    <div>
      <Headers text={{ heading: "Create Employee" }}></Headers>
      <div className="xl:mt-[30px] sm:mt-5 mt-5">
        <form>
          <div className="pt-10 xl:px-[131px] pb-[42px] lg:px-12 p-5 bg-white rounded-[10px]">
            <h2 className="font-semibold text-primaryColor text-xl text-center">
              Custom Domain
            </h2>
            <div className="xl:mt-[33px] sm:mt-5 mt-5 grid xl:grid-cols-2 gap-[18px] md:grid-cols-1">
              <InputFieldSmall
                label={"Primary Domain"}
                bg={"#F5F5F5"}
                size={"base"}
                placeholder={"www.examopeldkd"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <div>
                <InputFieldSmall
                  label={"Custom Domain"}
                  bg={"#F5F5F5"}
                  size={"base"}
                  placeholder={"www.examopeldkd"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
                <p className="mt-[10px] text-[#A4A4A4] font-normal text-sm">
                  How to setup a custom dashnboard domain?
                </p>
              </div>
            </div>
            <div className="max-w-[506px] mx-auto mt-[29px] max-[576px]:mt-5">
              <AddButton text={"Save"} varient={"black"} />
            </div>
          </div>
        </form>
        <div className="mt-10 xl:py-10 xl:px-[131px] lg:px-12 sm:p-5 p-5 bg-white rounded-[10px]">
          <h2 className="font-semibold text-primaryColor text-xl text-center">
            Tarcking Domain
          </h2>
          <div className="mt-[33px] max-[576px]:mt-5 grid xl:grid-cols-2 md:grid-cols-1 gap-x-[18px] gap-y-10">
            <InputFieldSmall
              label={"Primary Domain"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"www.examopeldkd"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <div>
              <InputFieldSmall
                label={"Custom Domain"}
                bg={"#F5F5F5"}
                size={"base"}
                placeholder={"No domain available"}
                require={"require"}
                type={"text"}
                name={"name"}
              />
              <div className="flex justify-between items-center mt-[10px] max-[576px]:flex-col max-[576px]:gap-3">
                <p className="text-[#A4A4A4] font-normal text-sm">
                  How to setup a custom dashnboard domain?
                </p>
                <button
                  onClick={() =>
                    document.getElementById("domain-modal").showModal()
                  }
                >
                  <ReportBlackButton text={"Add Domain"} icon={"mdi:plus"} />
                </button>
                <CustomDomainModal />
              </div>
            </div>
            <InputFieldSmall
              label={"Default Tracking Domain"}
              bg={"#F5F5F5"}
              size={"base"}
              placeholder={"No domain available"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div className="max-w-[506px] mx-auto mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5">
            <AddButton text={"Save"} varient={"black"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDomain;
