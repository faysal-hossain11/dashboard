
import ActiveBadgeButton from "../../../components/Button/ActiveBadgeButton";
import BlackButton from "../../../components/Button/BlackButton";
import { BlockBtn } from "../../../components/Button/MarcosBtn";
import PostBackDeleteButton from "../../../components/Button/PostBackDeleteButton";
import { Headers } from "../../../components/Headers/Headers";
import SelectFiled from "../../../components/InputField/SelectFiled";
import OfferAccessModal from "./offer-access-modal";
import Offeraccessmodalblack from "./offer-access-modal-black";

const OfferAccess = () => {
  return (
    <div>
      <div>
        <Headers text={{ heading: 'Statistics' }}>
            <button onClick={()=>document.getElementById('my_modal_4').showModal()}>
              <BlackButton
                text={'Allow Offers'}
            />
            </button>
            <OfferAccessModal />
            <div className="w-[110px]">
              <button onClick={()=>document.getElementById('my_modal_3').showModal()}>
                <BlockBtn text={"Block"} bg={"#F23B01"} />
              </button>
              <Offeraccessmodalblack />
            </div>
        </Headers>
      </div>
      <div className="w-[120px]  mt-7">
        <SelectFiled  size={"xl"} bg={"#FFF"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
      </div>
      <div className=" rounded-[10px] bg-white mt-11 px-5 py-4">
        <div>
          <table className="w-full">
            <thead>
              <tr className="bg-black text-withe">
                <th className="py-4 text-white text-left pl-4">Offer ID</th>
                <th className="py-4 text-white text-right pr-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4"><p className=" font-primaryFont text-tartiaryColor text-[14px]">SweepstakesADay - Win $5,000 - One Field ID</p></td>
                <td className="py-4"><ActiveBadgeButton text={"Allowed"} badged={"active"} /></td>
              </tr>
            </tbody>
          </table>
          <div className="mt-5">
            <PostBackDeleteButton
              icon={"iconamoon:trash-duotone"}
              text={"Delete Selected"}
              bg={"delete"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferAccess;
