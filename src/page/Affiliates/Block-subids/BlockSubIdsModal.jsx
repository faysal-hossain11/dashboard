import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { OutlineField } from "../../../components/InputField/OutlineField";
import OutlineSelect from "../../../components/InputField/OutlineSelect";

const BlockSubIdsModal = () => {
  return (
    <dialog id="blockModal" className="modal">
      <div className="modal-box max-w-[768px] mx-auto md:px-12 px-5 lg:pt-[69px] lg:pb-12 md:py-10 py-10 bg-[#F5F5F5] rounedd-[5px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex justify-center">
          <Headers text={{ heading: "Block New Sub ID" }}></Headers>
        </div>
        <form className="lg:mt-[51px] md:mt-10 mt-5">
          <div className="flex flex-col gap-[22px]">
            <OutlineSelect
              label={"Offer"}
              size={"base"}
              name={"name"}
              select={[
                { value: "Select Offer", option: "Select Offer" },
                { value: "Select Offer", option: "Select Offer" },
              ]}
            />
            <OutlineSelect
              label={"Sub-Affiliate Parameter"}
              size={"base"}
              name={"name"}
              select={[
                { value: "Source ID (source)", option: "Source ID (source)" },
                { value: "Source ID (source)", option: "Source ID (source)" },
              ]}
            />
            <OutlineField
              bg={"transparent"}
              label={"Heading"}
              name={"name"}
              placeholder={"placeholder"}
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

export default BlockSubIdsModal;