import AddButton from "../../../components/Button/AddButton";
import OutletButton from "../../../components/Button/OutletButton";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";
import InputBottom from "../../../components/InputField/InputBottom";
import SelectFiled from "../../../components/InputField/SelectFiled";

const CreateNewModal = () => {
  return (
    <dialog id="create-new-modal" className="modal">
      <div className="modal-box max-w-[1032px] bg-modalBg rounded-[10px] xl:px-[132px] lg:px-20 md:px-10 px-5 xl:pt-[94px] xl:pb-[68px] lg:py-16 md:py-10 py-8">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div>
          <div className="flex justify-center">
            <MiddleHeader heading={"Smart Link"} />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-[42px] mt-5">
            <InputBottom
              label={"Name"}
              placeholder={"Enter Group Name"}
              name={"Name"}
              required={"required"}
            />
            <InputBottom
              label={"Description"}
              placeholder={"Optional Group Description"}
              name={"Name"}
              required={"required"}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-[50px] mt-5">
            <SelectFiled
              label={"Optimizer"}
              size={"sm"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Active", option: "Active" },
                { value: "Inactive", option: "Inactive" },
              ]}
            />
            <SelectFiled
              label={"Private Group?"}
              size={"sm"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Active", option: "Active" },
                { value: "Inactive", option: "Inactive" },
              ]}
            />
          </div>
          <div className="mt-[67px] max-[576px]:mt-8 max-w-[501px] mx-auto flex gap-[21px] max-[576px]:flex-col max-[576px]:max-w-full">
            <OutletButton text={"Cancel"} />
            <AddButton text={"Submit"} varient={"black"} />
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CreateNewModal;
