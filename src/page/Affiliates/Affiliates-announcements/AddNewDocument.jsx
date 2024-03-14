import { Icon } from "@iconify/react";
import { Headers } from "../../../components/Headers/Headers";
import AddButton from "../../../components/Button/AddButton";
import InputField from "../../../components/InputField/InputField";

const AddNewDocument = () => {
  return (
    <div>
      <div className="max-w-[1056px] mx-auto bg-[#FFF] rounded-[10px] xl:pl-[148px] xl:pt-[16px] xl:pr-[135px] xl:pb-[75px] md:px-20 sm:px-10 px-5 md:pb-10 pb-5">
        <div className="flex justify-center">
          <Headers text={{ heading: "Announcement" }}></Headers>
        </div>
        <form className="mt-5">
          <InputField
            label={"Announcement Title"}
            bg={"#F6F6F6"}
            size={"base"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <div className="mt-2 flex items-center gap-[10px]">
            <input
              className="w-[26px] h-[26px]"
              type="checkbox"
              name=""
              id="1"
            />
            <label
              htmlFor="1"
              className="text-base text-primaryColor font-normal"
            >
              Link to a Custom URL
            </label>
            <Icon
              className="w-[16px] h-[16px] text-primaryColor"
              icon="mdi:question-mark-circle-outline"
            />
          </div>
          <div className="mt-5">
            <InputField
              label={"URL"}
              bg={"#F6F6F6"}
              size={"base"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
          </div>
          <div className="mt-[27px] flex items-center gap-[10px]">
            <input
              className="w-[26px] h-[26px]"
              type="checkbox"
              name=""
              id="2"
            />
            <label
              htmlFor="2"
              className="text-base text-primaryColor font-normal"
            >
              Post Now
            </label>
          </div>
          <div className="mt-[7px] flex items-center gap-[10px] h-[32px]">
            <input
              className="w-[26px] h-[26px]"
              type="checkbox"
              name=""
              id="3"
            />
            <label
              htmlFor="3"
              className="text-base text-primaryColor font-normal"
            >
              Schedule Post
            </label>
            <Icon
              className="w-[16px] h-[16px] text-primaryColor"
              icon="mdi:question-mark-circle-outline"
            />
          </div>
          <div className="mt-[22px]">
            <label className="flex items-center gap-[10px]">
              <span className="text-base font-normal text-primaryColor">
                Expire At
              </span>
              <Icon
                className="w-[16px] h-[16px] text-primaryColor"
                icon="mdi:question-mark-circle-outline"
              />
            </label>
            <input
              className="px-4 py-[6px] rounded-[10px] bg-[#F5F5F5] mt-[11px] w-full"
              type="date"
              name=""
              id=""
              defaultValue={"25.09.2023"}
            />
          </div>
          <div className="mt-[74px] flex justify-center max-[576px]:mt-10 max-[414px]:mt-5 max-w-[264px] mx-auto">
            <AddButton text={"Add"} varient={"black"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewDocument;
