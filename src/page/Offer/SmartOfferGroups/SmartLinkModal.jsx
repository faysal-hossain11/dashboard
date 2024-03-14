import AddButton from "../../../components/Button/AddButton";
import OutletButton from "../../../components/Button/OutletButton";
import { Headers } from "../../../components/Headers/Headers";
import InputField from "../../../components/InputField/InputField";
import SelectFiled from "../../../components/InputField/SelectFiled";
import Textarea from "../../../components/InputField/Textarea";

const SmartOfferModal = () => {
  return (
    <dialog id="globalSmart-modal" className="modal">
      <div className="modal-box max-w-[621px] p-[60px] bg-[#F6F6F6] max-[767px]:p-10 max-[576px]:p-5">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form>
          <div className="grid grid-cols-1 gap-5 max-[576px]:gap-3">
            <Headers text={{ heading: "Smart Link" }}></Headers>
            <SelectFiled
              label={"Select Affiliate"}
              size={"sm"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Active", option: "Active" },
                { value: "Active", option: "Active" },
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
            <div className="flex gap-10 max-[576px]:flex-col max-[px]:gap-5">
              <div className="flex gap-5">
                <input
                  className="h-6 w-6 text-tableColor"
                  type="checkbox"
                  name=""
                  id="1"
                />
                <label
                  htmlFor="1"
                  className="text-tableColor font-normal text-base"
                >
                  Add Affiliate Sub IDs
                </label>
              </div>
              <div className="flex gap-5">
                <input
                  className="h-6 w-6 text-tableColor"
                  type="checkbox"
                  name=""
                  id="2"
                />
                <label
                  htmlFor="2"
                  className="text-primaryColor font-normal text-base"
                >
                  Add Source ID
                </label>
              </div>
            </div>
            <InputField
              label={"Link"}
              bg={"#FFF"}
              size={"sm"}
              placeholder={"Source iD"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <div className="mt-5 w-full flex gap-[21px] max-[576px]:flex-col max-[576px]:gap-5">
              <OutletButton text={"Close"} />
              <AddButton text={"Update"} varient={"black"} />
            </div>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default SmartOfferModal;
