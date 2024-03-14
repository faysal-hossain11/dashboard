import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";

const SyncSettings = () => {
  return (
    <div>
      <Headers text={{ heading: "Offer Grabber" }}></Headers>
      <div className="mt-[41.5px] max-[576px]:mt-5 grid grid-cols-2 gap-y-[50px] max-w-[1045px] mx-auto max-[767px]:grid-cols-1 max-[767px]:gap-y-5">
        <div className="flex align-center gap-5">
          <input
            className="text-primaryColor h-[30px] w-[30px]"
            type="checkbox"
            name=""
            id="1"
          />
          <label
            className="text-lg font-normal max-[576px]:text-sm primaryColor"
            htmlFor="1"
          >
            Sync Imported Offers Status with Offer Source
          </label>
        </div>
        <div className="flex align-center gap-5">
          <input
            className="text-primaryColor h-[30px] w-[30px]"
            type="checkbox"
            name=""
            id="2"
          />
          <label
            className="text-lg font-normal max-[576px]:text-sm primaryColor"
            htmlFor="2"
          >
            Sync Imported Offers Payout/Revenue with Offer Source
          </label>
        </div>
        <div className="flex align-center gap-5">
          <input
            className="text-primaryColor h-[30px] w-[30px]"
            type="checkbox"
            name=""
            id="3"
          />
          <label
            className="text-lg font-normal max-[576px]:text-sm primaryColor"
            htmlFor="3"
          >
            Sync Imported Offers Name with Offer Source
          </label>
        </div>
        <div className="flex align-center gap-5">
          <input
            className="text-primaryColor h-[30px] w-[30px]"
            type="checkbox"
            name=""
            id="4"
          />
          <label
            className="text-lg font-normal max-[576px]:text-sm primaryColor"
            htmlFor="4"
          >
            Sync Imported Offers Description with Offer Source
          </label>
        </div>
        <div className="flex align-center gap-5">
          <input
            className="text-primaryColor h-[30px] w-[30px]"
            type="checkbox"
            name=""
            id="5"
          />
          <label
            className="text-lg font-normal max-[576px]:text-sm primaryColor"
            htmlFor="5"
          >
            Sync Imported Offers Targeting Rules with Offer Source
          </label>
        </div>
      </div>
      <div className="mt-[60px] flex justify-center pb-5 max-[576px]:mt-8">
        <BlackButton text={"Save"} icon={"carbon:checkmark"} />
      </div>
    </div>
  );
};

export default SyncSettings;
