import AddButton from "../Button/AddButton";
import OutletButton from "../Button/OutletButton";
import InputBottom from "../InputField/InputBottom";
import { SelectBottom } from "../InputField/SelectBottom";
import SelectFiled from "../InputField/SelectFiled";

const OfferSyncModal = () => {
  return (
    <dialog id="modal" className="modal">
      <div className="modal-box pt-[81px] max-[576px]:pt-8 px-10 max-[576px]:p-5 raounded-[10px] bg-[#F5F5F5] max-w-[768px] max-[800px]:w-full">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h1 className="text-primaryColor font-semibold text-2xl text-center">
          Quick Import
        </h1>
        <form className="p-2.5 my-[30px] max-[576px]:my-4">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[60px] md:gap-10 gap-5">
            <SelectBottom
              label={"Source Network"}
              size={"base"}
              name={"name"}
              select={[
                { value: "Robi", option: "Robi" },
                { value: "Airtel", option: "Airtel" },
              ]}
            />
            <InputBottom
              label={"Source Network"}
              placeholder={"Ex: 8484"}
              name={"Name"}
              required={"required"}
            />
          </div>
          <div className="mt-[40px]">
            <h1 className="text-primaryColor font-semibold text-base">
              Offer Classifications to Assign
            </h1>
            <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-[34px] gap-5">
              <SelectFiled
                bg={"#FFF"}
                name={"name"}
                select={[
                  { value: "Offer Category", option: "Offer Category" },
                  { value: "Offer Category", option: "Offer Category" },
                ]}
              />
              <SelectFiled
                bg={"#FFF"}
                name={"name"}
                select={[
                  { value: "Channel", option: "Channel" },
                  { value: "Channel", option: "Channel" },
                ]}
              />
              <SelectFiled
                bg={"#FFF"}
                name={"name"}
                select={[
                  { value: "Incentive", option: "Incentive" },
                  { value: "Incentive", option: "Incentive" },
                ]}
              />
              <SelectFiled
                bg={"#FFF"}
                name={"name"}
                select={[
                  { value: "Vertical", option: "Vertical" },
                  { value: "Vertical", option: "Vertical" },
                ]}
              />
              <SelectFiled
                bg={"#FFF"}
                name={"name"}
                select={[
                  { value: "Conversion Type", option: "Conversion Type" },
                  { value: "Conversion Type", option: "Conversion Type" },
                ]}
              />
              <SelectFiled
                bg={"#FFF"}
                name={"name"}
                select={[
                  { value: "Media Placements", option: "Media Placements" },
                  { value: "Media Placements", option: "Media Placements" },
                ]}
              />
            </div>
          </div>
          <div className="mt-[30px] flex gap-6 max-[576px]:flex-col max-[576px]:gap-5">
            <OutletButton text={"Cancel"} varient={"black"} />
            <AddButton text={"Submit"} varient={"black"} />
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default OfferSyncModal;
