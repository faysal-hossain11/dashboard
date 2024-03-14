import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { OutlineField } from "../../../components/InputField/OutlineField";

const AffiAccountusersModal = () => {
  return (
    <dialog id="userModal" className="modal">
      <div className="modal-box max-w-[768px] lg:px-12 md:px-10 px-5 md:py-16 py-8 bg-[#F5F5F5] rounded-[5px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex justify-center">
          <Headers text={{ heading: "Add User" }}></Headers>
        </div>
        <form>
          <div className="flex flex-col gap-[22px] mt-[13px]">
            <OutlineField
              bg={"transparent"}
              label={"User Email"}
              name={"name"}
              placeholder={"example@gmail.com"}
              required={"required"}
              size={"base"}
              type={"text"}
            />
            <AddButton text={"Add"} varient={"black"} />
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AffiAccountusersModal;
