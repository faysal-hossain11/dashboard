import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";
import Textarea from "../../../components/InputField/Textarea";

const AddCredits = () => {
  return (
    <div>
      <div className="max-w-[1056px] mx-auto xl:pl-[148px] xl:pr-[148px] xl:pt-[32px] xl:pb-[108px] lg:py-10 py-5 lg:px-20 md:px-10 px-5  bg-white rounded-[10px]">
        <div className="flex justify-center">
          <Headers text={{ heading: "Transaction Details" }}></Headers>
        </div>
        <form className="mt-[23px]">
          <div className="flex flex-col md:gap-[22px] gap-4">
            <InputFieldSmall
              label={"Select Affiliate(s) *"}
              bg={"#F6F6F6"}
              size={"base"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              label={"Credit Note *"}
              bg={"#F6F6F6"}
              size={"base"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              label={"Credit Amount *"}
              bg={"#F6F6F6"}
              size={"base"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <InputFieldSmall
              label={"Affecting Date *"}
              bg={"#F6F6F6"}
              size={"base"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <div>
              <label className="text-base font-normal text-primaryColor">
                Affecting Date *
              </label>
              <input
                className="py-3.5 px-[10px] bg-[#F6F6F6] w-full rounded-[10px] h-[37px] mt-[10px]"
                type="date"
                name=""
                id=""
              />
            </div>
            <Textarea
              label={"Memo"}
              name={"Name"}
              bg={"#F6F6F6"}
              size={"base"}
              h={"72px"}
            />
          </div>
          <div className="max-w-[264px] mx-auto lg:mt-[89px] flex justify-center md:mt-12 mt-5">
            <AddButton text={"Add"} varient={"black"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCredits;
