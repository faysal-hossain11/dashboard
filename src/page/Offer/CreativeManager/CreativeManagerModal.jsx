import { Icon } from "@iconify/react";
import SelectFiled from "../../../components/InputField/SelectFiled";
import ImportCard from "../../../components/Cards/ImportCard";
import { Headers } from "../../../components/Headers/Headers";

const CreativeManagerModal = () => {
  return (
    <dialog id="creative-modal" className="modal">
      <div className="modal-box max-w-[1032px] rounded-[10px] xl:px-[132px] lg:px-20 md:px-10 px-5 py-6 md:pt-[39px] pt-5 lg:pb-[89px] md:pb-10 pb-5 bg-modalBg">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex justify-center">
          <Headers text={{ heading: "Add Offer Creative" }}></Headers>
        </div>
        <form>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-5 md:mt-10 mt-5">
            <SelectFiled
              label={"Offer"}
              size={"xl"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Test", option: "Test" },
                { value: "Test", option: "Test" },
              ]}
            />
            <SelectFiled
              label={"Creative Name"}
              size={"xl"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Ex; risyhdf", option: "Ex; risyhdf" },
                { value: "Ex; risyhdf", option: "Ex; risyhdf" },
              ]}
            />
          </div>
          <div className="md:mt-10 mt-5">
            <SelectFiled
              label={"Creative Type"}
              size={"xl"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Banner", option: "Banner" },
                { value: "Banner", option: "Banner" },
              ]}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-5">
            <SelectFiled
              label={"Add Width"}
              size={"xl"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "EX: 320", option: "EX: 320" },
                { value: "EX: 320", option: "EX: 320" },
              ]}
            />
            <SelectFiled
              label={"Ad Height"}
              size={"xl"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "EX: 320", option: "EX: 320" },
                { value: "EX: 320", option: "EX: 320" },
              ]}
            />
          </div>
          <div className="md:mt-10 mt-5">
            <ImportCard icon={"ant-design:file-add-filled"} />
          </div>
          <div className="mt-10 max-[767px]:mt-5 flex gap-5 max-[414px]:gap-2 justify-center items-center">
            <Icon
              icon="ion:shield-checkmark"
              className="w-[26px] h-[26px] text-[#A4A4A4]"
            />
            <p className="font-normal text-base text-[#A4A4A4] max-[414px]:text-xs">
              Make Creative Private Upload Creative
            </p>
          </div>
          <div className="lg:mt-16 md:mt-10 mt-5 w-full text-center">
            <button className="px-[22px] py-3 rounded-[10px] bg-primaryColor lg:w-[671px] w-full h-[45px]">
              <span className="font-bold text-base text-white">
                Upload Creative
              </span>
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CreativeManagerModal;
