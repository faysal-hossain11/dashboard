import { Icon } from "@iconify/react";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import AddButton from "../../../components/Button/AddButton";
import SelectFiled from "../../../components/InputField/SelectFiled";
import InputField from "../../../components/InputField/InputField";

const CreateQuestion = () => {
  return (
    <div>
      <Headers text={{ heading: "Question Create" }}></Headers>
      <form className="mt-[30px] max-[576px]:mt-5">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 md:gap-y-[50px] gap-y-5">
          <SelectFiled
            label={"Apply For"}
            size={"base"}
            bg={"#FFF"}
            name={"name"}
            select={[
              {
                value: "Affiliate Signup From",
                option: "Affiliate Signup From",
              },
              {
                value: "Affiliate Signup From",
                option: "Affiliate Signup From",
              },
            ]}
          />
          <InputField
            label={"Question"}
            bg={"#FFF"}
            size={"base"}
            placeholder={"EX: How much monthly traffic you have?"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <SelectFiled
            label={"Filed Type"}
            size={"base"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Text", option: "Text" },
              { value: "Large Text", option: "Large Text" },
              { value: "check Boxes", option: "check Boxes" },
              { value: "Yes/No Option", option: "Yes/No Option" },
            ]}
          />
          <div>
            <label className="font-primaryFont text-primaryColor font-medium text-base">
              Field Options
            </label>
            <div className="flex items-center gap-[9px] mt-[10px] w-full">
              <div className="w-full">
                <InputField
                  bg={"#FFF"}
                  placeholder={"Option #1"}
                  require={"require"}
                  type={"text"}
                  name={"name"}
                />
              </div>
              <button className="bg-[#FA4E4E] px-4 py-[10px] rounded-[10px] h-[42px]">
                <Icon
                  className="text-[22px] text-[#FFFFFF]"
                  icon="mdi:close-circle"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[42px] max-[576px]:mt-5">
          <BlackButton
            text={"Add Option"}
            icon={"system-uicons:plus"}
            contentReverse={true}
          />
        </div>
        <div className="mt-12 max-[767px]:mt-8 max-[576px]:mt-5">
          <label className="text-primaryColor text-[18px] fond-normal">
            Required Answer?
          </label>
          <div className="mt-5 max-[576px]:mt-3 flex gap-[50px]">
            <div className="flex items-center gap-[10px] p-[10px]">
              <input
                className="h-6 w-6 text-[#6A6A6A]"
                type="checkbox"
                name=""
                id="1"
              />
              <label
                className="text-[#6A6A6A] text-base font-normal"
                htmlFor="1"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center gap-[10px] p-[10px]">
              <input
                className="h-6 w-6 text-[#6A6A6A]"
                type="checkbox"
                name=""
                id="2"
              />
              <label
                className="text-[#6A6A6A] text-base font-normal"
                htmlFor="2"
              >
                No
              </label>
            </div>
          </div>
        </div>
        <div className="mt-[62px] max-[767]:mt-10 max-[576px]:mt-5 max-w-[768px] mx-auto">
          <AddButton text={"Create"} varient={"black"} />
        </div>
      </form>
    </div>
  );
};

export default CreateQuestion;
