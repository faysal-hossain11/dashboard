import AddButton from "../../../components/Button/AddButton";
import OutletButton from "../../../components/Button/OutletButton";
import { Headers } from "../../../components/Headers/Headers";
import InputField from "../../../components/InputField/InputField";
import SelectFiled from "../../../components/InputField/SelectFiled";
import Textarea from "../../../components/InputField/Textarea";

const SmartLinkUpdateModal = () => {
  return (
    <dialog id="smartLinkUpdate-modal" className="modal">
      <div className="modal-box max-w-[621px] lg:p-[60px] md:p-10 p-6 bg-[#F6F6F6] ">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-5 max-[576px]:gap-4">
          <Headers text={{ heading: "Smart Link" }}></Headers>
          <SelectFiled
            label={"Select Affiliate"}
            size={"sm"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Active", option: "Active" },
              { value: "Inactive", option: "Inactive" },
            ]}
          />
          <Textarea
            label={"Link"}
            placeholder={"https://bizrev.go2oh.net/go_smart?aff_id=3"}
            name={"Name"}
            bg={"#FFF"}
            size={"sm"}
            h={"85px"}
          />
          <div className="flex gap-10">
            <div className="flex gap-5 items-center">
              <input
                className="h-6 w-6 text-primaryColor"
                type="checkbox"
                name=""
                id="3"
              />
              <label
                htmlFor="3"
                className="text-base font-medium text-primaryColor"
              >
                Select Affiliate
              </label>
            </div>
            <div className="flex gap-5 items-center">
              <input
                className="h-6 w-6 text-primaryColor"
                type="checkbox"
                name=""
                id="4"
              />
              <label
                htmlFor="4"
                className="text-base font-normal text-tableColor"
              >
                Add Source ID
              </label>
            </div>
          </div>
          <InputField
            label={"Affiliate Sub ID 1"}
            bg={"#FFF"}
            size={"sm"}
            placeholder={"Affiliate Sub ID 1"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Affiliate Sub ID 2"}
            bg={"#FFF"}
            size={"sm"}
            placeholder={"Affiliate Sub ID 2"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Affiliate Sub ID 3"}
            bg={"#FFF"}
            size={"sm"}
            placeholder={"Affiliate Sub ID 3"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Affiliate Sub ID 4"}
            bg={"#FFF"}
            size={"sm"}
            placeholder={"Affiliate Sub ID 4"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputField
            label={"Affiliate Sub ID 5"}
            bg={"#FFF"}
            size={"sm"}
            placeholder={"Affiliate Sub ID 5"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <div className="mt-5 max-[576px]:mt-2 flex gap-[21px] max-[576px]:flex-col">
            <OutletButton text={"Close"} />
            <AddButton text={"Update"} varient={"black"} />
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default SmartLinkUpdateModal;
