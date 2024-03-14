import AddButton from "../../../components/Button/AddButton";
import OutletButton from "../../../components/Button/OutletButton";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";
import InputBottom from "../../../components/InputField/InputBottom";
import SelectFiled from "../../../components/InputField/SelectFiled";

const OfferCategoriesModal = () => {
  return (
    <dialog id="offerCategories-modal" className="modal">
      <div className="modal-box max-w-[768px] bg-modalBg rounded-[10px] xl:pt-[93px] xl:pl-[129px] xl:pr-[135px] xl:pb-[98px] lg:px-20 md:px-10 px-5 lg:py-24 md:py-12 py-6">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-10 max-[767px]:gap-5">
          <div className="flex justify-center">
            <MiddleHeader heading={"Create Category"} />
          </div>
          <InputBottom
            label={"Name"}
            placeholder={"Fashion Branding"}
            name={"Name"}
            required={"required"}
          />
          <SelectFiled
            label={"Status"}
            size={"sm"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Active", option: "Active" },
              { value: "Inactive", option: "Inactive" },
            ]}
          />
          <div className="mt-5 max-[576px]:mt-0 flex gap-6 max-[576px]:flex-col">
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

export default OfferCategoriesModal;
