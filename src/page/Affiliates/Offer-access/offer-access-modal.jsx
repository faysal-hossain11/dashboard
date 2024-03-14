import AddButton from "../../../components/Button/AddButton";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";
import InputField from "../../../components/InputField/InputField";


const OfferAccessModal = () => {
    return (
        <div>
            <dialog id="my_modal_3"  className="modal">
              <div className="modal-box max-w-[768px] h-[450px] py-[60px] px-[40px]">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="text-center mb-4">
                    <MiddleHeader heading={"Email Server Settings"} />
                </div>
                <div>
                    <InputField label={"Select Advertiser"} bg={"#F5F5F5"} size={"xl"} placeholder={"Type here"} require={"require"} type={"text"} name={"name"}/>  
                </div>
                <div className="mt-5">
                      <AddButton text={"Block Access"} varient={"red"} />
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
        </div>
    );
};

export default OfferAccessModal;